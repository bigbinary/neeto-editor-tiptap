import React, {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

import { Down } from "@bigbinary/neeto-icons";
import classnames from "classnames";
import { useHotkeys } from "react-hotkeys-hook";
import { usePopper } from "react-popper";
import { hyphenize } from "utils/common";

import useOutsideClick from "../../../hooks/useOutsideClick";

const noop = () => {};

const Dropdown = (
  {
    label,
    isOpen,
    onVisible = noop,
    onClose = noop,
    ulProps,
    position,
    children,
    className,
    customTarget,
    closeOnEsc = true,
    closeOnSelect = true,
    closeOnOutsideClick = true,
    dropdownModifiers = [],
    ...otherProps
  },
  ref
) => {
  const wrapperRef = useRef();
  const Target = customTarget();
  const isControlled = !(isOpen === undefined || isOpen === null);

  const [visible, setVisibility] = useState(false);
  const [reference, setReference] = useState(null);
  const [popper, setPopper] = useState(null);

  const { styles, attributes } = usePopper(reference, popper, {
    placement: position || "bottom-end",
    modifiers: dropdownModifiers,
  });

  useImperativeHandle(ref, () => ({
    close: () => setVisibility(false),
    visible: visible,
  }));

  const onPopupClose = () => {
    if (!isControlled) setVisibility(false);
    onClose();
  };

  const handlePopperClick = () => {
    closeOnSelect && onPopupClose();
  };

  const handleButtonClick = () => {
    !isControlled && setVisibility(!visible);
  };

  useHotkeys("esc", closeOnEsc ? onPopupClose : noop);
  useOutsideClick(wrapperRef, closeOnOutsideClick ? onPopupClose : noop);

  useEffect(() => {
    isControlled && setVisibility(isOpen);
  }, [isOpen]);

  useEffect(() => {
    visible && onVisible();
  }, [visible]);

  return (
    <div
      ref={wrapperRef}
      className={classnames("ne-dropdown__wrapper", {
        [className]: className,
      })}
      {...otherProps}
    >
      {customTarget ? (
        <div ref={setReference} onClick={handleButtonClick}>
          {Target}
        </div>
      ) : (
        <div>
          {label}
          <Down />
        </div>
      )}
      {visible && (
        <ul
          className="ne-dropdown__popup"
          ref={setPopper}
          onClick={handlePopperClick}
          data-cy={`neeto-editor-${hyphenize(label)}-dropdown-container`}
          {...ulProps}
          style={{
            display: "block",
            ...styles.offset,
            ...styles.popper,
          }}
          {...attributes.popper}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

Dropdown.displayName = "Dropdown";

export default forwardRef(Dropdown);
