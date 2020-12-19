import React, { useState, useEffect } from 'react';
import { get } from "lodash";

export default function Cards(){

    const [cards, setCards] = useState([]);

    useEffect(() => {
        fetch(`https://alinagaripova.github.io/json-api/entities.json`)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error " + response.status);
            }
            return response.json();
        })
        .then(data => {
            data && setCards(get(data, "response"))
        })
        .catch(error => console.error("entities.json loader", error));
    }, [])

    return (
        <div className={"container py-3"}>
            <div className="row justify-content-between">
                {cards && cards.map((item, idx)=> {
                    const title = get(item, "attributes.title", "");
                    const street = get(item, "attributes.address.street", "");
                    const house = get(item, "attributes.address.house", "");
                    const room = get(item, "attributes.address.room", "");
                    return (
                        <div className="col-12 col-md-4 mb-3" key={idx}>
                            <div
                                className="card"
                                style={{
                                    minHeight: "250px"
                                }}
                            >
                                <div className="card-body d-flex flex-column justify-content-around align-content-center text-center">
                                    <h5 className="card-title">
                                        {title}
                                    </h5>
                                    <p
                                        className="card-text"
                                        style={{
                                            minHeight: "50px"
                                       }}
                                    >
                                        Адресс: ул.{street},дом.{house}, кв.{room}
                                    </p>
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        data-toggle="modal" data-target="#exampleModal"
                                        // onClick={()=> {
                                        //     setIsModal(true);
                                        //     setCard(item);
                                        // }}
                                    >
                                        Добавить в избранное
                                    </button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
