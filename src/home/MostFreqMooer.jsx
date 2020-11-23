import React, { useState, useEffect } from "react";
import { Row, Col, Toast } from "react-bootstrap";

export const MostFreqMooer = () => {

    const [show, setShow] = useState(true);
    const [users, setUsers] = useState("");
    const toggleShow = () => setShow(!show);

    const getPopularUsers = async () => {
        const response = await fetch('/api/popularUser');
        const body = await response.json();

        console.log(body)

        let usersString = "";
        for(let i = 0; i < body.length; i++) {
          const user = body[i];
          const comma = i === body.length - 1 ? "" : ", and";
          usersString += ` ${user.handle}${comma}`;
        }

        setUsers(usersString);
    };

    useEffect(() => {
        getPopularUsers();
    }, [])

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