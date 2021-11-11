/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";
import PropTypes from "prop-types";

export function QuoteLarge(props) {
  const { size, color, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M13.75 13.3125H18.125C18.608 13.3125 19 13.7045 19 14.1875V17.6875C19 18.1705 18.608 18.5625 18.125 18.5625H14.625C14.142 18.5625 13.75 18.1705 13.75 17.6875V13.3125ZM13.75 13.3125C13.75 8.0625 14.625 7.1875 17.25 5.4375M5 13.3125H9.375C9.858 13.3125 10.25 13.7045 10.25 14.1875V17.6875C10.25 18.1705 9.858 18.5625 9.375 18.5625H5.875C5.392 18.5625 5 18.1705 5 17.6875V13.3125ZM5 13.3125C5 8.0625 5.875 7.1875 8.5 5.4375"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

QuoteLarge.defaultProps = {
  color: "currentColor",
  size: 24,
};

QuoteLarge.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};