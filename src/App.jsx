// import DemoTodo from './components/DemoTodo'

import { createContext } from "react"
import PropsDemo from "./components/PropsDemo"

export const UserContext = createContext()

function App() {
  const lastName = "Sharama";

  return (
    <>
      {/* <h1>Hello</h1> */}
      {/* <DemoUseEffectHook /> */}
      <UserContext.Provider value={lastName}>
        <PropsDemo />
      </UserContext.Provider>
    </>
  )
}

export default App
