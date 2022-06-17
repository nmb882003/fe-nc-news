import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';
import CommentsList from "./CommentsList.jsx";

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(true);

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
        <div className="articlecard-container">
            <p className="left">Posted by user {article.author} at {article.created_at.split("T")[1].slice(0,8)} on {article.created_at.split("T")[0]}:</p>
            <ArticleCard article={article} setShowComments={setShowComments}/> 
            <button onClick={() => goBack()}>Go Back</button>
            <CommentsList article_id={article.article_id} showComments={showComments}/>
        </div>
    )
}

export default Article;