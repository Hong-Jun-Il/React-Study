import { useShallow } from "zustand/react/shallow"
import { useTestStore } from "./store/store"

function App() {
  const s = useTestStore();
  console.log(s);

  return (
    <>

    </>
  )
}

export default App
