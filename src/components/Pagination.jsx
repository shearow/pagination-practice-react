import "../styles/pagination.css"

export const Pagination = ({totalPages, actualPage, before, after, toPage}) => {

    return (
        <div className="pag-list-container">
            <div className="pag-list">
                <ul>
                    {Array(totalPages).fill(null).map( (item, index) => {
                        return (
                            <li key={index} 
                                className={index + 1 === actualPage 
                                    ? "pagination-number active" 
                                    : "pagination-number"}
                                onClick={() => toPage(index + 1)}
                            >
                                <p>{index + 1}</p>
                            </li>
                        )
                    })}
                </ul>
                <div className="container-pagination-hands">
                    <span onClick={before}>👈</span>
                    <span onClick={after}>👉</span>
                </div>
            </div>
        </div>
    )
}