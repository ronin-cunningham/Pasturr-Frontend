import React, { useState } from "react";
import { Card, Form, Container, Row, Col, Button } from "react-bootstrap";

export const TagSearchBar = ({ getFilteredTags }) => {
    const [search, setSearch] = useState("");

    return <Card align="left" style={{ width: '30rem', margin: "20px 20px 100px 20px" }}>
    <Card.Body>
    <Card.Title>Search Tags</Card.Title>
    <Card.Text>
        <Form>

        <Form.Group align="center"  >
            <Form.Control style={{ width:"80%" }} placeholder="handle" onChange={(e) => setSearch(e.target.value)}/>
        </Form.Group>


        </Form>
    </Card.Text>
        <Container align="Center">
            <Row>
                <Col><Button onClick={() => getFilteredTags(search)} style={{ width:"80%" }} variant="outline-dark" size="sm">Search!</Button></Col>
            </Row>
        </Container>
    </Card.Body>
</Card>
}