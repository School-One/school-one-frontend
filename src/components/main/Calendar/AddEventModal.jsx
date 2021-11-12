import React, { useState } from 'react';
import Modal from 'react-modal';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';

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

export default function AddEventModal({ isOpen, onClose, onEventAdded }) {
  const [title, setTitle] = useState('');
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const [errorTitle, setErrorTitle] = useState('');
  const [errorStart, setErrorStart] = useState('');
  const [errorEnd, setErrorEnd] = useState('');

  const validate = () => {

    if (!title) {
      setTitle('Debe agregar un titulo al evento!');
    }

    if (errorTitle) {
      setErrorTitle(errorTitle);
      return false;
    }

    if (!start) {
      setErrorStart('Debe agregar una fecha de inicio!');
    }

    if (errorStart) {
      setErrorStart(errorStart);
      return false;
    }

    if (!end) {
      setErrorEnd('Debe agregar una fecha de final!');
    }

    if (errorEnd) {
      setErrorEnd(errorEnd);
      return false;
    }

    return true;
  };

  const onSubmit = (e) => {
    e.preventDefault();

    const isValid = validate();

    if (isValid) {
      onEventAdded({
        title,
        start,
        end,
      });
      onClose();
    }
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} style={customStyles}>
      <form onSubmit={onSubmit}>
        <div className="mb-5">
          <h2 className="text-center">Añadir evento</h2>
        </div>

        <div className="mb-3">
          <label className="form-label">Titulo del evento</label>
          <input
            type="text"
            className="form-control"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          {errorTitle ? (
            <div
              className="invalidated-input-title"
              style={{ color: 'red', fontSize: '12px' }}
            >
              {errorTitle}
            </div>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label">Start Date</label>
          <Datetime value={start} onChange={(date) => setStart(date)} />
          {errorStart ? (
            <div
              className="invalidated-input-Start"
              style={{ color: 'red', fontSize: '12px' }}
            >
              {errorStart}
            </div>
          ) : null}
        </div>

        <div className="mb-3">
          <label className="form-label">End Date</label>
          <Datetime value={end} onChange={(dateEnd) => setEnd(dateEnd)} />
          {errorEnd ? (
            <div
              className="invalidated-input-end"
              style={{ color: 'red', fontSize: '12px' }}
            >
              {errorEnd}
            </div>
          ) : null}
        </div>

        <button className="btn btn-outline-primary">Add event</button>
      </form>
    </Modal>
  );
}
