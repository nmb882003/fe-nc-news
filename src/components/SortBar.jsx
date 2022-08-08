const SortBar = ({ sortDirection, setSortDirection, selectedButton, setSelectedButton }) => {
    const updateSortDirection = (sortDirection) => {
        sortDirection === 'asc' ? setSortDirection('desc') : setSortDirection('asc');
    }

    const updateButton = (name, selectedButton, sortDirection) => {
        if (selectedButton === name) {
            updateSortDirection(sortDirection)
        } else {
            setSelectedButton(name);
        }
    }

    return (
        <div className="sortbar-outer">
            <div className="sortbar-inner">
                <p className="sortbar-description">Sort articles by</p>
                <button type="button" className={selectedButton === 'created_at' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => updateButton('created_at', selectedButton, sortDirection)}>Date {selectedButton === 'created_at' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
                <button type="button" className={selectedButton === 'comment_count' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => updateButton('comment_count', selectedButton, sortDirection)}>Comment count {selectedButton === 'comment_count' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
                <button type="button" className={selectedButton === 'votes' ? "sortbar-inner-btn-selected" : "sortbar-inner-btn"} onClick={() => updateButton('votes', selectedButton, sortDirection)}>Votes {selectedButton === 'votes' ? sortDirection === 'asc' ? '🔺' : '🔻' : ''}</button>
            </div>
        </div>
    )
}

export default SortBar;