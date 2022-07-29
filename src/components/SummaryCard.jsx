const SummaryCard = ({ summary }) => {

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <div className="summarycard-details">
                <p>{summary.author}</p>
                <p>{summary.comment_count} v: {summary.votes}</p>
            </div>
            <div className="summarycard-details">
                <p>{summary.created_at}</p>
                <p>In topic: {summary.topic}</p>
            </div>
        </>
    )
}

export default SummaryCard;