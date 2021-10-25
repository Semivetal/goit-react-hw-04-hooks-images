import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./Modal.css";

function Modal({ modalPicture, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  const handleKeyDown = (event) => {
    if (event.code === "Escape" || event.currentTarget === event.target) {
      onClose();
    }
  };

  const handleOverlayClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className="Overlay" onClick={handleOverlayClick}>
      <div className="Modal">
        <img
          className="Modal__Picture"
          src={modalPicture.largeImageURL}
          alt={modalPicture.tags}
        />
      </div>
    </div>
  );
}

Modal.propTypes = {
  modalPicture: PropTypes.object,
  onClose: PropTypes.func,
};

export default Modal;
