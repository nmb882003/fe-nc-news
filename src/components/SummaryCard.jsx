import { formatDateAndTime } from "../utils/helper.js";

const SummaryCard = ({ summary }) => {

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <div className="summarycard-details">
                <p>{summary.author}</p>
                <p>c {summary.comment_count} v {summary.votes}</p>
            </div>
            <div className="summarycard-details">
                <p>{formatDateAndTime(summary.created_at)}</p>
                <p>{summary.topic}</p>
            </div>
        </>
    )
}

export default SummaryCard;