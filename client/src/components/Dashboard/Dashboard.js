import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Dashboard.css';

const Dashboard = () => {
    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVehicles = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/vehicles');
                setVehicles(response.data);
                setLoading(false);
            } catch (err) {
                setError('Error fetching vehicles');
                setLoading(false);
            }
        };

        fetchVehicles();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="dashboard">
            <h1>Garage Dashboard</h1>
            <div className="vehicles-grid">
                {vehicles.map(vehicle => (
                    <div key={vehicle._id} className="vehicle-card">
                        <img 
                            src={vehicle.image || '/placeholder-car.png'} 
                            alt={`${vehicle.make} ${vehicle.model}`}
                        />
                        <h3>{vehicle.make} {vehicle.model}</h3>
                        <p>Status: {vehicle.currentStatus}</p>
                        <p>License Plate: {vehicle.licensePlate}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Dashboard; 