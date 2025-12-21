import useWindowStore from "#store/window";

const WindowControls = ({
  target,
}: {
  target:
    | "finder"
    | "contact"
    | "resume"
    | "safari"
    | "photos"
    | "terminal"
    | "txtfile"
    | "imgfile";
}): React.ReactNode => {
  const { closeWindow, toggleMaximize } = useWindowStore();

  return (
    <div id="window-controls">
      <div className="close" onClick={() => closeWindow(target)} />
      <div
        className="minimize"
        //   onClick={() => minimizeWindow(target)}
      />
      <div className="maximize" onClick={() => toggleMaximize(target)} />
    </div>
  );
};

export default WindowControls;
