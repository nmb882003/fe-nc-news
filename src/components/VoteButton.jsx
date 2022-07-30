import updateArticleVotes from '../utils/api.js';

const VoteButton = ({ article, setUserVotes }) => {

    const incrementVotes = () => {
        setUserVotes(current => current + 1);
        updateArticleVotes(1, article)
            .then(res => {
                if (!res.ok) setUserVotes(current => current - 1);
            })
    };

    const decrementVotes = () => {
        setUserVotes(current => current - 1);
        updateArticleVotes(-1, article)
            .then(res => {
                if (!res.ok) setUserVotes(current => current + 1);
            })
    }

    return (
        <>
            <button onClick={incrementVotes}>👍 Like</button>
            <button onClick={decrementVotes}>👎 Dislike</button>
        </>
    )
}

export default VoteButton;