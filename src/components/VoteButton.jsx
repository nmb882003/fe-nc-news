import updateArticleVotes from '../utils/api.js';

const VoteButton = ({article, setUserVotes}) => {

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
                <button onClick={incrementVotes}>Click to add a Vote</button>
                <button onClick={decrementVotes}>Click to remove a vote</button>
            </>
        )
}

export default VoteButton;