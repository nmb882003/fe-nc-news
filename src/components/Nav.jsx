import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

const Nav = () => {
    const [ topics, setTopics ] = useState([]);
    
    useEffect(() => {
        fetch('https://neilb-nc-news-server.herokuapp.com/api/topics')

        .then(res => res.json())
        .then(({topics}) => {
            setTopics(topics);
            console.log(topics);
        })
    }, [])

    return (
        <>
        <nav className="navbar">
            <ul className="links-list">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/articles">View all articles</Link></li>
                {topics.map(item => {
                    return (
                        <li>
                            <Link to={"/topics/" + item.slug + "/articles"}>{item.slug}</Link>
                        </li>
                    )
                })}
            </ul>
        </nav>
        </>
    )
}

export default Nav;