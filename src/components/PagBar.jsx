const PagBar = ({resultsEnd, setResultEnd, totalCount}) => {
    const doStuff = () => {
        console.log("click!")    
    }

    return (
        <div className="pagbar">
            <p className="pagbar-text">Showing results 1 - {resultsEnd} of {totalCount}</p>
            <button className="pagbar-button" onClick={() => doStuff()}>Load more</button>
        </div>
    )
}

export default PagBar;