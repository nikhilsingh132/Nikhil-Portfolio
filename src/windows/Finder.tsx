import WindowControls from "#components/WindowControls";
import { locations } from "#constants/index";
import WindowWrapper from "#hoc/WindowWrapper";
import useFinderLocationStore from "#store/finderLocation";
import { Search } from "lucide-react";
import cx from "classnames";
import useWindowStore from "#store/window";

const Finder = (): React.ReactNode => {
  const { openWindow } = useWindowStore();
  const { activeLocation, setActiveLocation } = useFinderLocationStore();

  const openItems = (items) => {
    if (items.fileType === "pdf") {
      return openWindow("resume");
    } else if (items.kind === "folder") {
      return setActiveLocation(items);
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
