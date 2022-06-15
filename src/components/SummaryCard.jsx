import { useNavigate } from 'react-router-dom';

const SummaryCard = ({summary}) => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(`/articles/${summary.article_id}`);
    } 

    return (
        <>
            <p>#{summary.article_id}</p>
            <h2>{summary.title}</h2>
            <p>Author: {summary.author}</p>
            <p>Topic: {summary.topic}</p>
            <p>Comments: {summary.comment_count}</p>
            <p>Votes: {summary.votes}</p>
            <button onClick={() => goBack()}>Click here to read full article!</button>
        </>
    )

}

export default SummaryCard;