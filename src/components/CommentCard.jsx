const CommentCard = ({comment}) => {
    const [date, time] = comment.created_at.split("T");

    return (
        <div>
            <p>{comment.author} commented on {date} @ {time.slice(0, 8)} :</p>
            <p>"{comment.body}"</p>
        </div>
    )
}

export default CommentCard;