import React, { useState, useEffect } from 'react';
import './AgentCreatePackage.css'
import * as GiIcons from "react-icons/gi";

async function createPackage() {
    console.log(`http://localhost:3333/agent-trips/${JSON.parse(sessionStorage.getItem("token"))}`)
    return fetch(`http://localhost:3333/traveller-trips/${JSON.parse(sessionStorage.getItem("token"))}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(data => data.json())
        .catch(err => {
            throw new Error(err)
        })
}

function AgentViewPackage() {

    const [trips, setTrips] = useState([]);
    // const [trips, setTrips] = useState([{ "traveller": "maico" }, { "traveller": "jorge" }]);


    useEffect(() => {
        handleSubmit()
    }, [])

    const handleSubmit = async () => {
        // e.preventDefault();
        console.log('ola mundo:', String(sessionStorage.getItem("token")))
        const response = await createPackage()
        console.log(response)
        if (!("message" in response)) {
            setTrips(response)
        }
    }

    return (
        <div>
            <div className="service-container">
                <div className='spacing-small-left spacing-small-top'>
                    <GiIcons.GiAirBalloon />
                </div>
                <div className='spacing-medium-top spacing-medium-bottom'>
                    <h3>Pacotes criados até o momento</h3>
                </div>

                {
                    trips.map(x => {
                        console.log("X", x.trip)
                        return <div className='teste' style={{ marginBottom: '10px', display: "inline-block", marginRight: '10px' }}>
                            <h4>Pacote.</h4>
                            <hr />
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                <span for="item5">Viajante: {x.trip.traveller}</span>
                                <span for="item6">País: {x.trip.country[0].name} </span>
                                <span for="item2">Cidade: {x.trip.country[0].city[0].name} </span>
                                <span for="item3">Hotel: {x.trip.country[0].city[0].hotel} </span>
                                <span for="item4">Restaurante: {x.trip.country[0].city[0].restaurant} </span>
                                <span for="item7">Turismo: {x.trip.country[0].city[0].tourism}</span>
                                <span for="item8">Entretenimento: {x.trip.country[0].city[0].leisure} </span>
                            </div>
                            <hr />
                        </div>
                    })
                }
            </div>
        </div >
    );
}

export default AgentViewPackage;
