import { useState, useEffect } from 'react';
import SummaryCard from './SummaryCard.jsx';

const SummaryList = ({ topic }) => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    let path = 'https://neilb-nc-news-server.herokuapp.com/api/articles';

    if (topic) {
        path += `?topic=${topic}`;
    }

    useEffect(() => {
        fetch(path)

            .then(res => res.json())
            .then(({ articles }) => {
                setSummaryList(articles);
                setIsLoading(false);
            })
    }, [topic])

    if (isLoading) {
        return (
            <p>Please wait while article data loads...</p>
        )
    }

    return (
        <ul className="summarylist">
            {summaryList.map(summary => {
                return (
                    <li key={summary.article_id} className="summary-card">
                        <SummaryCard summary={summary}/>
                    </li>
                )

            })}
        </ul>
    )
}

export default SummaryList;