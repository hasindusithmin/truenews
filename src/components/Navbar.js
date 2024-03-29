
import news from "../news64.png"


export default function Navbar({handler,isProcessing}) {
  // Open and close sidebar
  function w3_open() {
    document.getElementById("mySidebar").style.display = "block";
    document.getElementById("myOverlay").style.display = "block";
  }
  
  function w3_close() {
    document.getElementById("mySidebar").style.display = "none";
    document.getElementById("myOverlay").style.display = "none";
  }
  return (
    <div >
      <nav className="w3-sidebar w3-bar-block w3-white w3-collapse w3-top" style={{zIndex:3,width:'250px'}} id="mySidebar">
        <div className="w3-container w3-display-container w3-padding-16">
          <i  onClick={w3_close} className="fa fa-remove w3-hide-large w3-button w3-display-topright w3-large"></i>
          <h3 className="w3-wide">
            <img src={news} alt='news' onClick={()=>{window.location.reload()}}/>
          </h3>
        </div>
        <div className="w3-padding-64 w3-large w3-text-grey" style={{fontWeight:'bold'}} >
          <button className="w3-bar-item w3-button" id="india" onClick={handler} disabled={isProcessing}>India 🇮🇳</button>
          <button className="w3-bar-item w3-button" id="world" onClick={handler} disabled={isProcessing}>World 🌍</button>
          <button className="w3-bar-item w3-button" id="sports" onClick={handler} disabled={isProcessing}>Sports 🏃🏻</button>
          <button className="w3-bar-item w3-button" id="science" onClick={handler} disabled={isProcessing}>Science 🔬</button>
          <button className="w3-bar-item w3-button" id="cricket" onClick={handler} disabled={isProcessing}>Cricket 🏏</button>
          <button className="w3-bar-item w3-button" id="business" onClick={handler} disabled={isProcessing}>Business 💰</button>
          <button className="w3-bar-item w3-button" id="football" onClick={handler} disabled={isProcessing}>Football ⚽</button>
          <button className="w3-bar-item w3-button" id="opinions" onClick={handler} disabled={isProcessing}>Opinions 💭</button>
          <button className="w3-bar-item w3-button" id="southasia" onClick={handler} disabled={isProcessing}>South Asia ⛰</button>
          <button className="w3-bar-item w3-button" id="entertainment" onClick={handler} disabled={isProcessing}>Entertainment 🎮</button>
        </div>
      </nav>
      <header className="w3-bar w3-top w3-hide-large w3-dark-grey w3-xlarge">
        <div className="w3-bar-item w3-padding-24 w3-wide">
          <img src={news} alt='news' width={32} height={32} onClick={()=>{window.location.reload()}} />
        </div>
        <button  className="w3-bar-item w3-button w3-padding-24 w3-right" onClick={w3_open} ><i className="fa fa-bars"></i></button>
      </header>
      <div className="w3-overlay w3-hide-large" onClick={w3_open} style={{cursor:'pointer'}} title="close side menu" id="myOverlay"></div>
    </div>
  );
}
