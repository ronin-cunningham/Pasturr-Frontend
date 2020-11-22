import React, { useEffect, useState } from "react";
import { InputGroup, Card, Container, Row } from "react-bootstrap";


export const TagCheckboxes = () => {

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
                return <Card style={{ margin: "5px", width: "8rem"}}>
                    <Container>
                        <Row>
                            <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                            {tag.tagName}
                        </Row>
                    </Container>
                </Card>
                }
            )}
    </Container>
};