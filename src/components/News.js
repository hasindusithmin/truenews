

export default function News({title,description,link,pubDate}) {

    return (
        <div className="w3-margin-top w3-padding w3-round-large w3-card">
            <h5>
                <a href={link} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>{title}</a>
            </h5>
            <p className="w3-text-grey w3-monospace">{description}</p>
            <p><strong>pubDate&nbsp;:&nbsp;</strong><code>{pubDate.split('+')[0].trim()}</code></p>  
        </div>
    )
}
