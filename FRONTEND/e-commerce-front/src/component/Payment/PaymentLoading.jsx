import React from "react";
import { Spinner, Modal } from "react-bootstrap";

const LoadingComponent = ({ loading }) => {
  return (
    <Modal show={loading} backdrop="static" keyboard={false} centered>
      <Modal.Body className="text-center">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <h4 className="mt-3">Processing your payment...</h4>
      </Modal.Body>
    </Modal>
  );
};

export default LoadingComponent;
