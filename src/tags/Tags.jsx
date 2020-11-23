import React, { useEffect, useState } from "react";
import { Card, Container, Row } from "react-bootstrap";
import { TagInput } from "./TagInput";
import { TagAnalytics } from "./TagAnalytics";
import { TagSearchBar } from "./TagSearchBar";

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

    const getFilteredTags = async (tagName) => {
        // Default options are marked with *
        const response = await fetch(`/api/tagMatch?tagName=${tagName}`, {
            method: 'GET', 
            headers: {
                'Content-Type': 'application/json'
            }});
        const body = await response.json();
        setTags(body)
    };

    return <Container align="center">

        <div style={{ display:"flex", justifyContent:"space-around"}}>
            <TagInput updateList={getTags} />
            <TagAnalytics />
        </div>

        <TagSearchBar getFilteredTags={getFilteredTags} />

        {tags.map(tag => {
                return <Card style={{ margin: "20px", width: "10rem"}}>
                            {tag.tagName}
                </Card>
                }
            )}
        
    </Container>
};