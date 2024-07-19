import React from 'react';
import ReactPaginate from "react-paginate";
import css from './Reviews.module.css'

const Paginate = ({pageCount, setPage}) => {
    const handlePageClick = (event) => {
        setPage(event.selected + 1)
        console.log(event)
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
    };


    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel=">"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel="<"
            // renderOnZeroPageCount={null}
            pageClassName={css.page}
            containerClassName={css.pagContainer}
            previousClassName={css.previous}
            nextClassName={css.next}
            activeClassName={css.active}
            activeLinkClassName={css.active}
            breakClassName={css.break}
        />
    );
};

export default Paginate;