const CommentCard = ({comment}) => {
    return (
        <div>
            <p>"{comment.body}"</p>
            <p>Posted by {comment.author} on {comment.created_at}</p>
        </div>
    )
}

export default CommentCard;