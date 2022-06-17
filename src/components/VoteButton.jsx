const VoteButton = ({article, setUserVotes}) => {

    const updateArticleVotes = (count) => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article.article_id}`, { method: 'PATCH', body: JSON.stringify({ inc_votes: count}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }})
    }

    const increaseVotes = () => {
        setUserVotes(current => current + 1);
        updateArticleVotes(1)
            .then(data => console.log(data));
    };

    const decreaseVotes = () => {
        setUserVotes(current => current - 1);
        updateArticleVotes(-1)
            .then(data => console.log(data));
    }

        return (
            <>
                <button onClick={increaseVotes}>Click to add a Vote</button>
                <button onClick={decreaseVotes}>Click to remove a vote</button>
            </>
        )
}

export default VoteButton;