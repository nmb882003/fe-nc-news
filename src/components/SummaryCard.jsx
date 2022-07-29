const SummaryCard = ({ summary }) => {

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <div className="summarycard-body">
                <p>{summary.author}</p>
                <p>{summary.created_at}</p>
            </div>
            <div className="summarycard-body">
                <p>c: {summary.comment_count} v: {summary.votes}</p>
                <p>In topic: {summary.topic}</p>
            </div>
        </>
    )
}

export default SummaryCard;