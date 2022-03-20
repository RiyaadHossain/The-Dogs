import { Modal,Button } from "react-bootstrap";
import React, { useState } from "react";

const DogModal = ({ dog }) => {
  console.log(dog);
  const {name, image, bred_for, breed_group, temperament} = dog
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Button className="fw-bold" variant="info" onClick={handleShow}>
        See Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>{name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img className="w-75" src={image.url} alt="" />
          <div className="my-2">
            <h5><strong>Bred for:</strong> {bred_for}</h5>
            <h5><strong>Group:</strong> {breed_group}</h5>
            <p className="lead"><strong>Behaviour:</strong> {temperament}</p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default DogModal;
