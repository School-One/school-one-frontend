import React from 'react';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    height: '80%',
  },
};

export default function DetailModal({ isOpen, onClose, teacher }) {
  return (
    <Modal style={customStyles} isOpen={isOpen} onRequestClose={onClose}>
      <h1>Hola</h1>
    </Modal>
  );
}
