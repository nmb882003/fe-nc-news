import { formatDateAndTime } from "../utils/helper.js";

const CommentCard = ({comment}) => {

    return (
        <>
            <p>{comment.author} commented:</p>
            <p>"{comment.body}"</p>
            <p>Posted {formatDateAndTime(comment.created_at)}</p>
        </>
    )
}

export default CommentCard;