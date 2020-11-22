import React, { useEffect, useState } from "react";
import { InputGroup, Card, Container, Row } from "react-bootstrap";
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
        console.log(body)
        setTags(body);
        return body;
    };

    return <Container align="center">

        {tags.map(tag => {
                return <Card style={{ margin: "20px", width: "20rem"}}>
                    <Container>
                        <Row>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            {tag.tagName}
                        </Row>
                    </Container>
                </Card>
                }
            )}
        
        <TagInput updateList={getTags} />
    </Container>
};