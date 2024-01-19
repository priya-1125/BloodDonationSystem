// src/DonorForm.js
import React, { useState, useEffect } from 'react';

// ... (your existing imports)

// ... (your existing imports)

const DonorForm = ({ onDonorAdded, onUpdateDonor, selectedDonor }) => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [contact, setContact] = useState('');

  useEffect(() => {
    if (selectedDonor) {
      setName(selectedDonor.name);
      setBloodGroup(selectedDonor.bloodGroup);
      setContact(selectedDonor.contact);
    } else {
      setName('');
      setBloodGroup('');
      setContact('');
    }
  }, [selectedDonor]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const donorData = { name, bloodGroup, contact };

    try {
      if (selectedDonor) {
        console.log(`${selectedDonor.id}`);
          await fetch(`http://localhost:5259/api/Donor/10`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donorData),
        });
        onUpdateDonor(selectedDonor.id, donorData);
      } else {
        const response = await fetch('http://localhost:5259/api/Donor', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(donorData),
        });

        if (response.ok) {
          const addedDonor = await response.json();
          onDonorAdded(addedDonor);
        } else {
          console.error('Error submitting donor:', response.status);
        }
      }

      setName('');
      setBloodGroup('');
      setContact('');
    } catch (error) {
      console.error('Error submitting donor:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">{selectedDonor ? 'Update' : 'Add Donor'}</h1>
      <form onSubmit={handleSubmit} className="max-w-md">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Name:
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-700">
            Blood Group:
          </label>
          <input
            type="text"
            id="bloodGroup"
            value={bloodGroup}
            onChange={(e) => setBloodGroup(e.target.value)}
            className="mt-1 p-3 border border-gray-300 rounded-md w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700">
            Contact:
          </label>
          <input
            type="text"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            className="mt-1 p-2 border border-red rounded-md w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          {selectedDonor ? 'Update' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
