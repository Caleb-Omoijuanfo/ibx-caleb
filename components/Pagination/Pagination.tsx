import ReactPaginate from "react-paginate";

interface IPaginator {
  pageCount: number;
  pageOffset: number;
  handlePageChange: any;
}

const Paginator = ({ pageCount, pageOffset, handlePageChange }: IPaginator) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      pageClassName="page-item"
      pageLinkClassName="page-link"
      previousClassName="page-item"
      previousLinkClassName="page-link"
      nextClassName="page-item"
      nextLinkClassName="page-link"
      breakLabel="..."
      breakClassName="page-item"
      breakLinkClassName="page-link"
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageChange}
      containerClassName="pagination"
      activeClassName="active"
      forcePage={pageOffset}
    />
  );
};

export default Paginator;
