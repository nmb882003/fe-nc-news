import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const Nav = () => {
    const [ topics, setTopics ] = useState([]);
    
    useEffect(() => {
        fetch('https://neilb-nc-news-server.herokuapp.com/api/topics')

        .then(res => res.json())
        .then(({topics}) => {
            setTopics(topics);
        })
    }, [])

    return (
        <nav className="navbar">
            <ul className="links-list">
                <li><Link className="link" to="/">Home</Link></li>
                <li><Link className="link" to="/articles">View all articles</Link></li>
                {topics.map(item => {
                    return (
                        <li key={item.slug}>
                            <Link className="link" to={"/topics/" + item.slug + "/articles"}>{item.slug}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
    )
}

export default Nav;