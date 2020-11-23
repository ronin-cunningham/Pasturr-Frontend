import React, { useState, useEffect } from "react";
import { Container, Row, Dropdown, DropdownButton } from "react-bootstrap";
import { Moo } from "./Moo";
import { MooInput } from "./MooInput";
import { Filters } from "./Filters";
import { Settings } from "./Settings";

export const MooList = () => {
    const [moos, setMoos] = useState([]);
    const [region, setRegion] = useState("North America");

    const getMoos = async() => {
        const response = await fetch(`/api/moo?region=${region}`);
        const body = await response.json();

        console.log(body)
        if (response.status !== 200) throw Error("didn't work");
        setMoos(body);
        return body;
    };

    useEffect(() => {
        getMoos();
    }, [region]);



    

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
        const body = await response.json();
        setMoos(body)
    };
    

    return <Container align="center">
        <div style={{ display:"flex", justifyContent:"flex-end" }}>
            <DropdownButton id="dropdown-basic-button" title={region}>
                <Dropdown.Item onClick={() => setRegion("North America")}>North America</Dropdown.Item>
                <Dropdown.Item onClick={() => setRegion("Europe")}>Europe</Dropdown.Item>
                <Dropdown.Item onClick={() => setRegion("Asia")}>Asia</Dropdown.Item>
            </DropdownButton>
        </div>
        <Container>
            <Row>
            <MooInput updateList={getMoos} />
            <Filters getFilteredMoos={getFilteredMoos} getMoos={getMoos} />
            </Row>
        </Container>
            {moos.map(moo => {
                return <Moo mooID={moo.mooID} handle={moo.handle} content={moo.content} mooTime={moo.mooTime} likeProp={moo.likeCount} 
                updateList={getMoos}/>
                }
            )}
        <Settings updateList={getMoos} />
    </Container>
};