import news from "../news.jpg"

export default function Home() {

    return (
        <div className="w3-main" style={{ marginLeft: '250px' }}>
            <div className="w3-hide-large" style={{ marginTop: '83px' }}></div>
            <header className="w3-container w3-xlarge">
                <p className="w3-left w3-text-grey"><b>TRUE NEWS</b></p>
                <p className="w3-right w3-text-grey">
                    <i className="fa fa-search"></i>
                </p>
            </header>
            <div className="w3-display-container w3-container">
                <img src={news} alt="News" style={{width:'100%'}} />
                <div className="w3-display-topleft w3-text-white" style={{padding:'24px 48px'}}>
                <h1 className="w3-jumbo w3-hide-small w3-cursive">We Report You Decide</h1>
                <h1 className="w3-hide-large w3-hide-medium w3-cursive">We Report You Decide</h1>
            </div>
        </div>
        </div>
    )

}