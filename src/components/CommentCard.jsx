const CommentCard = ({comment}) => {

    return (
        <>
            <p>{comment.author} commented:</p>
            <p>"{comment.body}"</p>
            <p>Posted on {comment.created_at}</p>
        </>
    )
}

export default CommentCard;