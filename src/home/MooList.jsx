import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Moo } from "./Moo";
import { MooInput } from "./MooInput";

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
            <MooInput updateList={getMoos} />

            {moos.map(moo => {
                return <Moo mooID={moo.mooID} handle={moo.handle} content={moo.content} mooTime={moo.mooTime} />
                }
            )}
        </Container>
};