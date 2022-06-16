const ArticleCard = ({ article }) => {
    return (
        <div className="articlecard">
            <h2>{article.title}</h2>
            <p>{article.body}</p>
            <p>Listed in topic: {article.topic}</p>
            <p>Posted by {article.author} on {article.created_at}</p>
            <p>Comments {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
        </div>
    )
}

export default ArticleCard;