import news from "../news.jpg"

export default function Home({ handler }) {

    return (
        <div className="w3-display-container w3-container">
            <img src={news} alt="News" style={{ width: '100%' }} />
            <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                <h1 className="w3-jumbo w3-hide-small">We Report You Decide</h1>
                <h1 className="w3-hide-large w3-hide-medium w3-cursive">We Report You Decide</h1>
            </div>
            <p><b>The news are available for the following sections:</b></p>
            <p className="w3-text-grey w3-bold">Local, India, World, Sports, Science, Cricket, Business, Football, Opinions, South Asia, Entertainment   </p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"The bad news is nothing lasts forever, The good news is nothing lasts forever." </i></p>
            </div>
            <p><span className="w3-tag">FYI!</span> Are you interested in advertising on our website please contact</p>
            <div className="w3-row-padding w3-center w3-padding-24" style={{margin:'0 -16px'}}>
                <div className="w3-half w3-dark-grey">
                    <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                    <p>mail@domain.com</p>
                </div>
                <div className="w3-half w3-teal">
                    <p><i className="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                    <p>+947xxxxxxxx</p>
                </div>
            </div>
        </div>
    )

}
