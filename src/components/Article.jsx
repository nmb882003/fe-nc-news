import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';
import CommentsList from "./CommentsList.jsx";
import CommentForm from "./CommentForm.jsx";

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [showButtons, setShowButtons] = useState(true);
    const [showForm, setShowForm] = useState(false);

    const { article_id } = useParams();
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

    return (
        <>
            {isLoading ? <p>Please wait while we fetch your article...</p> :
                <div className="article-container">
                    <div className="articlecard-container">
                        <ArticleCard article={article} showComments={showComments} setShowComments={setShowComments} setShowForm={setShowForm} showButtons={showButtons} setShowButtons={setShowButtons}/>
                        <button className="back-button" onClick={() => goBack()}>Go Back</button>
                    </div>
                    {showComments === true && <div className="comments-container">
                        <CommentsList article_id={article.article_id} />
                    </div>}
                    {showForm === true && <div className="commentform-container">
                        <CommentForm setShowButtons={setShowButtons} setShowForm={setShowForm}/>
                    </div>}
                </div>
            }
        </>
    )
}

export default Article;