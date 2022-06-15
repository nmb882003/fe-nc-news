const SummaryCard = ({summary}) => {
    return (
        <>
            <p>#{summary.article_id}</p>
            <h2>{summary.title}</h2>
            <p>Author: {summary.author}</p>
            <p>Topic: {summary.topic}</p>
            <p>Comments: {summary.comment_count}</p>
            <p>Votes: {summary.votes}</p>
            
        </>
    )

}

export default SummaryCard;