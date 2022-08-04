import { formatDateAndTime } from "../utils/helper.js";

const SummaryCard = ({ summary }) => {

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <div className="summarycard-details">
                <p><span className="material-icons">account_circle</span>{summary.author}</p>
                <p><span className="material-icons">thumb_up</span>{summary.votes}&nbsp;&nbsp;<span className="material-icons">chat_bubble</span>{summary.comment_count}</p>
            </div>
            <div className="summarycard-details">
                <p><span className="material-icons">access_time</span>{formatDateAndTime(summary.created_at)}</p>
                <p><span className="material-icons">topic</span>{summary.topic}</p>
            </div>
        </>
    )
}

export default SummaryCard;