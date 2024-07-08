import axios from 'axios';
import React, { useState, useEffect } from 'react';

const Services = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('https://garage-studi-backend.up.railway.app/services')
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div>
            <h1 className="titreServices">Nos services</h1>
            {data.map((service, index) => (
                <div key={index}>
                    {index % 2 == 0 ?
                        <div className="services" index={index}>
                            <div className="texteService">
                                <h3 className="nomService">{service.name}</h3>
                                <p className="paragrapheService">{service.content}</p>
                            </div>
                            <img className="imageService" src={`https://garage-studi-backend.up.railway.app/uploads/${service.image}`} />
                        </div>
                        :
                        <div className="services" index={index}>
                            <img className="imageService" src={`https://garage-studi-backend.up.railway.app/uploads/${service.image}`} />
                            <div className="texteService">
                                <h3 className="nomService">{service.name}</h3>
                                <p>{service.image}</p>
                                <p className="paragrapheService">{service.content}</p>
                            </div>
                        </div>
                    }
                </div>
            ))}
        </div>
    );
};

export default Services;