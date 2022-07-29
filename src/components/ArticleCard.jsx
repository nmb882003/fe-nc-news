import { useState } from 'react';
import VoteButton from './VoteButton.jsx';

const ArticleCard = ({ article, showComments, setShowComments }) => {
    const [userVotes, setUserVotes] = useState(0);
    const [buttonLabel, setButtonLabel] = useState("Show comments");

    const showCommentsList = (showComments) => {
        if (showComments) {
            setShowComments(false);
        } else {
            setShowComments(true);
        }
    };

    const updateButtonLabel = () => {
        (buttonLabel === "Show comments") ? setButtonLabel("Hide comments") : setButtonLabel("Show comments");
    }

    return (
        <article className="articlecard">
            <h2 className="articlecard-heading">{article.title}</h2>
            <p>{article.body}</p>
            <p>Posted by {article.author} on {article.created_at}</p>
            <p>In topic '{article.topic}'</p>
            <p>{article.votes + userVotes} votes {article.comment_count} comments</p>
            <div className="articlecard-vote-buttons-container">
                <VoteButton article={article} setUserVotes={setUserVotes} />
            </div>
            <div className="articlecard-comment-buttons-container">
                <button onClick={() => {
                    showCommentsList(showComments);
                    updateButtonLabel();
                }}>{buttonLabel}</button>
                <button onClick={() => { }}>Add a comment</button>
            </div>
        </article>
    )
}

export default ArticleCard;