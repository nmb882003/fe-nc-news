import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import SummaryCard from './SummaryCard.jsx';
import SortBar from './SortBar.jsx';
import PagBar from './PagBar.jsx';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState("desc");
    const [selectedButton, setSelectedButton] = useState("created_at");

    const navigate = useNavigate();

    const { topic } = useParams();

    const goFullArticle = (summary) => {
        navigate(`/articles/${summary.article_id}`);
    }

    useEffect(() => {
        let path = 'https://neilb-nc-news-server.herokuapp.com/api/articles';

        if (topic) {
            path += `?topic=${topic}&sort_by=${selectedButton}&order=${sortDirection}`;
        } else {
            path += `?sort_by=${selectedButton}&order=${sortDirection}`;
        }

        setIsLoading(true);
        fetch(path)

            .then(res => res.json())

            .then(({ articles }) => {
                setSummaryList(articles);
                setIsLoading(false);
            })
    }, [topic, sortDirection, selectedButton])

    return (
        <>
            {isLoading ? <p>Please wait while article data loads... </p> :
                <div className="summarylist-container">
                    <SortBar sortDirection={sortDirection} setSortDirection={setSortDirection} selectedButton={selectedButton} setSelectedButton={setSelectedButton}/>
                    <ul className="summarylist">
                        {summaryList.map(summary => {
                            return (
                                <li key={summary.article_id} className="summarycard" onClick={() => goFullArticle(summary)}>
                                    <SummaryCard summary={summary} />
                                </li>
                            )
                        })}
                    </ul>
                    <PagBar />
                </div>
            }
        </>
    )
}

export default SummaryList;