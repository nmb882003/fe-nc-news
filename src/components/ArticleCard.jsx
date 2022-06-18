import { useState } from 'react';
import VoteButton from './VoteButton.jsx'; 

const ArticleCard = ({ article, showComments, setShowComments }) => {
    const [userVotes, setUserVotes] = useState(0);

    const showCommentsList = (showComments) => {
        if (showComments) {
            setShowComments(false);
        } else {
            setShowComments(true);
        }
    };

    return (
        <article className="articlecard">
            <h3 className="card-header">{article.title}</h3>
            <p>{article.body}</p>
            <p>Found in topic: {article.topic}</p>
            <p>{article.comment_count} comments</p>
            <p>{article.votes + userVotes} votes</p>
            <VoteButton article={article} setUserVotes={setUserVotes}/>
            <button onClick={() => showCommentsList(showComments)}>See all comments</button>
        </article>
    )
}

export default ArticleCard;