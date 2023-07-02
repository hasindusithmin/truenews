import { useState } from "react"
import Navbar from "./components/Navbar";
import Bar from "./components/Bar";
import Home from "./components/Home";
import News from "./components/News";
import axios from "axios";
import { Typewriter } from 'react-simple-typewriter'

function App() {

  const [shHome, setshHome] = useState(true)
  const [shWait, setshWait] = useState(false)
  const [shErr, setshErr] = useState(false)
  const [news, setNews] = useState(false)
  const [category, setCategory] = useState(false)

  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }

  const [isProcessing, setIsProcessing] = useState(false);
  const [summary, setSummary] = useState('');
  const [summaryErr, setSummaryErr] = useState('');
  const [summaryProcessing, setSummaryProcessing] = useState(false);

  const handler = e => {
    const category = e.target.id;
    setIsProcessing(true)
    setshHome(false)
    setNews(false)
    setshErr('')
    setCategory(false)
    setshWait(true)
    setSummary(false)
    setSummaryErr(false)
    w3_close()
    axios.get(`https://newsapi-1-t3408867.deta.app/${category}`)
      .then(responese => {
        setshWait(false)
        setCategory(category)
        setNews(responese.data)
        let prompt = '';
        prompt += '### News Titles\n'
        responese.data.forEach(({ title }) => {
          prompt += `- ${title}\n`;
        })
        prompt += "Provide a concise summary of the news without any other sentences"
        setSummaryProcessing(true);
        axios.post('https://claudeapi.onrender.com', { prompt }, {
          auth: {
            username: process.env.REACT_APP_UNAME,
            password: process.env.REACT_APP_PWORD
          }
        })
          .then(res => {
            setIsProcessing(false)
            setSummary(res.data);
            setSummaryProcessing(false);
          })
          .catch(err => {
            setIsProcessing(false)
            setSummaryErr(err.message);
            setSummaryProcessing(false);
          })
      })
      .catch(error => {
        setIsProcessing(false)
        setshWait(false)
        setshErr(error.message)
      })

  }

  return (
    <>
      <Navbar handler={handler} isProcessing={isProcessing} />
      <div className="w3-main" style={{ marginLeft: '250px' }}>

        <Bar />

        {shHome && <Home />}

        {shWait && <p className="w3-center"> <i className="fa fa-spinner w3-spin" style={{ fontSize: '64px' }}></i> </p>}

        {shErr && <p className="w3-center w3-text-red w3-large"><b>{shErr}</b></p>}

        {
          category && (
            <div className="w3-display-container w3-center">
              <img className="w3-image w3-round-large" src={`/photos/${category}.jpg`} alt={category}></img>
              <div className="w3-display-bottommiddle w3-xxlarge w3-padding w3-round-large w3-text-white">{category.toUpperCase()}</div>
            </div>
          )
        }
        <div className="w3-container w3-padding">
          {
            summaryProcessing && <p className="w3-text-blue w3-center"><img className="w3-image w3-round-large" width={100} height={100} src="/soon.gif" alt="soon"></img></p>
          }
          {
            summary && <p className="w3-text-blue"><b><Typewriter words={[summary]} typeSpeed={20} cursor /></b></p>
          }
          {
            summaryErr && <p className="w3-center w3-text-red w3-large w3-justify"><b>{summaryErr}</b></p>
          }
        </div>

        {
          news
          &&
          <div className="w3-container w3-padding-32" style={{ display: 'block' }}>
            {news.map(({ title, description, link, pubDate }) => (
              <News
                key={Math.random().toString()}
                title={title} description={description}
                link={link}
                pubDate={pubDate}
              />
            ))}
          </div>
        }

      </div>
    </>
  )
}

export default App;
