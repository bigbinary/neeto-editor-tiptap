/** Icons generated by create-react-icons. Don't edit this file directly. **/
import React from "react";

import PropTypes from "prop-types";

const TextColor = props => {
  const { size, color, underlineColor, ...other } = props;
  return (
    <svg viewBox="0 0 24 24" fill="none" height={size} width={size} {...other}>
      <path
        d="M21 20H3"
        stroke={underlineColor || color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.3125 15L12.1562 4L7 15M8.03125 12.8H16.2812"
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

TextColor.defaultProps = {
  color: "currentColor",
  size: 24,
};

TextColor.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export { TextColor };
