import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { TagCheckboxes } from "./TagCheckboxes";

export const MooInput = ({ updateList, getPopularUsers }) => {

    const [handle, setHandle] = useState("");
    const [message, setMessage] = useState("");
    const [checkedTags, setCheckedTags] = useState([""]);

    // Example POST method implementation:
    const postMoo = async (data) => {
        // Default options are marked with *
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
            console.log(e);
        })
        .then(data => {
          updateList();
          getPopularUsers();
        });
    };

    const handleSubmit = () => {
        const inputObject = { 
            content: message,
            handle: handle,
            tags: checkedTags
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

        <Form.Group >
            <TagCheckboxes checkedTags={checkedTags} setCheckedTags={setCheckedTags} />
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