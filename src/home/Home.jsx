import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { MooList } from "./MooList";
import { MostFreqMooer } from "./MostFreqMooer";


export const Home = () => {

    const [users, setUsers] = useState("");

    const getPopularUsers = async () => {
        const response = await fetch('/api/popularUser');
        const body = await response.json();

        let usersString = "";
        for(let i = 0; i < body.length; i++) {
          const user = body[i];
          const and = i === body.length - 1 && body.length > 1 ? "and " : "";
          const comma = i >= 0 && i < body.length - 1 && body.length > 2 ? "," : "";
          usersString += ` ${and}${user.handle}${comma}`;
        }

        if (body.length === 0)
            usersString = "nobody";

        setUsers(usersString);
    };

    return <Container align="center">
            <MostFreqMooer getPopularUsers={getPopularUsers} users={users} />
            <MooList getPopularUsers={getPopularUsers} />
        </Container>
};