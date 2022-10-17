import news from "../news.jpg"

export default function Home() {

    return (
        <div className="w3-display-container w3-container">
            <img src={news} alt="News" style={{ width: '100%' }} />
            <div className="w3-display-topleft w3-text-white" style={{ padding: '24px 48px' }}>
                <h1 className="w3-jumbo w3-hide-small w3-cursive">We Report You Decide</h1>
                <h1 className="w3-hide-large w3-hide-medium w3-cursive">We Report You Decide</h1>
            </div>
            <h5 className="w3-center w3-padding-64"><span className="w3-tag w3-wide">ABOUT TRUE NEWS</span></h5>
            <p>The Cafe was founded in blabla by Mr. Smith in lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            <div className="w3-panel w3-leftbar w3-light-grey">
                <p><i>"Use products from nature for what it's worth - but never too early, nor too late." Fresh is the new sweet.</i></p>
                <p>Chef, Coffeeist and Owner: Liam Brown</p>
            </div>
            <p><span className="w3-tag">FYI!</span> We offer full-service catering for any event, large or small. We understand your needs and we will cater the food to satisfy the biggerst criteria of them all, both look and taste.</p>
            <p><strong>Reserve</strong> a table, ask for today's special or just send us a message:</p>
            <form action="/action_page.php" target="_blank">
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Name" required="" name="Name" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="number" placeholder="How many people" required="" name="People" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="datetime-local" placeholder="Date and time" required="" name="date" /></p>
                <p><input className="w3-input w3-padding-16 w3-border" type="text" placeholder="Message \ Special requirements" required="" name="Message" /></p>
                <p><button className="w3-button w3-black" type="submit">SEND MESSAGE</button></p>
            </form>
        </div>
    )

}