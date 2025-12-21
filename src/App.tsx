import { Navbar, Welcome, Dock } from "#components/index";
import gsap from "gsap";
import { Draggable } from "gsap/Draggable";
import { Terminal } from "./windows";
gsap.registerPlugin(Draggable);

const App = (): React.ReactNode => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />

      <Terminal />
    </main>
  );
};

export default App;
