import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
function PaginationList({
    currentPage,
    pagesCount,
    handleClick,
}) {
    return (
        <Pagination>

            <PaginationItem disabled={currentPage <= 0}>

                <PaginationLink
                    onClick={(e) => handleClick(e, currentPage - 1)}
                    previous
                    href="#"
                />

            </PaginationItem>

            {[...Array(pagesCount)].map((page, i) =>
                <PaginationItem active={i === currentPage} key={i}>
                    <PaginationLink onClick={(e) => handleClick(e, i)} href="#">
                        {i + 1}
                    </PaginationLink>
                </PaginationItem>
            )}

            <PaginationItem disabled={currentPage >= pagesCount - 1}>

                <PaginationLink
                    onClick={(e) => handleClick(e, currentPage + 1)}
                    next
                    href="#"
                />

            </PaginationItem>

        </Pagination>
    )
}

export default PaginationList;