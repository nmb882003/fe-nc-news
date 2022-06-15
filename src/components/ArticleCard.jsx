const ArticleCard = ({ article }) => {
    return (
        <div className="articlecard">
            <p>{article.title}</p>
            <p>{article.body}</p>
            <p>{article.topic}</p>
            <p>Author {article.author}</p>
            <p>Comments {article.comment_count}</p>
            <p>Votes {article.votes}</p>
            <p>Created_at {article.created_at}</p>
        </div>
    )
}

export default ArticleCard;