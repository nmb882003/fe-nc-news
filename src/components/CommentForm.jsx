const CommentForm = () => {
    return (
        <form className="commentform">
            <label htmlFor="textbox">What's on your mind?</label>
            <textarea placeholder="Your comment goes here" rows={5} resize="none" required={true} id="textbox"></textarea>
            <div className="commentform-buttons">
                <button>Post comment</button>
                <button>Cancel</button>
            </div>
        </form>
    )
}

export default CommentForm;