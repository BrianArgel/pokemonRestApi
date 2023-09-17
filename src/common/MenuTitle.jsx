import React from "react";
import { FaHome } from "react-icons/fa";
import PropTypes from "prop-types";

/**
 * MenuTitle component for displaying a title and subtitle.
 *
 * @component
 * @param {object} props - The props for this component.
 * @param {string} props.title - The main title.
 * @param {string} props.subTitle - The subtitle.
 * @returns {JSX.Element} - The rendered component.
 */
const MenuTitle = (props) => {

  const {
    title,
    subTitle
  } = props;

  return (
    <div className="mb-6">
      <h1 className="text-3xl font-bold">{title}</h1>
      <div className="mt-2 text-gray-600">
        <FaHome className="inline text-xl" />
        {subTitle}
      </div>
    </div>
  );
};

MenuTitle.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired,
};

export default MenuTitle;