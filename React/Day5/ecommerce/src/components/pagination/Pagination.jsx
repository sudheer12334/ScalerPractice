import './pagination.css';

const Pagination = ({totalPages,currentPage,paginate})=>{
    return(
        <div className="page-container">
        {
            Array.from({length: totalPages}).map((_,index)=>{
                return  <button key={index+1} className="pagination-button" onClick={()=>{paginate(index+1)}}>{index+1}</button>
            })
        }

           
        </div>
    )
}
export default Pagination;