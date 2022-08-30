const PagBar = ({resultsEnd, setResultEnd, totalResults}) => {
    const doStuff = () => {
        console.log("click!")    
    }

    return (
        <div className="pagbar">
            <p className="pagbar-text">Showing results 1 - {resultsEnd} of {totalResults}</p>
            <button className="pagbar-button" onClick={() => doStuff()}>Load more</button>
        </div>
    )
}

export default PagBar;