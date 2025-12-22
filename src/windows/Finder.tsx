import WindowControls from "#components/WindowControls";
import { locations } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useFinderLocationStore from "#store/finderLocation";
import { Search } from "lucide-react";
import cx from "classnames";
import useWindowStore from "#store/window";
import { WINDOW_CONFIG } from "#constants/index";

const Finder = (): React.ReactNode => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useFinderLocationStore();

  const getWindowId = (
    fileType: string,
    kind: string
  ): keyof typeof WINDOW_CONFIG | null => {
    if (fileType === "pdf") {
      return "resume";
    }
    if (kind === "file") {
      if (fileType === "txt") return "txtfile";
      if (fileType === "img") return "imgfile";
    }
    return null;
  };

  const openItems = (item) => {
    if (item.fileType === "pdf") {
      return openWindow("resume");
    } else if (item.kind === "folder") {
      return setActiveLocation(item);
    } else if (item.fileType === "url") {
      return window.open(item.href, "_blank");
    }
    const windowId = getWindowId(item.fileType, item.kind);
    if (windowId) {
      openWindow(windowId, item);
    }
  };

  const renderList = (name, items) => (
    <div>
      <h3>{name}</h3>
      <ul>
        {items.map((item) => (
          <li
            key={item.id}
            onClick={() => setActiveLocation(item)}
            className={cx({
              active: activeLocation?.id === item.id,
              "not-active": activeLocation?.id !== item.id,
            })}
          >
            <img src={item.icon} alt={item.name} className="w-4" />
            <p className="text-sm font-medium truncate">{item.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <>
      <div id="window-header">
        <WindowControls target="finder" />
        <Search className="icon" />
      </div>
      <div className="bg-white flex h-full">
        <div className="sidebar">
          {renderList("Favorites", Object.values(locations))}
          {renderList("My Projects", locations.work.children)}
        </div>
        <ul className="content">
          {activeLocation?.children.map((item) => (
            <li
              key={item.id}
              className={item.position}
              onClick={() => openItems(item)}
            >
              <img src={item.icon} alt={item.name} />
              <p>{item.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const FinderWindow = WindowWrapper(Finder, "finder");

export default FinderWindow;
