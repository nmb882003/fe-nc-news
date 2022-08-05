import { updateArticleVotes } from '../utils/api.js';

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
            <div className="votebuttons-container">
                <button onClick={incrementVotes}>👍</button>
                <button onClick={decrementVotes}>👎</button>
            </div>
    )
}

export default VoteButton;