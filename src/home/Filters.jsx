import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";
import { TagCheckboxes } from "./TagCheckboxes";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const Filters = ({ getFilteredMoos, getMoos }) => {
    const [startDate, setStartDate] = useState(new Date());
    const [handle, setHandle] = useState("");
    const [checkedTags, setCheckedTags] = useState([""]);


  
 

    const handleSearch = () => {
            const inputObject = {
                handle: handle,
                mooTime: startDate.toJSON().slice(0, 19).replace('T', ' '),
                tags: checkedTags
            };
            
            getFilteredMoos(inputObject);
        
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
            <TagCheckboxes checkedTags={checkedTags} setCheckedTags={setCheckedTags} />
        </Form.Group>

        </Form>
    </Card.Text>
        <Container align="Center">
            <Row>
                <Col><Button onClick={handleSearch} style={{ width:"80%" }} variant="outline-dark" size="sm">Search!</Button></Col>
            </Row>
        </Container>
    </Card.Body>
</Card>
};