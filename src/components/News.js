

export default function News({title,description,link,pubDate}) {

    return (
        <>
            <h5>
                <a href={link} target="_blank" rel="noreferrer" style={{textDecoration:'none'}}>{title}</a>
            </h5>
            <p className="w3-text-grey">{description}</p>
            <p><strong>pubDate&nbsp;:&nbsp;</strong>{pubDate}</p>  
        </>
    )
}