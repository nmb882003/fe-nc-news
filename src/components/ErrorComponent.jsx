import { Link } from 'react-router-dom';

const ErrorComponent = ({ msg, code }) => {
    return (
        <div className="errorcomponent-container">
            <h2 className="errorcomponent-main">Oh no! Something went wrong :'(</h2>
            <h3 className="errorcomponent-details">Error status {code}: {msg}</h3>
            {code === 400 && <p className="errorcomponent-slogan">Looks like you're searching for a topic that doesn't exist! Please choose another one and try again. Might I suggest 'coding'?</p>}
            {code === 404 && <p className="errorcomponent-slogan">Unfortunately there is no article in our database with that article_id. Please try searching for a different article.</p>}
            <Link to="/">Return to Home</Link>
        </div>
    )
}

export default ErrorComponent;