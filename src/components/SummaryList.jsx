import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SummaryCard from './SummaryCard.jsx';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const navigate = useNavigate();

    const { topic } = useParams();

    const goFullArticle = (summary) => {
        navigate(`/articles/${summary.article_id}`);
    }

    useEffect(() => {

        let path = 'https://neilb-nc-news-server.herokuapp.com/api/articles';

        if (topic) {
            path += `?topic=${topic}`;
        }

        setIsLoading(true);
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
                    <li key={summary.article_id} className="summarycard" onClick={() => goFullArticle(summary)}>
                        <SummaryCard summary={summary} />
                    </li>
                )
            })}
        </ul>
    )
}

export default SummaryList;