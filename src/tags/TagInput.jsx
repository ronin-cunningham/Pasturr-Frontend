import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

export const TagInput = ({ updateList }) => {

    const [handle, setHandle] = useState("");
    const [name, setName] = useState("");

    // Example POST method implementation:
    const postMoo = async (data) => {
        // Default options are marked with *
        console.log(data);
        const response = await fetch('/api/tag', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        return response.json(); // parses JSON response into native JavaScript objects
    };
  
    const makeTag = (inputObject) => {
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
            tagName: name,
            handle: handle
         };
        
        makeTag(inputObject);
    };


    return <Card align="left" style={{ width: '20rem', margin: "100px 20px 20px 20px" }}>
    <Card.Body>
    <Card.Title>Create a Custom Tag</Card.Title>
    <Card.Text>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Control type="email" placeholder="handle" onChange={(e) => setHandle(e.target.value)}/>
            <Form.Text className="text-muted">
                Enter handle to create tag under
            </Form.Text>
        </Form.Group>


        <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Control as="textarea" rows={1} placeholder="tag name" onChange={(e) => setName(e.target.value)} />
            <Form.Text className="text-muted">
                Enter a tag to promote your Pasture!
            </Form.Text>
        </Form.Group>
        </Form>
    </Card.Text>
        <Container align="Center">
            <Row>
                <Col><Button onClick={handleSubmit} style={{ width:"80%" }} variant="outline-dark" size="sm">Create Tag!</Button></Col>
            </Row>
        </Container>
    </Card.Body>
</Card>
};