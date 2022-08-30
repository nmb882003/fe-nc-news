import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import SummaryCard from './SummaryCard.jsx';
import SortBar from './SortBar.jsx';
import PagBar from './PagBar.jsx';
import ErrorComponent from './ErrorComponent.jsx';
import { getSummaries } from '../utils/api.js';

const SummaryList = () => {
    const [summaryList, setSummaryList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [sortDirection, setSortDirection] = useState("desc");
    const [selectedButton, setSelectedButton] = useState("created_at");
    const [resultsEnd, setResultsEnd] = useState(10);
    const [totalResults, setTotalResults] = useState(0);
    const [error, setError] = useState(null);

    const { topic } = useParams();

    useEffect(() => {
        setIsLoading(true);

        let path = 'https://neilb-nc-news-server.herokuapp.com/api/articles';

        if (topic) {
            path += `?topic=${topic}&sort_by=${selectedButton}&order=${sortDirection}`;
        } else {
            path += `?sort_by=${selectedButton}&order=${sortDirection}`;
        }

        getSummaries(path)
            .then(res => {
                return (res.ok) ? res.json() : Promise.reject({ status: res.status, msg: res.statusText })
            })

            .then(({ articles }) => {
                setSummaryList(articles);
                setIsLoading(false);
                if (articles.length) setTotalResults(articles[0].total_count);
            })

            .catch(err => setError(err));

    }, [topic, sortDirection, selectedButton])

    // add second useEffect, trigger with a state variable loadMore, use if loadMore === true then add onto existing array in state;

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
                        <PagBar resultsEnd={resultsEnd} setResultsEnd={setResultsEnd} totalResults={totalResults}/>
                    </div>
                )
            }
        </>
    )
}

export default SummaryList;