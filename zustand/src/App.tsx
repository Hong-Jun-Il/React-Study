import { useStore } from "./store/store"

function App() {
  const store = useStore();
  return (
    <>
      {JSON.stringify(store)}
    </>
  )
}

export default App
