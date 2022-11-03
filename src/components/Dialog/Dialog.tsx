import React from "react";

import "./dialog.css";

const Dialog = ({
  open,
  onClose,
  children,
}: {
  open: boolean;
  onClose?: () => void;
  children?: JSX.Element | JSX.Element[];
}) => {
  const handleBackdropClick = () => {
    onClose?.();
  };
  return (
    <>
      {open && (
        <>
          <div className="backdrop" onClick={handleBackdropClick}></div>
          <div id="dialog" className="dialog-box">
            {children}
          </div>
        </>
      )}
    </>
  );
};

export default Dialog;
