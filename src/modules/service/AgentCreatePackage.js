import React from 'react';
import './AgentCreatePackage.css'
import * as GiIcons from "react-icons/gi";
import Avatar from '../common/Avatar';


function AgentCreatePackage() {

    return (
        <div>
            <form onSubmit={(e) => { e.preventDefault(); console.log('ola mundo') }}>
                <div className="service-container">
                    <div className='spacing-small-left spacing-small-top'>
                        <GiIcons.GiAirBalloon />
                        <Avatar />
                    </div>
                    <div className='spacing-medium-top spacing-medium-bottom'>
                        <h3>Registre um pacote de viagens</h3>
                    </div>
                    <div className='teste'>
                        <h4>Entre com os detalhes do pacote criado para o viajante.</h4>
                        <hr />
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div className='spacing-small-top'>
                                <label for="item1">País</label>
                                <input type="text" placeholder="Enter country" id="item1" />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item2">Cidade</label>
                                <input type="text" placeholder="Enter city" id="item2" />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item3">Hotel</label>
                                <input type="text" placeholder="Enter hotel" id="item3" />
                            </div>
                            <div className='spacing-small-top'>
                                <label for="item4">Restaurante</label>
                                <input type="text" placeholder="Enter restaurant" id="item4" />
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
