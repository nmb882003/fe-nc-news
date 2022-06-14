import { useState, useEffect } from 'react';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('https://neilb-nc-news-server.herokuapp.com/api/articles')

            .then(res => res.json())

            .then(({ articles }) => {
                setSummaryList(articles);
                setIsLoading(false);
                console.log(articles);
            })
    }, [])

    if (isLoading) {
        return (
            <p>Hello! This is the loading screen</p>
        )
    }

    return (
        <ul className="summarylist">
            {summaryList.map(summary => {
                return (
                    <li className="summary-card">
                        <p>#{summary.article_id}</p>
                        <p>Title: {summary.title}</p>
                        <p>Author: {summary.author}</p>
                        <p>Topic: {summary.topic}</p>
                        <p>Comments: {summary.comment_count}</p>
                        <p>Votes: {summary.votes}</p>
                    </li>
                )

            })}
        </ul>
    )
}

export default SummaryList;