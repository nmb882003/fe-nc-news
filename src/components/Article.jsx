import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import ArticleCard from './ArticleCard.jsx';
import CommentsList from './CommentsList.jsx';
import CommentForm from './CommentForm.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import { getArticle } from '../utils/api.js';

const Article = () => {
    const [article, setArticle] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [showComments, setShowComments] = useState(false);
    const [showButtons, setShowButtons] = useState(true);
    const [showForm, setShowForm] = useState(false);
    const [numberOfComments, setNumberOfComments] = useState(0);
    const [error, setError] = useState(null);

    const { article_id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        getArticle(article_id)

            .then(res => {
                return (res.ok) ? res.json() : Promise.reject({ status: res.status, msg: res.statusText });
            })

            .then(({ article }) => {
                setArticle(article);
                setNumberOfComments(article.comment_count);
                setIsLoading(false);
            })
            .catch(err => setError(err));

    }, [article_id, numberOfComments])

    return (
        <>
            {error ? <ErrorComponent msg={error.msg} code={error.status} /> :
                isLoading ? (
                    <div>
                        <div></div>
                        <p className="article-loading">Please wait while we fetch your article...</p>
                    </div>
                ) : (
                    <div className="article-container">
                        <div className="articlecard-container">
                            <ArticleCard article={article} showComments={showComments} setShowComments={setShowComments} setShowForm={setShowForm} showButtons={showButtons} setShowButtons={setShowButtons} />
                            <button className="back-button" onClick={() => goBack()}>Go Back</button>
                        </div>
                        {showComments === true && <div className="comments-container">
                            <CommentsList article_id={article.article_id} setNumberOfComments={setNumberOfComments} />
                        </div>}
                        {showForm === true && <div className="commentform-container">
                            <CommentForm setShowButtons={setShowButtons} setShowForm={setShowForm} article_id={article_id} setNumberOfComments={setNumberOfComments} />
                        </div>}
                    </div>
                )
            }
        </>
    )
}

export default Article;