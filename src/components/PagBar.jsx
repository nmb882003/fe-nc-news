import { useState } from 'react';
import { getSummaries } from "../utils/api";

const PagBar = ({ resultsEnd, setResultsEnd, totalResults, currentPage, setCurrentPage, setSummaryList, selectedButton, sortDirection, topic }) => {
    const [disableButton, setDisableButton] = useState(false);

    const showMoreResults = () => {
        let path = `https://neilb-nc-news-server.herokuapp.com/api/articles?sort_by=${selectedButton}&order=${sortDirection}&p=${currentPage + 1}`;

        if (topic) path += `&topic=${topic}`;
        
        setDisableButton(true);

        getSummaries(path)
            .then(res => res.json())

            .then(({ articles }) => {
                setSummaryList(currentList => [...currentList, ...articles]);
                setCurrentPage(currentPage + 1);
                setResultsEnd(resultsEnd + articles.length);
                setDisableButton(false);
            })

    }

    return (
        <div className="pagbar">
            <p className="pagbar-text">Showing results 1 - {resultsEnd} of {totalResults}</p>
            <button onClick={() => showMoreResults()} disabled={resultsEnd === totalResults ? true : disableButton ? true : false}>Show more</button>
        </div>
    )
}

export default PagBar;