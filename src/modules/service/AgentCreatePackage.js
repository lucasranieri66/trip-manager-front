import React, { useState } from 'react';
import './AgentCreatePackage.css'
import * as GiIcons from "react-icons/gi";

async function createPackage(credentials, type) {
    let body = {
        "trip": {
            "agent": sessionStorage.getItem("agent"),
            "traveller": credentials.traveller,
            "country": {
                "name": credentials.country,
                "city":
                {
                    "name": credentials.city,
                    "restaurant": credentials.restaurant,
                    "hotel": credentials.hotel,
                    "tourism": credentials.tourism,
                    "leisure": credentials.leisure
                }
            }
        }
    }
    console.log(body)
    return fetch(`http://localhost:3333/agent-create-package`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
        .then(data => data.json())
        .catch(err => {
            throw new Error(err)
        })
}

function AgentCreatePackage() {

    const [traveller, setTraveller] = useState();
    const [country, setCountry] = useState();
    const [city, setCity] = useState();
    const [restaurant, setRestaurant] = useState();
    const [hotel, setHotel] = useState();
    const [tourism, setTourism] = useState();
    const [leisure, setLeisure] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        console.log('ola mundo')
        const response = await createPackage({
            traveller,
            country,
            city,
            restaurant,
            hotel,
            tourism,
            leisure
        })
        console.log(response)
    }

    return (
        <div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="service-container">
                    <div className='spacing-small-left spacing-small-top'>
                        <GiIcons.GiAirBalloon />
                    </div>
                    <div className='spacing-medium-top spacing-medium-bottom'>
                        <h3>Registre um pacote de viagens</h3>
                    </div>
                    <div className='teste'>
                        <h4>Entre com os detalhes do pacote criado para o viajante.</h4>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='spacing-small-top'>
                                <label for="item5">Viajante</label>
                                <input type="text" placeholder="Enter country" id="item5" onChange={e => setTraveller(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item6">País</label>
                                <input type="text" placeholder="Enter country" id="item6" onChange={e => setCountry(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item2">Cidade</label>
                                <input type="text" placeholder="Enter city" id="item2" onChange={e => setCity(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item3">Hotel</label>
                                <input type="text" placeholder="Enter hotel" id="item3" onChange={e => setHotel(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item4">Restaurante</label>
                                <input type="text" placeholder="Enter restaurant" id="item4" onChange={e => setRestaurant(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item7">Turismo</label>
                                <input type="text" placeholder="Enter restaurant" id="item7" onChange={e => setTourism(e.target.value)} />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item8">Entretenimento</label>
                                <input type="text" placeholder="Enter restaurant" id="item8" onChange={e => setLeisure(e.target.value)} />
                            </div>
                        </div>
                        <hr />
                        <button className='btn-green' type="submit"><strong>Registre</strong></button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AgentCreatePackage;
