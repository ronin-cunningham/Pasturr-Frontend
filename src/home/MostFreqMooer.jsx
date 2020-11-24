import React, { useState, useEffect } from "react";
import { Row, Col, Toast } from "react-bootstrap";

export const MostFreqMooer = ({ getPopularUsers, users }) => {

    const [show, setShow] = useState(true);

    const toggleShow = () => setShow(!show);

    useEffect(() => {
        getPopularUsers();
    }, [getPopularUsers])

  return (
    <Row>
      <Col>
        <Toast onClose={toggleShow}>
          <Toast.Header onClick={toggleShow}>
            <img
              src="holder.js/20x20?text=%20"
              className="rounded mr-2"
              alt=""
            />
            <strong className="mr-auto">Mooers of the Day</strong>
            <small>just now</small>
          </Toast.Header>
            <Toast.Body>{show ? `Congratulations to ${users}! You are the most frequent Mooers!` : ""}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
};