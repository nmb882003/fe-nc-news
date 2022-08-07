import { useState } from 'react';

const CommentForm = ({ setShowButtons, setShowForm, article_id, setNumberOfComments }) => {
    const [newComment, setNewComment] = useState('');
    const [disableOnSubmit, setDisableOnSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableOnSubmit(true);

        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`, {
            method: 'POST', body: JSON.stringify({ username: "grumpy19", body: newComment }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            }
        })
            .then(res => res.json())
            .then(({postedComment}) => {
                alert('Your comment has been sucessfully posted!');
                setNewComment('');
                setDisableOnSubmit(false);
                setNumberOfComments((current) => current + 1);
            })
    }

    return (
        <form className="commentform" onSubmit={handleSubmit}>
            <label htmlFor="comment-text">What's on your mind?</label>
            <textarea placeholder="Type your comment here" value={newComment} onChange={(event) => setNewComment(event.target.value)} rows={4} required={true} id="comment-text" disabled={disableOnSubmit}></textarea>
            <div className="commentform-buttons">
                <button type="submit" disabled={disableOnSubmit}>Post comment</button>
                <button type="reset" disabled={disableOnSubmit} onClick={() => setNewComment('')}>Clear</button>
                <button type="button" onClick={() => {
                    setShowButtons(true);
                    setShowForm(false);
                }}>Cancel</button>
            </div>
        </form>
    )
}

export default CommentForm;