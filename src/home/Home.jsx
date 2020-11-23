import React from "react";
import Container from "react-bootstrap/Container";
import { MooList } from "./MooList";
import { MostFreqMooer } from "./MostFreqMooer";


export const Home = () => {


    return <Container align="center">
            <MostFreqMooer />
            <MooList />
        </Container>
};