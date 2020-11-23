import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Moo = ({ mooID, handle, content, mooTime, likeProp, updateList }) => {
    const [replies, setReplies] = useState([]);
    const [tags, setTags] = useState([]);
    const [likes, setLikes] = useState(0);
    const [reMooCount, setReMooCount] = useState(0);
    const [replyCount, setReplyCount] = useState(0);

    useEffect(() => {
        getTags(mooID);
        setLikes(likeProp);
    }, [mooID, likeProp]);

    const handleDelete = async (mooID) => {
        const response = await fetch(`/api/moo?mooID=${mooID}`, {
            method: 'DELETE'
        }).then(() => {
            updateList();
        });
    };


    const handleLike = async (mooID) => {
        const response = await fetch(`/api/like?mooID=${mooID}`, {
            method: 'PUT',
        }).then(() => {
            const newLikes = likes + 1;
            setLikes(newLikes);
        });
    };

    const handleClick = () => {
        getReplies(mooID);
    };

    const getReplies = async (mooID) => {
        const response = await fetch(`/api/replies?mooID=${mooID}`);
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        setReplies(body);
        return body;
    };

    const getTags = async (mooID) => {
        const response = await fetch(`/api/tag?mooID=${mooID}`);
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        
        if (typeof body !== "undefined") {

            setTags(body);
        }
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
                <div style={{ display:"flex"}}>
            <Button onClick={() => handleDelete(mooID)} variant="outline-danger">Delete</Button>{' '}
            </div>
                <Container style={{ marginBottom:"30px"}} onClick={handleClick}>
                    <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                    <Card.Title>@{handle}</Card.Title>
                    <div>
                        <Card.Subtitle className="mb-2 text-muted">{parseMySQLTime(mooTime)}</Card.Subtitle>
                        <Card.Subtitle className="mb-2 text-muted">{tags.map(tag => {
                            return `#${tag.tagName} `
                        })}</Card.Subtitle>
                    </div>
                    </div>
                </Container>
                    <Card.Text>
                        {content}
                    </Card.Text>
                        <Container align="Center">
                            <Row>
                                <div style={{ width:"100%", display:"flex", justifyContent:"space-around" }}>
                                    <div style={{ display:"flex", flexDirection:"column" }}>
                                        {replyCount}
                                        <Button variant="outline-dark" size="sm">reply</Button>
                                    </div>
                                    <div style={{ display:"flex", flexDirection:"column" }}>
                                        {reMooCount}
                                        <Button variant="outline-dark" size="sm">reMoo</Button>
                                    </div>
                                    <div style={{ display:"flex", flexDirection:"column" }}>
                                        {likes}
                                        <Button onClick={() => handleLike(mooID)} variant="outline-dark" size="sm">like</Button>
                                    </div>
                                </div>
                            </Row>
                        </Container>
            </Card.Body>
        </Card>

        {replies.map(reply => {
            // !!! Change this once ruchit sends the entire reply moo and their contents in the endpoint
                return <div style={{ width:"40%"}}>
                    <Moo mooID={reply.replymooID} handle={reply.handle} content={reply.content} mooTime={reply.mooTime} likeProp={reply.likeCount}
                    updateList={updateList} />
                </div>
                }
            )}

    </Container>
};