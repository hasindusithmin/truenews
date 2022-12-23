import { useState } from "react"
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Home from "./components/Home";
import News from "./components/News";
function App() {

  const [shHome,setshHome] = useState(true)
  const [shWait,setshWait] = useState(false)
  const [shErr,setshErr]  = useState(false)
  const [news,setNews] = useState(false)
  const [category,setCategory] = useState(false)

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  const handler = e => {
    const category = e.target.id;
    setshHome(false)
    setNews(false)
    setCategory(false)
    setshWait(true)
    w3_close()
    fetch(`https://newsapi.deta.dev/${category}`)
      .then(res=>{
        if (res.status !== 200) throw Error("")
        return res.json()
      })
      .then(news=>{
        setshWait(false)
        setCategory(category.toUpperCase())
        setNews(news)
      })
      .catch(error=>{
        setshWait(false)
        setshErr(true)
        setTimeout(()=>{
          setshErr(false)
          setshHome(true)
        },1500)
      })
  }

  return (
    <>
      <Navbar handler={handler} />
      <div className="w3-main" style={{ marginLeft: '250px' }}>
        <Bar />
        {shHome && <Home />}

        {shWait && <p className="w3-center"> <i className="fa fa-spinner w3-spin" style={{fontSize:'64px'}}></i> </p>}

        {shErr && <p className="w3-center w3-text-red w3-large"><b>server busy try again later</b></p>}

        {category && <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide w3-xxlarge">{category}</span></h5>}

        {
          news
          &&
          <div className="w3-container w3-padding-48" style={{display:'block'}}>
              {news.map(({title,description,link,pubDate})=><News key={Math.random().toString()} title={title} description={description} link={link} pubDate={pubDate}/>)}
          </div>
        }

      </div>
    </>
  )
}

export default App;
