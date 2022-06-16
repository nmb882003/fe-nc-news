import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';
import VoteButton from './VoteButton.jsx';

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [votes, setVotes ] = useState(0);

    const {article_id} = useParams();

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}`)

            .then(res => res.json())
            .then(({ article }) => {
                setArticle(article);
                setVotes(article.votes);
                setIsLoading(false);
            });
    }, [article_id])

    if (isLoading) {
        return <p>Please wait while we fetch your article...</p>
    }

    return (
        <div>
            <ArticleCard article={article} votes={votes}/>
            <button onClick={() => goBack()}>Go Back</button>
            <VoteButton article={article} setVotes={setVotes}/>
        </div>
    )
}

export default Article;