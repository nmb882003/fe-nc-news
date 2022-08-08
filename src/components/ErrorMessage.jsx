import { Link } from 'react-router-dom';

const ErrorMessage = ({ msg, code }) => {
    return (
        <div>
            <h1>Oh no! Something went wrong</h1>
            <h2>Error status {code}: {msg}</h2>
            <Link to="/">Back to Home</Link>
        </div>
    )
}

export default ErrorMessage;