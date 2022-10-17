import news from "../news.jpg"

export default function Home({handler}) {

    return (
        <div className="w3-display-container w3-container">
            <img src={news} alt="News" style={{ width: '100%' }} />
            <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                <h1 className="w3-jumbo w3-hide-small w3-cursive">We Report You Decide</h1>
                <h1 className="w3-hide-large w3-hide-medium w3-cursive">We Report You Decide</h1>
            </div>
            <p><b>The news are available for the following sections:</b></p>
            <p className="w3-text-grey w3-bold">Local, India, World, Sports, Science, Cricket, Business, Football, Opinions, South Asia, Entertainment   </p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"The bad news is nothing lasts forever, The good news is nothing lasts forever." </i></p>
            </div>
            <p><span className="w3-tag">FYI!</span> Are you interested in advertising on our website please contact</p>
            <form target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required="" name="Name" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required="" name="Message" /></p>
                <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
            </form>
        </div>
    )

}