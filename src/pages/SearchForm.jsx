// // src/components/SearchForm.js
// import React, { useState } from 'react';

// const SearchForm = ({ onSearch }) => {
//   const [bloodGroup, setBloodGroup] = useState('');
//   const [location, setLocation] = useState('');
//   const [pintsOfBlood, setPintsOfBlood] = useState('');

//   const handleSearch = () => {
//     // Perform search based on the selected values
//     const searchData = {
//       bloodGroup,
//       location,
//       pintsOfBlood,
//     };
//     onSearch(searchData);
//   };

//   return (
//     <div className="max-w-md mx-auto mt-8 p-4 bg-white rounded shadow-md">
//       <h2 className="text-2xl font-bold mb-4">Blood Donation Search</h2>
//       <div className="mb-4">
//         <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">
//           Blood Group
//         </label>
//         <select
//           id="bloodGroup"
//           name="bloodGroup"
//           className="mt-1 p-2 border rounded w-full"
//           onChange={(e) => setBloodGroup(e.target.value)}
//           value={bloodGroup}
//         >
//           <option value="">Select Blood Group</option>
//           <option value="A+">A+</option>
//           <option value="A-">A-</option>
//           <option value="B+">B+</option>
//           <option value="B-">B-</option>
//           <option value="O+">O+</option>
//           <option value="O-">O-</option>
//           <option value="AB+">AB+</option>
//           <option value="AB-">AB-</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="location" className="block text-sm font-medium text-gray-600">
//           Location
//         </label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           className="mt-1 p-2 border rounded w-full"
//           placeholder="Enter Location"
//           onChange={(e) => setLocation(e.target.value)}
//           value={location}
//         />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="pintsOfBlood" className="block text-sm font-medium text-gray-600">
//           Pints of Blood
//         </label>
//         <input
//           type="number"
//           id="pintsOfBlood"
//           name="pintsOfBlood"
//           className="mt-1 p-2 border rounded w-full"
//           placeholder="Enter Pints of Blood"
//           onChange={(e) => setPintsOfBlood(e.target.value)}
//           value={pintsOfBlood}
//         />
//       </div>
//       <button
//         className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
//         onClick={handleSearch}
//       >
//         Search
//       </button>
//     </div>
//   );
// };

// export default SearchForm;








// import React, { useEffect, useState } from 'react';

// const SearchForm = ({ onSearch }) => {

//   const [bloodGroup, setBloodGroup] = useState('');
//   const [location, setLocation] = useState('');
//   const [pintsOfBlood, setPintsOfBlood] = useState('');

//   const handleSearch = () => {
//     // Perform search based on the selected values
//     const searchData = {
//       bloodGroup,
//       location,
//       pintsOfBlood,
//     };
//     onSearch(searchData);
//   };

//   return (
//     <>
//     <div className="max-w flex gap-9 justify-center mx-auto mt-8 p-4 bg-gray-200  rounded-xl shadow-lg animate-fade-in">
//       {/* <h2 className="text-2xl font-extrabold mb-4 text-red-400">Blood Donation Search</h2> */}
//       <div className="mb-4">
//         <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">
//           Blood Group
//         </label>
//         <select
//           id="bloodGroup"
//           name="bloodGroup"
//           className="mt-1 p-2 border rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           onChange={(e) => setBloodGroup(e.target.value)}
//           value={bloodGroup}
//           >
//           <option value="">Select Blood Group</option>
//           <option value={"A%2B"}>A+</option>
//           <option value={"A-"}>A-</option>
//           <option value={"B%2B"}>B+</option>
//           <option value={"B-"}>B-</option>
//           <option value={"O%2B"}>O+</option>
//           <option value={"O-"}>O-</option>
//           <option value={"AB%2B"}>AB+</option>
//           <option value={"AB-"}>AB-</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="location" className="block text-sm font-medium text-gray-600">
//           Location
//         </label>
//         <input
//           type="text"
//           id="location"
//           name="location"
//           className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           placeholder="Enter Location"
//           onChange={(e) => setLocation(e.target.value)}
//           value={location}
//           />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="pintsOfBlood" className="block text-sm font-medium text-gray-600">
//           Pints of Blood
//         </label>
//         <input
//           type="number"
//           id="pintsOfBlood"
//           name="pintsOfBlood"
//           className="mt-1 p-2 border rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//           placeholder="Enter Pints of Blood"
//           onChange={(e) => setPintsOfBlood(e.target.value)}
//           value={pintsOfBlood}
//           />
//       </div>
//       <button
//         className="bg-[#d6804b] text-white p-2 px-4 mt-5 h-12 rounded hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105"
//         onClick={handleSearch}
//         >
//         Search
//       </button>
//     </div>
//     {/* <div className='flex flex-col gap-2'>
//         {array.map(e => <p className='text-black'>{e}</p>)}
//     </div> */}
//           </>
//   );
// };

// export default SearchForm;



import React, { useState, useEffect } from 'react';

const SearchForm = ({ onSearch }) => {
  const [bloodGroup, setBloodGroup] = useState('');
  const [location, setLocation] = useState('');
  const [pintsOfBlood, setPintsOfBlood] = useState('');

  useEffect(() => {
    // Perform search based on the selected values whenever the form fields are updated
    const searchData = {
      bloodGroup,
      location,
      pintsOfBlood,
    };
    onSearch(searchData);
  }, [bloodGroup, location, pintsOfBlood, onSearch]);

  return (
    <div className="max-w flex gap-9 justify-center mx-auto mt-8 p-4 bg-gray-200  rounded-xl shadow-lg animate-fade-in">
      <h2 className="text-3xl text-red-700 font-bold pt-6 mb-4">Blood Donation Search</h2>
      <div className="mb-4">
        <label htmlFor="bloodGroup" className="block text-sm font-medium text-gray-600">
          Blood Group
        </label>
        <select
          id="bloodGroup"
          name="bloodGroup"
          className="mt-1 p-2 border rounded w-full"
          onChange={(e) => setBloodGroup(e.target.value)}
          value={bloodGroup}
        >
          <option value="">Select Blood Group</option>
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
        <label htmlFor="location" className="block text-sm font-medium text-gray-600">
          Location
        </label>
        <input
          type="text"
          id="location"
          name="location"
          className="mt-1 p-2 border rounded w-full"
          placeholder="Enter Location"
          onChange={(e) => setLocation(e.target.value)}
          value={location}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="pintsOfBlood" className="block text-sm font-medium text-gray-600">
          Pints of Blood
        </label>
        <input
          type="number"
          id="pintsOfBlood"
          name="pintsOfBlood"
          className="mt-1 p-2 border rounded w-full"
          placeholder="Enter Pints of Blood"
          onChange={(e) => setPintsOfBlood(e.target.value)}
          value={pintsOfBlood}
        />
      </div>
      {/* Remove the Search button, as the search is now executed in real-time */}
    </div>
  );
};

export default SearchForm;
