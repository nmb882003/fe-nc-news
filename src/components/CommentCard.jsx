const CommentCard = ({comment}) => {
    console.log(comment);
    return (
        <>
            <p>author: {comment.author}</p>
            <p>"{comment.body}"</p>
            <p>Posted on: {comment.created_at}</p>
        </>
    )
}

export default CommentCard;