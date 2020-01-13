import React from 'react';
import './clients.css';

const Clients = () => {
    return (
        <div className="container client-wrap">
            <div>
                <img src={require("./images/client-1.png")} alt="client name" />
            </div>
            <div>
                <img src={require("./images/client-2.png")} alt="client name" />
            </div>
            <div>
                <img src={require("./images/client-3.png")} alt="client name" />
            </div>
            <div>
                <img src={require("./images/client-4.png")} alt="client name" />
            </div>
            <div>
                <img src={require("./images/client-5.png")} alt="client name" />
            </div>
        </div>
    )
}

export default Clients;