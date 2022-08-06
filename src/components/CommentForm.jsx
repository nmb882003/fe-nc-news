const CommentForm = ({ setShowButtons, setShowForm }) => {
    return (
        <form className="commentform">
            <label htmlFor="textbox">What's on your mind?</label>
            <textarea placeholder="Type your comment here" rows={4} required={true} id="textbox"></textarea>
            <div className="commentform-buttons">
                <button type="submit" onClick={() => {

                }}>Post comment</button>
                <button type="reset">Clear</button>
                <button type="button" onClick={() => {
                    setShowButtons(true);
                    setShowForm(false);
                }}>Cancel</button>
            </div>
        </form>
    )
}

export default CommentForm;