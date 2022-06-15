import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    const {article_id} = useParams();

    useEffect(() => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}`)

            .then(res => res.json())
            .then(({ article }) => {
                setArticle(article);
                setIsLoading(false);
            });
    }, [])

    if (isLoading) {
        return <p>Please wait while we fetch your article...</p>
    }

    return (
        <div className="articlecard-container">
            <ArticleCard article={article}/>
            <button onClick={() => {}}>Go Back</button>
        </div>
    )
}

export default Article;