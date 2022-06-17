const CommentCard = ({comment}) => {
    console.log(comment);
    return (
        <div className="commentcard">
            <p>"{comment.body}"</p>
            <p>Posted by {comment.author} on {comment.created_at}</p>
        </div>
    )
}

export default CommentCard;