import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { TagCheckboxes } from "./TagCheckboxes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Filters = ({ updateList }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [handle, setHandle] = useState("");
    const [message, setMessage] = useState("");

    useEffect(() => {
        console.log(startDate)
    }, [startDate])

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
    <Card.Title>Find Moos</Card.Title>
    <Card.Text>
        <Form>

        <Form.Group align="center" controlId="formBasicEmail" >
            <Form.Control style={{ width:"80%" }}type="email" placeholder="handle" onChange={(e) => setHandle(e.target.value)}/>
        </Form.Group>


        <Form.Group align="center">
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </Form.Group>

        <Form.Group >
            <TagCheckboxes />
        </Form.Group>

        </Form>
    </Card.Text>
        <Container align="Center">
            <Row>
                <Col><Button onClick={handleSubmit} style={{ width:"80%" }} variant="outline-dark" size="sm">Search!</Button></Col>
            </Row>
        </Container>
    </Card.Body>
</Card>
};