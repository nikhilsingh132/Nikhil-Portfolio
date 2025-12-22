import WindowControls from "#components/WindowControls";
import WindowWrapper from "#hoc/WindowWrapper";
import useWindowStore from "#store/window";

const ImageViewer = (): React.ReactNode => {
  const { windows } = useWindowStore();
  const data = windows?.imgfile?.data;

  if (!data) return null;
  const { name, imageUrl } = data as { name: string; imageUrl: string };
  return (
    <>
      <div id="window-header">
        <WindowControls target="imgfile" />
        <h2>{name}</h2>
      </div>
      <div className="p-5 space-y-6 bg-white overflow-auto max-h-[calc(100%-40px)]">
        <img src={imageUrl} alt={name} className="w-full h-auto rounded" />
      </div>
    </>
  );
};

const ImageViewerWindow = WindowWrapper(ImageViewer, "imgfile");

export default ImageViewerWindow;
