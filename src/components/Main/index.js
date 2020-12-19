import React from 'react';
import file from "../../data/entities.json"
import Cards from "./Cards";

export default function Main(){

    fetch(`${process.env.REACT_APP_BASE_URL}/cards-react-js/src/data/entities.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => console.log("sucsses",data))
        .catch(error => console.error("entities.json loader", error));

    return (
        <main className={"container"}>
            <Cards />
        </main>
    )
};
