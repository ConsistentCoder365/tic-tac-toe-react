function Cell({ cell, id, go, setGo, setCells, cells, winningMessage }) {
    function handleClick(e) {
        if (!winningMessage) {
            console.log(e.target)
            const taken  = e.target.firstChild?.classList.contains('circle') ||
                e.target.firstChild?.classList.contains('cross') ||
                e.target.classList.contains('circle') ||
                e.target.classList.contains('cross');
            if (!taken) {
                if (go === "circle") {
                    e.target.firstChild.classList.add("circle");
                    handleCellChange("circle")
                    setGo("cross")
                }
                else if (go === "cross") {
                    e.target.firstChild.classList.add("cross");
                    handleCellChange("cross")
                    setGo("circle")
                }
            }
        }
    }
    function handleCellChange(className) {
        const nextCells = cells.map((cell, index) => {
            if (index === id) {
                return className;
            }
            return cell;
        })
        setCells(nextCells)
    }
    return (
        <div className="square" id = {id} onClick = {handleClick}>
            <div className={cell}>
            </div>
        </div>
    )
}

export default Cell