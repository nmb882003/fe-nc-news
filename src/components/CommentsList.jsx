import { useEffect, useState } from 'react';
import CommentCard from "./CommentCard.jsx";

const CommentsList = (({ article_id }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`)

            .then(res => res.json())
            .then(({ comments }) => {
                setComments(comments);
            })
    }, [article_id])

    return (
        <ul className="commentslist">
            {comments.map(comment => {
                return (
                    <li className="commentcard" key={comment.comment_id}>
                        <CommentCard comment={comment} />
                    </li>
                )
            })}
        </ul>
    )
})

export default CommentsList;