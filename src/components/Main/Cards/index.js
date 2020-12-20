import React, { useState, useEffect } from 'react';
import { get } from "lodash";

export default function Cards(){

    const [cards, setCards] = useState([]);
    const [liked, setLiked] = useState([]);

    function setLike(id){
        const index = liked.findIndex (item => item === id)

        const arr = liked.filter(item => item !== id);

        index < 0 ? setLiked([...liked, id]) : setLiked(arr);
    }

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
                {cards && cards.map(({ id, attributes, relationships })=> {
                    const title = get(attributes, "title", "");
                    const street = get(attributes, "address.street", "");
                    const house = get(attributes, "address.house", "");
                    const room = get(attributes, "address.room", "");
                    const fill = liked.find(item => item === id) === id ? `red` : `none`;

                    return (
                        <div className="col-12 col-md-4 mb-3" key={id}>
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
                                   <div
                                       className={"card__like"}
                                       onClick={() => setLike(id)}
                                   >
                                       <svg width="35" height="35" xmlns="http://www.w3.org/2000/svg">
                                           <g>
                                               <title>Layer 1</title>
                                               <path id="svg_1" fill={fill} stroke="red" d="m16.4,4c-1.8,0 -3.4,0.9 -4.4,2.3c-1,-1.4 -2.6,-2.3 -4.4,-2.3c-3.1,0 -5.6,2.5 -5.6,5.6c0,4.4 10,12.4 10,12.4s10,-8 10,-12.4c0,-3.1 -2.5,-5.6 -5.6,-5.6z"/>
                                           </g>
                                       </svg>
                                   </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
};
