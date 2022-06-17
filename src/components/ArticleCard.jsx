import { useState } from 'react';
import VoteButton from './VoteButton.jsx'; 

const ArticleCard = ({ article, votes}) => {
    const [userVotes, setUserVotes] = useState(0);

    return (
        <div className="articlecard">
            <h2 className="card-header">{article.title}</h2>
            <p>{article.body}</p>
            <p>Listed in topic: {article.topic}</p>
            <p>{article.comment_count} comments</p>
            <p>{article.votes + userVotes} votes</p>
            <VoteButton article={article} setUserVotes={setUserVotes}/>
            <button>See all comments</button>
        </div>
    )
}

export default ArticleCard;