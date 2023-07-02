import moment from "moment"

export default function News({ title, description, link, pubDate }) {

    const browserDateTime = moment(pubDate, 'ddd, DD MMM YYYY HH:mm:ss ZZ');
    const formattedDateTime = browserDateTime.format('YYYY-MM-DD HH:mm:ss');

    return (
        <div className="w3-margin-top w3-padding w3-round-large w3-card w3-display-container">
            <h5>{title}</h5>
            <p className="w3-text-grey w3-monospace">{description}</p>
            <p><code>{formattedDateTime}</code></p>
            <div className="w3-display-topright w3-padding w3-round-large">
                <a href={link} target="_blank" rel="noreferrer" title="Read More">
                 <i className="fa fa-external-link" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    )
}
