import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import { Moo } from "./Moo";
import { MooInput } from "./MooInput";

export const MooList = () => {
    const [moos, setMoos] = useState([]);

    useEffect(() => {

        callApi().then(res => {
            console.log(res);
                setMoos(res);
                }
            );
    }, []);

    const callApi = async() => {
        const response = await fetch('/api/moo');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        return body;
    };

    return <Container align="center">
            <MooInput mooID={0} handle={"temp"} content={"temp"} />

            {moos.map(moo => {
                return <Moo mooID={moo.mooID} handle={moo.handle} content={moo.content} />
                }
            )}
        </Container>
};