// Donors.tsx
import React, { useEffect, useState } from 'react';
import { getDonors, deleteDonor } from '../axiosApi/apiService';

const Donors: React.FC = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        const fetchDonors = async () => {
            const fetchedDonors = await getDonors();
            setDonors(fetchedDonors);
        };

        fetchDonors();
    }, []);

    const handleDelete = async (id: number) => {
        await deleteDonor(id);
        setDonors(donors.filter((donor: any) => donor.id !== id));
    };

    return (
        <div>
            <h2>Donors List</h2>
            <ul>
                {donors.map((donor: any) => (
                    <li key={donor.id}>
                        {donor.name} - {donor.bloodGroup}
                        <button onClick={() => handleDelete(donor.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Donors;
