import { useNavigate } from 'react-router-dom';

const SummaryCard = ({ summary }) => {
    const navigate = useNavigate();

    const goFullArticle = () => {
        navigate(`/articles/${summary.article_id}`);
    }

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <div className="summarycard-body">
                <p>{summary.author}</p>
                <p>{summary.topic}</p>
            </div>
            <div className="summarycard-body">
                <p>{summary.created_at}</p>
                <p>c: {summary.comment_count} v: {summary.votes}</p>
            </div>
            <button onClick={() => goFullArticle()}>Click here to read full article!</button>
        </>
    )
}

export default SummaryCard;