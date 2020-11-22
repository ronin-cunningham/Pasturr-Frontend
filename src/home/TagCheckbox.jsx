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
    return <label style={{ display:"flex", justifyContent:"flex-start", alignItems:"center" }}>
        <input style={{ marginLeft:"10px"}} type="checkbox" onChange={(e) => handleChange(e.target.checked)}/>
        <div style={{ marginLeft:"20px"}}>
            {name}
        </div>
        
        </label>
};