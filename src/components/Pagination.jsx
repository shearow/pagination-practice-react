import "../styles/pagination.css"

export const Pagination = ({totalPages, actualPage, before, after, toPage}) => {

    const paginationNumbersRender = () => (
            Array(totalPages).fill(null).map( (item, index) => {
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
            })
    );

    return (
        <div className="pag-list-container">
            <div className="pag-list">
                <ul>
                    {paginationNumbersRender()}
                </ul>
                <div className="container-pagination-hands">
                    <span onClick={before}>👈</span>
                    <span onClick={after}>👉</span>
                </div>
            </div>
        </div>
    )
}