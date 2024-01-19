import React from 'react';
import { useState, useEffect } from 'react';
import DonorForm from './DonorForm';

// ... (your existing imports)

// ... (your existing imports)

const Donors = () => {
  const [donors, setDonors] = useState([]);
  const [searchBloodGroup, setSearchBloodGroup] = useState('');
  const [selectedDonor, setSelectedDonor] = useState(null);

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

  const handleDonorAdded = (newDonor: any) => {
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

  const handleUpdateDonor = (donor: React.SetStateAction<null>) => {
    setSelectedDonor(donor);
  };

  const handleClearSelectedDonor = () => {
    setSelectedDonor(null);
  };

  const filteredDonors = donors.filter((donor) =>
    donor.bloodGroup.toLowerCase().includes(searchBloodGroup.toLowerCase())
  );

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-2xl font-bold mb-4">Donor List</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
          Search by Blood Group:
        </label>
        <input
          type="text"
          id="bloodGroup"
          value={searchBloodGroup}
          onChange={(e) => setSearchBloodGroup(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded-md w-full"
        />
      </div>

      {/* Display Filtered Donors */}
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Blood Group</th>
            <th className="py-2 px-4 border-b">Contact</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredDonors.map((donor) => (
            <tr key={donor.id}>
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
                {/* <button
                  onClick={() => handleUpdateDonor(donor)}
                  className="bg-blue-500 text-white py-1 px-2 rounded-md"
                >
                  Update
                </button> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <DonorForm
        onDonorAdded={handleDonorAdded}
        onUpdateDonor={handleClearSelectedDonor}
        selectedDonor={selectedDonor}
      />
    </div>
  );
};

export default Donors;
