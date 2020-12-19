import React from 'react';
import { get } from "lodash";

import cards from "./entities";

export default function Cards(){

    const items = get(cards, "[0].response", [])

    return (
        <div className={"container"}>
            <div className="row justify-content-between">
                {items.map((item, idx)=> {
                    const title = get(item, "attributes.title", "");
                    const street = get(item, "attributes.address.street", "");
                    const house = get(item, "attributes.address.house", "");
                    const room = get(item, "attributes.address.room", "");
                    return (
                        <div className="col-12 col-md-4 mb-3">
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
                                    <p className="card-text">
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
