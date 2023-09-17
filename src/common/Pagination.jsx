import React from "react";
import PropTypes from "prop-types";

/**
 * Pagination component for navigating through pages.
 *
 * @component
 * @param {object} props - The props for this component.
 * @param {number} props.page - The current page.
 * @param {number} props.count - The total number of pages.
 * @param {function} props.nextPage - Function to go to the next page.
 * @param {function} props.prevPage - Function to go to the previous page.
 * @returns {JSX.Element} - The rendered component.
 */
const Pagination = (props) => {
  
  const { 
    page,
    count,
    nextPage,
    prevPage
   } = props;

  return (
    <div className="flex justify-center mt-4 mb-6">
      <nav className="flex items-center space-x-2">
        <button
          disabled={page === 0}
          onClick={prevPage}
          className="text-gray-500 hover:text-blue-600 p-3 inline-flex items-center gap-2 rounded-md bg-gray-200"
        >
          Previous
        </button>
        <div className="text-gray-500 p-2 inline-flex items-center font-medium rounded-full">
          {page + 1}
          <span className="mx-1">/</span>
          {count}
        </div>
        <button
          onClick={nextPage}
          disabled={page === count - 1}
          className="text-gray-500 hover:text-blue-600 p-3 inline-flex items-center gap-2 rounded-md bg-gray-200"
        >
          Next
        </button>
      </nav>
    </div>
  );
};

Pagination.propTypes = {
  page: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Pagination;
