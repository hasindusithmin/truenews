

export default function News({title,link,pubDate,description}) {
    return (
        <>
            <h5>
                <a href={link} target="_blank" rel="noreferrer">{title}</a>
            </h5>
            <p className="w3-text-grey">{description}</p>
            <p><strong>pubDate:</strong>{pubDate}</p>
        </>
    )
}