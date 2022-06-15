import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SummaryCard from './SummaryCard.jsx';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const { topic } = useParams();
    
    useEffect(() => {
   
        let path = 'https://neilb-nc-news-server.herokuapp.com/api/articles';

        if (topic) {
            path += `?topic=${topic}`;
        }
    
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
                    <li key={summary.article_id} className="summarycard">
                        <SummaryCard summary={summary} />
                    </li>
                )
            })}
        </ul>
    )
}

export default SummaryList;