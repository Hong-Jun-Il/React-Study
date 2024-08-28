import { LoginProvider } from "./components/Test/LoginProvider";
import { MuiTest } from "./components/Test/MuiTest";
import { UsersProvider } from "./users/components/UsersProvider";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-sky-100">
      {/* <UsersProvider /> */}
      <LoginProvider />
    </main>
  );
}

export default App;
