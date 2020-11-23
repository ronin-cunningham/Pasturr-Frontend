import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Moo } from "./Moo";
import { MooInput } from "./MooInput";
import { Filters } from "./Filters";

export const MooList = () => {
    const [moos, setMoos] = useState([]);

    useEffect(() => {
        getMoos();
    }, []);

    const getMoos = async() => {
        const response = await fetch('/api/moo');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        setMoos(body);
        console.log(body)
        return body;
    };

    // Example POST method implementation:
    const getFilteredMoos = async (data) => {
        // Default options are marked with *
        const response = await fetch('/api/filterMoos', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data) // body data type must match "Content-Type" header
            });
        console.log(data)
        const body = await response.json();
        console.log(body)
        setMoos(body)
    };
    

    return <Container align="center">
        <Container>
            <Row>
            <MooInput updateList={getMoos} />
            <Filters getFilteredMoos={getFilteredMoos} getMoos={getMoos} />
            </Row>
        </Container>
            {moos.map(moo => {
                console.log(moo)
                return <Moo mooID={moo.mooID} handle={moo.handle} content={moo.content} mooTime={moo.mooTime} likeProp={moo.likeCount} />
                }
            )}
        </Container>
};