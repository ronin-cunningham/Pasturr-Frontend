import React, { useEffect, useState } from "react";
import { InputGroup, Card, Container, Row } from "react-bootstrap";
import { TagCheckbox } from "./TagCheckbox";


export const TagCheckboxes = ({ checkedTags, setCheckedTags }) => {

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
                return <Card style={{ margin: "5px", width: "8rem"}}>
                            <TagCheckbox name={tag.tagName} checkedTags={checkedTags} setCheckedTags={setCheckedTags} />
                </Card>
                }
            )}
    </Container>
};