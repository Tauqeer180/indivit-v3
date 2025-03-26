import React from "react";
import Modal from "react-modal";

// Set the app element for accessibility
// Modal.setAppElement("#root");
const customStyles = {
  borderColor: "white",
};

const ModalContainer = ({ isOpen, closeModal, children }) => {
  return (
    <div style={{ zIndex: 999999 }}>
      <Modal
        className="shadow-none h-100 border-0"
        style={customStyles}
        isOpen={isOpen}
        onRequestClose={closeModal}
        shouldCloseOnOverlayClick={true}
        ariaHideApp={true}
      >
        {children}
      </Modal>
    </div>
  );
};

export default ModalContainer;
