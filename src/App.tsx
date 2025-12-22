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

const App = (): React.ReactNode => {
  const [currentWallpaper, setCurrentWallpaper] = useState(0);

  useEffect(() => {
    if (wallpapers.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentWallpaper((prev) => (prev + 1) % wallpapers.length);
    }, 10000); // 10 seconds

    return () => clearInterval(interval);
  }, []);

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
