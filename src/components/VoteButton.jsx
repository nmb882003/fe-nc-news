const VoteButton = ({article, setUserVotes}) => {
   

    const updateArticleVotes = () => {
        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article.article_id}`, { method: 'PATCH', body: JSON.stringify({ inc_votes: 1}),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }})
        .then(data => console.log(data))
    }

    const increaseVotes = () => {
        setUserVotes(current => current + 1);
        updateArticleVotes();
    };

    const decreaseVotes = () => {
        setUserVotes(current => current - 1);
    }

        return (
            <>
                <button onClick={increaseVotes}>Click to add a Vote</button>
                <button onClick={decreaseVotes}>Click to remove a vote</button>
            </>
        )
}

export default VoteButton;