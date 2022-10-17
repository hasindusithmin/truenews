import { useState } from "react"
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Home from "./components/Home";
import News from "./components/News";
function App() {

  const [shHome,setshHome] = useState(true)
  const [shNews,setshNews] = useState(false)

  const handler = e => {
    const id = e.target.id;
    console.log(id);
  }

  return (
    <>
      <Navbar handler={handler} />
      <div className="w3-main" style={{ marginLeft: '250px' }}>
        <Bar />
        {shHome && <Home />}
        {
          shNews
          &&
          <div className="w3-container w3-padding-48 w3-card" style={{display:'block'}}>
              {shNews.map(news=><News news={news} />)}
          </div>
        }
      </div>
    </>
  )
}

export default App;
