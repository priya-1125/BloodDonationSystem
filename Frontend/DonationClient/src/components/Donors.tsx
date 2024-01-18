import React from 'react';
import { useState, useEffect } from 'react';

// src/Donors.js
//import React, { useState, useEffect } from 'react';
import DonorForm from './DonorForm';

const Donors = () => {
  const [donors, setDonors] = useState([]);

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const response = await fetch('http://localhost:5259/api/Donor');
        const data = await response.json();
        setDonors(data);
      } catch (error) {
        console.error('Error fetching donors:', error);
      }
    };

    fetchDonors();
  }, []);

  const handleDonorAdded = (newDonor) => {
    setDonors((prevDonors) => [...prevDonors, newDonor]);
  };

  const handleDeleteDonor = async (id) => {
    try {
      await fetch(`http://localhost:5259/api/Donor/${id}`, {
        method: 'DELETE',
      });
      setDonors((prevDonors) => prevDonors.filter((donor) => donor.id !== id));
    } catch (error) {
      console.error('Error deleting donor:', error);
    }
  };

  console.log('Donors component rendered'); 

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Donors List</h1>
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">ID</th>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Blood Group</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {donors.map((donor) => (
            <tr key={donor.id}>
              <td className="py-2 px-4 border-b">{donor.id}</td>
              <td className="py-2 px-4 border-b">{donor.name}</td>
              <td className="py-2 px-4 border-b">{donor.bloodGroup}</td>
              <td className="py-2 px-4 border-b">{donor.contact}</td>
              <td className="py-2 px-4 border-b">
                <button
                  onClick={() => handleDeleteDonor(donor.id)}
                  className="bg-red-500 text-white py-1 px-2 mr-2 rounded-md"
                >
                  Delete
                </button>
                {/* Add update functionality here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DonorForm onDonorAdded={handleDonorAdded} />
    </div>
  );
};

export default Donors;