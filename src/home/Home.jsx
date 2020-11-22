import React, { useEffect } from "react";

export const Home = () => {

    useEffect(() => {

        callApi().then(res => 
                console.log(res.message)
            );
    }, []);

    const callApi = async() => {
        const response = await fetch('/api');
        const body = await response.json();
        if (response.status !== 200) throw Error("didn't work");

        return body;
    };

    return (
        <div>Home</div>
    );
};