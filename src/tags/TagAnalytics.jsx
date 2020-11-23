import React, { useState } from "react";
import { Card, Button, Container, Row, Col, Form } from "react-bootstrap";

export const TagAnalytics = ({ updateList }) => {
    const [count, setCount] = useState(0);
    const [userTags, setUserTags] = useState([]);
    const [tagsGreaterThanFreq, setTagsGreaterThanFreq] = useState([]);

    const handleClick = async () => {
        const response = await fetch('/api/userTagFrequency');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        setUserTags(body);

        const response2 = await fetch(`/api/tagFrequency?count=${count}`);
        const body2 = await response2.json();

        console.log(body2)
        if (response2.status !== 200) throw Error("didn't work");
        setTagsGreaterThanFreq(body2);

        return body;
    };

    return <Card align="left" style={{ width: '20rem', margin: "100px 20px 20px 20px" }}>
    <Card.Body>
    <Card.Title>Trending Tags</Card.Title>
    <Card.Text>
        <Form>
        <Form.Group controlId="formBasicEmail">
            <Form.Control placeholder="0" onChange={(e) => setCount(e.target.value)} />
            <Form.Text className="text-muted">
                <div align="center">
                Enter Tag Frequency to View Popular Tags
                </div>
            </Form.Text>
        </Form.Group>
        
        </Form>
    </Card.Text>

        <Container align="Center">
            <Row>
                <Col><Button onClick={() => handleClick()} style={{ width:"80%" }} variant="outline-dark" size="sm">View Trending Tags</Button></Col>
            </Row>
        </Container>

    <div style={{ marginTop:"30px"}}>
        <Container align="center">
            <div style={{ margin:"10px"}}>
                <label>Tags Greater Than Frequency</label>
                {tagsGreaterThanFreq.map(tag => {
                    return <div>
                        {tag.tagName}: {tag.frequency}
                    </div> 
                })}
            </div>
            <div>
                <label>Total Tags Users Have Created</label>
                {userTags.map(ut => {
                    return <div>
                        {ut.handle}: {ut.frequency}
                    </div>
                })}
            </div>
        </Container>
    </div>
        
    </Card.Body>
</Card>
};