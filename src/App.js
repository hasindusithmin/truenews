import { useState } from "react"
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Home from "./components/Home";
function App() {

  const [shHome,setshHome] = useState(true)

  return (
    <>
      <Navbar />
      <div className="w3-main" style={{ marginLeft: '250px' }}>
        <Bar />
        {shHome && <Home />}
      </div>
    </>
  )
}

export default App;
