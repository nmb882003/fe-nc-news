import { useState } from 'react';
import { postComment } from '../utils/api.js';

const CommentForm = ({ setShowButtons, setShowForm, article_id, setNumberOfComments }) => {
    const [newComment, setNewComment] = useState('');
    const [disableOnSubmit, setDisableOnSubmit] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setDisableOnSubmit(true);

        postComment(article_id, newComment)
            .then(res => res.json())
            .then(() => {
                alert('Your comment has been sucessfully posted!');
                setNewComment('');
                setDisableOnSubmit(false);
                setNumberOfComments((current) => current + 1);
            })
    }

    return (
        <form className="commentform" onSubmit={handleSubmit}>
            <label htmlFor="comment-text">What's on your mind?</label>
            <textarea placeholder="Type your comment here" value={newComment} onChange={(event) => setNewComment(event.target.value)} rows={4} required={true} id="comment-text" disabled={disableOnSubmit} autoFocus></textarea>
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