const CommentCard = ({comment}) => {
    const [date, time] = comment.created_at.split("T");

    return (
        <div>
            <p>{comment.author} commented:</p>
            <p>"{comment.body}"</p>
            <p>Posted on {date} @ {time.slice(0, 8)}</p>
        </div>
    )
}

export default CommentCard;