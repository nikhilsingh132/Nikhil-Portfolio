import { Navbar, Welcome, Dock } from "#components/index";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Terminal, Safari, Resume } from "./windows";
gsap.registerPlugin(Draggable);

const App = (): React.ReactNode => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
      <Safari />
      <Resume />
    </main>
  );
};

export default App;
