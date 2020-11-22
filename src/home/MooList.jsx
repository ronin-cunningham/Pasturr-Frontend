import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Moo } from "./Moo";

export const MooList = () => {
    const [moos, setMoos] = useState([]);

    useEffect(() => {

        callApi().then(res => {
                // response test
                console.log(res.message);
                // map test
                const moo = "test";
                setMoos(moos => [...moos, moo]);
                }
            );
    }, []);

    const callApi = async() => {
        const response = await fetch('/api');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");

        return body;
    };

    return <Container align="center">
            {moos.map(moo => {
                return <Moo moo={moo} />
                }
            )}
        </Container>
};