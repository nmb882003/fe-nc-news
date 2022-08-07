const SortBar = () => {
    return (
        <div className="sortbar-outer">
            <div className="sortbar-inner">
                <p>Sort articles by</p>
                <button type="button" onClick={() => { }}>Date</button>
                <button type="button" onClick={() => { }}>Comment count</button>
                <button type="button" onClick={() => { }}>Votes</button>
            </div>
        </div>
    )
}

export default SortBar;