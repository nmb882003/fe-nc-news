import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSummaries } from '../utils/api.js';
import ErrorComponent from './ErrorComponent.jsx';
import SummaryCard from './SummaryCard.jsx';
import SortBar from './SortBar.jsx';
import PagBar from './PagBar.jsx';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState("desc");
    const [selectedButton, setSelectedButton] = useState("created_at");
    const [totalResults, setTotalResults] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [resultsEnd, setResultsEnd] = useState(10);
    const [error, setError] = useState(null);

    const { topic } = useParams();

    useEffect(() => {
        let path = `https://neilb-nc-news-server.herokuapp.com/api/articles?sort_by=${selectedButton}&order=${sortDirection}`;

        if (topic) path += `&topic=${topic}`;

        setIsLoading(true);
        setCurrentPage(1);
        setResultsEnd(10);

        getSummaries(path)
            .then(res => {
                return (res.ok) ? res.json() : Promise.reject({ status: res.status, msg: res.statusText });
            })

            .then(({ articles }) => {
                setSummaryList(articles);
                setIsLoading(false);
                setTotalResults(parseInt(articles[0].total_count));
            })

            .catch(err => setError(err));

    }, [topic, sortDirection, selectedButton])

    return (
        <>
            {error ? <ErrorComponent msg={error.msg} code={error.status} /> :
                isLoading ? (
                    <div>
                        <div></div>
                        <p className="summarylist-loading">Please wait while article data loads... </p>
                    </div>
                ) : (
                    <div className="summarylist-container">
                        <SortBar sortDirection={sortDirection} setSortDirection={setSortDirection} selectedButton={selectedButton} setSelectedButton={setSelectedButton} />
                        <ul className="summarylist">
                            {summaryList.map(summary => {
                                return (
                                    <li key={summary.article_id} className="summarycard">
                                        <SummaryCard summary={summary} />
                                    </li>
                                )
                            })}
                        </ul>
                        <PagBar resultsEnd={resultsEnd} setResultsEnd={setResultsEnd} totalResults={totalResults} currentPage={currentPage} setCurrentPage={setCurrentPage} setSummaryList={setSummaryList} selectedButton={selectedButton} sortDirection={sortDirection} topic={topic}/>
                    </div>
                )
            }
        </>
    )
}

export default SummaryList;