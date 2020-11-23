import React, { useState, useEffect } from "react";
import { Card, Button, Container, Row, Col } from "react-bootstrap";

export const Settings = ({ updateList }) => {

    const handleClear = async () => {
        await fetch(`/api/database`, {
            method: 'POST'
        }).then(async () => {
            await fetch(`/api/tables`, {
                method: 'POST'
            }).then(() => {
                updateList();
            })
        });
    };

    const handlePopulate = async () => {
        await fetch(`/api/load`, {
            method: 'POST'
        }).then(() => {
            updateList();
        });
    };

    return <Container >
    <Card align="left" style={{ width: '30rem', margin: "20px" }}>
        <Card.Body>
            <div style={{ display:"flex"}}>
        </div>
            <Container style={{ marginBottom:"30px"}}>
            </Container>
                    <Container align="Center">
                        <Row>
                            <div style={{ width:"100%", display:"flex", justifyContent:"space-around" }}>
                                <div style={{ display:"flex", flexDirection:"column" }}>
                                    <Button onClick={() => handleClear()} variant="outline-dark" size="sm">Clear Database</Button>
                                </div>
                                <div style={{ display:"flex", flexDirection:"column" }}>
                                    <Button onClick={() => handlePopulate()} variant="outline-dark" size="sm">Populate Database</Button>
                                </div>
                            </div>
                        </Row>
                    </Container>
        </Card.Body>
    </Card>
    </Container>
};