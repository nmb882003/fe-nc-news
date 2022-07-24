import { useState } from 'react';
import VoteButton from './VoteButton.jsx';

const ArticleCard = ({ article, showComments, setShowComments }) => {
    const [userVotes, setUserVotes] = useState(0);
    const [buttonLabel, setButtonLabel] = useState("Show all comments");

    const showCommentsList = (showComments) => {
        if (showComments) {
            setShowComments(false);
        } else {
            setShowComments(true);
        }
    };

    const updateButtonLabel = () => {
        (buttonLabel === "Show all comments") ? setButtonLabel("Hide all comments") : setButtonLabel("Show all comments");
    }

    return (
        <article className="articlecard">
            <h2 className="articlecard-heading">{article.title}</h2>
            <p>{article.body}</p>
            <p>Found in topic: {article.topic}</p>
            <p>{article.comment_count} comments</p>
            <p>{article.votes + userVotes} votes</p>
            <VoteButton article={article} setUserVotes={setUserVotes} />
            <button onClick={() => {
                showCommentsList(showComments)
                updateButtonLabel()
            }}>{buttonLabel} &#40;{article.comment_count}&#41;</button>
        </article>
    )
}

export default ArticleCard;