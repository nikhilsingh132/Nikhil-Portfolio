import { Navbar, Welcome, Dock, Home } from "#components/index";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import {
  Terminal,
  Safari,
  Resume,
  Finder,
  TextViewer,
  ImageViewer,
  Contact,
} from "./windows";
import { useEffect, useState } from "react";
gsap.registerPlugin(Draggable);

const wallpapers = [
  "/wallpapers/wallpaper1.jpg",
  "/wallpapers/wallpaper2.jpg",
  "/wallpapers/wallpaper3.jpg",
  "/wallpapers/wallpaper4.jpg",
  "/wallpapers/wallpaper5.jpg",
];

// Preload all wallpapers on app load
const preloadImages = (urls: string[]): Promise<void[]> => {
  return Promise.all(
    urls.map(
      (url) =>
        new Promise<void>((resolve) => {
          const img = new Image();
          img.onload = () => resolve();
          img.onerror = () => resolve(); // Don't block on error
          img.src = url;
        })
    )
  );
};

const App = (): React.ReactNode => {
  const [currentWallpaper, setCurrentWallpaper] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Preload all wallpapers on mount
  useEffect(() => {
    preloadImages(wallpapers).then(() => {
      setImagesLoaded(true);
    });
  }, []);

  // Start rotation only after images are loaded
  useEffect(() => {
    if (wallpapers.length <= 1 || !imagesLoaded) return;

    const interval = setInterval(() => {
      setCurrentWallpaper((prev) => (prev + 1) % wallpapers.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, [imagesLoaded]);

  return (
    <main>
      <div
        id="wallpaper"
        style={{ backgroundImage: `url(${wallpapers[currentWallpaper]})` }}
      />
      <Navbar />
      <Welcome />
      <Dock />
      <Home />

      <Terminal />
      <Safari />
      <Resume />
      <Finder />
      <TextViewer />
      <ImageViewer />
      <Contact />
    </main>
  );
};

export default App;
