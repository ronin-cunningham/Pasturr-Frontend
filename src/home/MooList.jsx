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
        console.log(body)
        setMoos(body);
        return body;
    };

    return <Container align="center">
        <Container>
            <Row>
            <MooInput updateList={getMoos} />
            <Filters />
            </Row>
        </Container>
            {moos.map(moo => {
                return <Moo mooID={moo.mooID} handle={moo.handle} content={moo.content} mooTime={moo.mooTime} />
                }
            )}
        </Container>
};