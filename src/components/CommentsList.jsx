import { useEffect, useState } from 'react';
import CommentCard from "./CommentCard.jsx";

const CommentsList = (({ article_id, setNumberOfComments }) => {
    const [comments, setComments] = useState([]);
    const [commentDeleted, setCommentDeleted] = useState(false);

    useEffect(() => {
        setCommentDeleted(false);

        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`)

            .then(res => res.json())
            .then(({ comments }) => {
                setComments(comments);
            })
    }, [article_id, commentDeleted])

    return (
        <ul className="commentslist">
            {comments.map(comment => {
                return (
                    <li className="commentcard" key={comment.comment_id}>
                        <CommentCard comment={comment} setCommentDeleted={setCommentDeleted} setNumberOfComments={setNumberOfComments}/>
                    </li>
                )
            })}
        </ul>
    )
})

export default CommentsList;