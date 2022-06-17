import CommentCard from "./CommentCard.jsx";
import { useEffect, useState } from 'react';

const CommentsList = (({ article_id, showComments }) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`)

            .then(res => res.json())
            .then(({ comments }) => {
                setComments(comments);
            })
    }, [])

    if (showComments) {
        return (
            <ul className="commentslist">
                {comments.map(comment => {
                    return (
                        <li className="commentcard">
                            <CommentCard comment={comment}/>
                        </li>
                    )
                })}

            </ul>
        )
    }
})

export default CommentsList;