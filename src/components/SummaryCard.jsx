import { useNavigate } from 'react-router-dom';

const SummaryCard = ({summary}) => {
    const navigate = useNavigate();

    const goFullArticle = () => {
        navigate(`/articles/${summary.article_id}`);
    } 

    return (
        <>
            <h2 className="summarycard-heading">{summary.title}</h2>
            <p>Author: {summary.author}</p>
            <p>Topic: {summary.topic}</p>
            <p>Comments: {summary.comment_count}</p>
            <p>Votes: {summary.votes}</p>
            <button onClick={() => goFullArticle()}>Click here to read full article!</button>
        </>
    )
}

export default SummaryCard;