import React from "react";

export const TagCheckbox = ({ name, checkedTags, setCheckedTags }) => {

    const handleChange = (checked) => {
        if (checked) {
            setCheckedTags(tags => [...tags, name]);
        }
        else {
            setCheckedTags(checkedTags.filter(stateName => stateName !== name))
        }
    }
    return <label><input type="checkbox" onChange={(e) => handleChange(e.target.checked)}/>{name}</label>
};