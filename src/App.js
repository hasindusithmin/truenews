import { useState } from "react"
import Navbar from "./components/Navbar";
import Home from "./components/Home";
function App() {

  const [shHome,setshHome] = useState(true)

  return (
    <>
      <Navbar />
      {shHome && <Home />}
    </>
  )
}

export default App;
