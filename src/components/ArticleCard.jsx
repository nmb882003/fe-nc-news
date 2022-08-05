import { useState } from 'react';
import { formatDateAndTime } from '../utils/helper.js';
import VoteButton from './VoteButton.jsx';

const ArticleCard = ({ article, showComments, setShowComments, setShowForm }) => {
    const [userVotes, setUserVotes] = useState(0);
    const [buttonLabel, setButtonLabel] = useState("Show comments");

    const updateButtonLabel = () => {
        (buttonLabel === "Show comments") ? setButtonLabel("Hide comments") : setButtonLabel("Show comments");
    }

    return (
        <article className="articlecard">
            <h2 className="articlecard-heading">{article.title}</h2>
            <div className="articlecard-details">
                <p>Posted {formatDateAndTime(article.created_at)} by user {article.author} in topic '{article.topic}'</p>
            </div>
            <div className="articlecard-body">
                <p>{article.body}</p>
            </div>
            <div className="articlecard-vote-buttons">
                <label>Did you enjoy this article?</label>
                <VoteButton article={article} setUserVotes={setUserVotes} />
            </div>
            <div className="articlecard-social-info">
                <p>{article.votes + userVotes} votes {article.comment_count} comments</p>
            </div>
            <div className="articlecard-comment-buttons">
                <button onClick={() => {
                    setShowComments(!showComments);
                    updateButtonLabel();
                }}>{buttonLabel}</button>
                <button onClick={() => {
                    setShowComments(false);
                    setButtonLabel("Show comments");
                    setShowForm(true);
                }}>Add a comment</button>
            </div>
        </article>
    )
}

export default ArticleCard;