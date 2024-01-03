// import React from 'react'
// import Navbar from './Navbar'
// export default function Ask() {
//   return (
//     <div>
//       <Navbar/>
//     </div>
//   )
// }


import React, { useState } from 'react';
import Navbar from './Navbar';

const Donate = () => {
  const [bloodType, setBloodType] = useState('');
  const [location, setLocation] = useState('');
  const [age, setAge] = useState('');
  const [email, setEmail] = useState('');
  const [contactNumber, setContactNumber] = useState('');

  const handleDonateRequest = async () => {
    // Custom logic to handle the donation request, e.g., sending data to your server
    try {
      const requestData = { bloodType, location, age, email, contactNumber };

      // Example: Send donation request to server
      const response = await fetch('http://localhost:1280/donate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });

      if (response.ok) {
        // Handle success, e.g., display a success message to the user
        console.log('Donation request sent successfully');
      } else {
        // Handle error, e.g., display an error message to the user
        console.error('Error sending donation request');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />
      <div className="container mx-auto mt-8">
        <h2 className="text-3xl font-semibold text-red-600 mb-6">Donate Blood</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Blood Type:
            </label>
            <select
              value={bloodType}
              onChange={(e) => setBloodType(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            >
              <option value="" disabled>
                Select Blood Type
              </option>
              <option value={"A%2B"}>A+</option>
         <option value={"A-"}>A-</option>
         <option value={"B%2B"}>B+</option>
         <option value={"O-"}>O-</option>
         <option value={"O%2B"}>O+</option>
         <option value={"B-"}>B-</option>
         <option value={"AB%2B"}>AB+</option>
         <option value={"AB-"}>AB-</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Location:
            </label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">Age:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold text-gray-600 mb-1">
              Contact Number:
            </label>
            <input
              type="tel"
              value={contactNumber}
              onChange={(e) => setContactNumber(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
          <button
            type="button"
            onClick={handleDonateRequest}
            className="bg-red-600 text-white px-4 py-2 rounded-md"
          >
            Submit Donation Request
          </button>
        </form>
      </div>
    </>
  );
};

export default Donate;

