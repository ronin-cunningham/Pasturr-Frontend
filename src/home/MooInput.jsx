import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

export const MooInput = ({ updateList }) => {

    const [handle, setHandle] = useState("");
    const [message, setMessage] = useState("");

    // Example POST method implementation:
    const postMoo = async (data) => {
        // Default options are marked with *
        console.log(data);
        const response = await fetch('/api/moo', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        return response.json(); // parses JSON response into native JavaScript objects
    };
  
    const makeMoo = (inputObject) => {
        postMoo(inputObject)
        .catch((e) => {
            console.log("rip")
        })
        .then(data => {
          console.log(data); // JSON data parsed by `data.json()` call
          updateList();
        });
    };

    const handleSubmit = () => {
        const inputObject = { 
            content: message,
            handle: handle
         };
        
        makeMoo(inputObject);
    };


    return <Card align="left" style={{ width: '30rem', margin: "20px 20px 100px 20px" }}>
    <Card.Body>
    <Card.Title>Make a Moo</Card.Title>
    <Card.Text>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="handle" onChange={(e) => setHandle(e.target.value)}/>
            <Form.Text className="text-muted">
                Enter handle to post under
            </Form.Text>
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={3} placeholder="moo message" onChange={(e) => setMessage(e.target.value)} />
            <Form.Text className="text-muted">
                What's up on the Pasture?
            </Form.Text>
        </Form.Group>
        </Form>
    </Card.Text>
        <Container align="Center">
            <Row>
                <Col><Button onClick={handleSubmit} style={{ width:"80%" }} variant="outline-dark" size="sm">Moo!</Button></Col>
            </Row>
        </Container>
    </Card.Body>
</Card>
};