import { useState } from 'react';

const CommentForm = ({ setShowButtons, setShowForm, article_id }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        fetch(`https://neilb-nc-news-server.herokuapp.com/api/articles/${article_id}/comments`, { method: 'POST', body: JSON.stringify({ username: "grumpy19", body: newComment }),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }});
    }

    return (
        <form className="commentform" onSubmit={handleSubmit}>
            <label htmlFor="comment-text">What's on your mind?</label>
            <textarea placeholder="Type your comment here" value={newComment} onChange={(event) => setNewComment(event.target.value)} rows={4} required={true} id="comment-text"></textarea>
            <div className="commentform-buttons">
                <button type="submit">Post comment</button>
                <button type="reset" onClick={() => setNewComment('')}>Clear</button>
                <button type="button" onClick={() => {
                    setShowButtons(true);
                    setShowForm(false);
                }}>Cancel</button>
            </div>
        </form>
    )
}

export default CommentForm;