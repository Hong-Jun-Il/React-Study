import { MuiTest } from "./components/MuiTest";
import { UsersProvider } from "./users/components/UsersProvider";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-100">
      <UsersProvider />
      {/* <MuiTest /> */}
    </main>
  );
}

export default App;
