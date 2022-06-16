import { useState } from 'react';


const VoteButton = ({article, setVotes}) => {
    const [userVotes, setUserVotes] = useState(0);

    const patchArticleVotes = () => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article.article_id}`, { method: 'PATCH', body: JSON.stringify({ inc_votes: 1}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }})
        .then(data => console.log(data))
    }

    const increaseVotes = () => {
        setUserVotes(current => current + 1);
        setVotes(current => current + 1); /// add uservotes to current number of votes when rendering card! Don't need this!
        patchArticleVotes();
    };

    const decreaseVotes = () => {
        setUserVotes(current => current - 1);
        setVotes(current => current - 1);
    }
    console.log(userVotes);

        return (
            <>
                <button onClick={increaseVotes}>Click to add a Vote</button>
                <button onClick={decreaseVotes}>Click to remove a vote</button>
            </>
        )
}

export default VoteButton;