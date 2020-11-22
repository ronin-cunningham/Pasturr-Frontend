import React from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Moo = ({ mooID, handle, content }) => {

    return <Card align="left" style={{ width: '30rem', margin: "20px" }}>
        <Card.Body>
        <Card.Title>@{handle}</Card.Title>
        <Card.Img align="center"  src="../assets/jumbotron-image.png" />
        <Card.Text>
            {content}
        </Card.Text>
            <Container align="Center">
                <Row>
                    <Col><Button variant="outline-dark" size="sm">reply</Button></Col>
                    <Col><Button variant="outline-dark" size="sm">retweet</Button></Col>
                    <Col><Button variant="outline-dark" size="sm">like</Button></Col>
                </Row>
            </Container>
        </Card.Body>
    </Card>
};