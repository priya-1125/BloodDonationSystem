// src/DonorForm.js
import React, { useState } from 'react';

const DonorForm = () => {
  const [name, setName] = useState('');
  const [bloodGroup, setBloodGroup] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    const newDonor = { name, bloodGroup, contact };

    try {
      await fetch('http://localhost:5259/api/Donor', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newDonor),
      });

      // Optionally, you can clear the form or update the donor list after successful submission.
    } catch (error) {
      console.error('Error submitting donor:', error);
    }
  };

  return (
    <div className="container mx-auto my-8">
      <h1 className="text-3xl font-bold mb-4">Donor Registration</h1>
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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
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
            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
          />
        </div>
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
};

export default DonorForm;
