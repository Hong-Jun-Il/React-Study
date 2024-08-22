import Items from "./components/Items";
import Select from "./components/Select";

function App() {

  return (
    <main className="flex flex-col w-screen bg-main-color items-center">
      <Select />
      <Items />
    </main>
  );
}

export default App;
