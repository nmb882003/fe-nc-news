import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {article_id} = useParams();

    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}`)

            .then(res => res.json())
            .then(({ article }) => {
                setArticle(article);
                setIsLoading(false);
            });
    }, [article_id])

    if (isLoading) {
        return <p>Please wait while we fetch your article...</p>
    }

    return (
        <div>
            <ArticleCard article={article}/>
            <button onClick={() => goBack()}>Go Back</button>
        </div>
    )
}

export default Article;