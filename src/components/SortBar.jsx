const SortBar = () => {
    return (
        <div className="sort-bar">
            <p>Sort articles by</p>
            <button type="button" onClick={() => { }}>Date</button>
            <button type="button" onClick={() => { }}>Comment count</button>
            <button type="button" onClick={() => { }}>Votes</button>
        </div>
    )
}

export default SortBar;