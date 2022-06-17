import CommentCard from "./CommentCard.jsx";
import { useEffect } from 'react';

const CommentsList = (({ article, showComments }) => {
    useEffect(() => {
        fetch();
    })

    if (showComments) {
        return (
            <ul>
                <CommentCard />
            </ul>
        )
    }
})

export default CommentsList;