import { Navbar, Welcome, Dock } from "#components/index";

const App = (): React.ReactNode => {
  return (
    <main>
      <Navbar />
      <Welcome />
      <Dock />
    </main>
  );
};

export default App;
