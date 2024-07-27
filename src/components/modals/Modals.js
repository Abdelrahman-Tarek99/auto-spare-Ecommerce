import Modal from 'react-bootstrap/Modal';
import './Modals.css'

function Modals({ header, body, show, onHide }) {
  return (
    <>
      <Modal
        show={show}
        onHide={onHide}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{header}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{body}</Modal.Body>
      </Modal>
    </>
  );
}

export default Modals;
