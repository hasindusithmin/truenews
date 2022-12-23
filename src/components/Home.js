import tv from "../tv.gif"

export default function Home({ handler }) {

    return (
        <div className="w3-container">
            <div className="w3-xxlarge w3-hide-small w3-center w3-animate-fading w3-opacity"><b>We Report You Decide</b></div>
            <div className="w3-hide-large w3-hide-medium w3-small w3-center w3-animate-fading w3-opacity"><b>We Report You Decide</b></div>
            <div className="w3-center">
                    <img src={tv} alt="News" class="w3-image" style={{ width: '75%' }} />
            </div>
            <p><b>Stay up to date with the latest news from around the world with our comprehensive coverage in the following categories:</b></p>
            <p className="w3-text-grey w3-bold">
                <code>Local, India, World, Sports, Science, Cricket, Business, Football, Opinions, South Asia, and Entertainment.</code>
            </p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"The free press is the mother of all our freedoms. It is the guardian of the public trust. It is the cornerstone of our democracy."</i> - Lyndon B. Johnson</p>
            </div>
            <p><span className="w3-tag">FYI!</span> Are you interested in advertising on our website please contact</p>
            <div className="w3-row-padding w3-center w3-padding-24" style={{ margin: '0 -16px' }}>
                <div className="w3-half w3-dark-grey">
                    <p><i className="fa fa-envelope w3-xxlarge w3-text-light-grey"></i></p>
                    <p>hasindusithmin64@gmail.com</p>
                </div>
                <div className="w3-half w3-teal">
                    <p><i className="fa fa-map-marker w3-xxlarge w3-text-light-grey"></i></p>
                    <p>+94740765900</p>
                </div>
            </div>
        </div>
    )

}
