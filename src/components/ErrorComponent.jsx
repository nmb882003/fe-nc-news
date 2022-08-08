import { Link } from 'react-router-dom';

const ErrorComponent = ({ msg, code }) => {
    return (
        <div>
            <h2 className="errorcomponent-main">Oh no! Something went wrong :'(</h2>
            <h3 className="errorcomponent-details">Error status {code}: {msg}</h3>
            {code === 400 && <p>Wrong topic</p>}
            {code === 404 && <p>Wrong article number</p>}
            <Link to="/">Return to Home</Link>
        </div>
    )
}

export default ErrorComponent;