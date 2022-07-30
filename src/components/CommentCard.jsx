const CommentCard = ({comment}) => {
    const [date, time] = comment.created_at.split("T");

    return (
        <>
            <p>{comment.author} commented:</p>
            <p>"{comment.body}"</p>
            <p>Posted on {date} at {time.slice(0, 8)}</p>
        </>
    )
}

export default CommentCard;