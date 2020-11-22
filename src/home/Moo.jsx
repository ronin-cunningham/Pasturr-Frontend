import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Moo = ({ mooID, handle, content, mooTime }) => {
    const [replies, setReplies] = useState([]);

    const handleClick = () => {
        getReplies(mooID);
    };

    const getReplies = async (mooID) => {
        const response = await fetch(`/api/replies?mooID=${mooID}`);
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        console.log(body)
        setReplies(body);
        return body;
    };

    const parseMySQLTime = (mysql_string) => {
        
        var t, result = null;
        
        if( typeof mysql_string === 'string' )
        {
            t = mysql_string.split(/[- T : .]/);
            result = new Date(t[0], t[1] - 1, t[2], t[3] || 0, t[4] || 0, t[5] || 0);          
        }
        return result.toISOString().split('T')[0];   
    };


    return <Container >
        <Card align="left" style={{ width: '30rem', margin: "20px" }}>
            <Card.Body>

                <Container style={{ marginBottom:"30px"}} onClick={handleClick}>
                    <Card.Title>@{handle}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{parseMySQLTime(mooTime)}</Card.Subtitle>
                </Container>
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

        {replies.map(reply => {
            // !!! Change this once ruchit sends the entire reply moo and their contents in the endpoint
            console.log(reply);
                return <div>
                    {reply.replyMooID}
                </div>
                }
            )}

    </Container>
};