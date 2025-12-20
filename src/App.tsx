import { Navbar, Welcome } from "#components/index";

const App = (): React.ReactNode => {
  return (
    <main>
      <Navbar />
      <Welcome />
    </main>
  );
};

export default App;
