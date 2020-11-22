import React, { useEffect, useState } from "react";
import { Card, Container } from "react-bootstrap";
import { TagInput } from "./TagInput";

export const Tags = () => {

    const [tags, setTags] = useState([]);

    useEffect(() => {
        getTags();
    }, []);

    const getTags = async() => {
        const response = await fetch('/api/tag');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");
        setTags(body);
        return body;
    };

    return <Container align="center">

        {tags.map(tag => {
                return <Card style={{ margin: "20px", width: "10rem"}}>
                            {tag.tagName}
                </Card>
                }
            )}
        
        <TagInput updateList={getTags} />
    </Container>
};