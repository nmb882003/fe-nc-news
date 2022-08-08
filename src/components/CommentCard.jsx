import { useState } from 'react';
import { formatDateAndTime } from "../utils/helper.js";

const CommentCard = ({ comment, setCommentDeleted, setNumberOfComments }) => {
    const [disableOnClick, setdisableOnClick] = useState(false);

    const loggedInUser = 'grumpy19';

    const deleteComment = (comment_id) => {
        setdisableOnClick(true);

        fetch(`https://neilb-nc-news-server.herokuapp.com/api/comments/${comment_id}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => {
                if (res.ok) {
                    alert("You comment has been deleted");
                    setdisableOnClick(false);
                    setCommentDeleted(true);
                    setNumberOfComments((current) => current - 1);
                }
            })
    }

    return (
        <>
            <p>{comment.author === loggedInUser ? <span className="bold">You</span> : comment.author} commented:</p>
            <p>"{comment.body}"</p>
            <div className="commentcard-container">
                <p>Posted {formatDateAndTime(comment.created_at)}</p>
                {comment.author === loggedInUser && <button className="commentcard-button" type="button" disabled={disableOnClick} onClick={() => deleteComment(comment.comment_id)}>❌&nbsp;&nbsp;Delete</button>}
            </div>
        </>
    )
}

export default CommentCard;