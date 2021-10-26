import React from "react";
import classNames from "classnames";

const Description = ({ children, className }) => {
  return (
    <p className={classNames("font-serif", { [className]: className })}>
      {children}
    </p>
  );
};

export default Description;
