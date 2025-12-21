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
gsap.registerPlugin(Draggable);

const App = (): React.ReactNode => {
  return (
    <main>
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
