const SortBar = ({ sortDirection, setSortDirection, selectedButton, setSelectedButton }) => {
    const updateSortDirection = (sortDirection) => {
        sortDirection === 'asc' ? setSortDirection('desc') : setSortDirection('asc');
    }

    return (
        <div className="sortbar-outer">
            <div className="sortbar-inner">
                <p>Sort articles by</p>
                <button type="button" className={selectedButton === 'date' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => {
                    selectedButton === 'date' ? updateSortDirection(sortDirection) : setSelectedButton('date');
                }}>Date {selectedButton === 'date' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
                <button type="button" className={selectedButton === 'comment_count' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => {
                    selectedButton === 'comment_count' ? updateSortDirection(sortDirection) : setSelectedButton('comment_count');
                }}>Comment count {selectedButton === 'comment_count' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
                <button type="button" className={selectedButton === 'votes' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => {
                    selectedButton === 'votes' ? updateSortDirection(sortDirection) : setSelectedButton('votes');
                }}>Votes {selectedButton === 'votes' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
            </div>
        </div>
    )
}

export default SortBar;