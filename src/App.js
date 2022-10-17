import { useState } from "react"
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Home from "./components/Home";
import News from "./components/News";
function App() {

  const [shHome,setshHome] = useState(true)
  const [news,setNews] = useState(false)
  const [category,setCategory] = useState(false)

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  const handler = e => {
    const category = e.target.id;
    w3_close()
    fetch(`https://newsapi.deta.dev/${category}`)
      .then(res=>{
        if (res.status === 200) return res.json()
        else {
          console.log(res.status);
        }
      })
      .then(news=>{
        setshHome(false)
        setCategory(category.toUpperCase())
        setNews(news)
      })
  }

  return (
    <>
      <Navbar handler={handler} />
      <div className="w3-main" style={{ marginLeft: '250px' }}>
        <Bar />
        {shHome && <Home />}
        {category && <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">{category}</span></h5>}
        {
          news
          &&
          <div className="w3-container w3-padding-48 w3-card" style={{display:'block'}}>
              {news.map(({title,description,link,pubDate})=><News key={Math.random().toString()} title={title} description={description} link={link} pubDate={pubDate}/>)}
          </div>
        }
      </div>
    </>
  )
}

export default App;
