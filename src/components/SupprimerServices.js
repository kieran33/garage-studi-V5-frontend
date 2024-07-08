import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const SupprimerEmploye = () => {

    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get('garage-studi-backend.up.railway.app/services')
        setData(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    const handleDelete = (name) => {
        if (window.confirm("Êtes-vous sûr de vouloir supprimer définitivement ce service ?")) {
            axios.delete(`garage-studi-backend.up.railway.app/services/remove/${name}`);
            setTimeout(() => loadData(), 500);
        }
    }

    return (
        <div className="elementDashboardAdmin" id="supprimerEmploye">
            <h3>Liste des services</h3>
            <div>
                {data.map((service, index) => (
                    <div index={index} className="employe">
                        <img className="imageSupprimerVoiture" src={`garage-studi-backend.up.railway.app/uploads/${service.image}`} />
                        <p>Nom service : {service.name}</p>
                        <p>Explication service : {service.content}</p>
                        <button onClick={() => handleDelete(service.name)}>Supprimer</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SupprimerEmploye;