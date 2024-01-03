// import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";
// export const Signuppage = () => {
//   return (
//     <div>
// <Navbar/>
// <section class="py-12">
//     <div class="container mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 class="text-3xl font-extrabold text-red-600 mb-6">Register as a Blood Donor</h2>
     
//         <form action="#" method="post" class="grid grid-cols-1 md:grid-cols-2 gap-8">
           
//             <div>
//                 <label for="fullName" class="block text-sm font-medium text-gray-600">Full Name</label>
//                 <input type="text" id="fullName" name="fullName" class="mt-1 p-2 w-full border rounded-md"/>
                
//                 <label for="email" class="block mt-4 text-sm font-medium text-gray-600">Email Address</label>
//                 <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md"/>

//                 <label for="password" class="block mt-4 text-sm font-medium text-gray-600">Password</label>
//                 <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md"/>

//                 <label for="confirmPassword" class="block mt-4 text-sm font-medium text-gray-600">Confirm Password</label>
//                 <input type="password" id="confirmPassword" name="confirmPassword" class="mt-1 p-2 w-full border rounded-md"/>

          
//                 <label for="userType" class="block mt-4 text-sm font-medium text-gray-600">I am a...</label>
//                 <select id="userType" name="userType" class="mt-1 p-2 w-full border rounded-md">
//                     <option value="bloodBank">Blood Bank</option>
//                     <option value="donor">Donor</option>
//                     <option value="personInNeed">Person in Need</option>
//                 </select>
//             </div>

//             <div>
               
//             </div>

           

//             <div class="col-span-2">
//                 <button type="submit" class="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300">Register</button>
//             </div>
//         </form>

   
//         <div class="mt-4 text-center">
//             <p class="text-gray-600">Already have an account? <Link to="/Signinpage" class="text-red-600 hover:underline">Sign in</Link></p>
//         </div>
//     </div>
// </section>

// <footer class="bg-gray-900 text-white py-8">
//     <div class="container mx-auto text-center">
//         <p class="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
//     </div>
// </footer>
//     </div>
//   )
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// export const Signuppage = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//     userType: "bloodBank", // Default user type
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data
//     if (!formData.fullName || !formData.email || !formData.password || !formData.confirmPassword) {
//       // Handle incomplete form data, show a warning to the user
//       alert("Please fill in all fields.");
//       return;
//     }

//     // TODO: Implement logic to send data to the server and handle database insertion
//     try {
//       const response = await fetch("http://your-api-endpoint/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Successful registration
//         console.log("User registered successfully");
//       } else {
//         // Handle registration error
//         console.error("Error registering user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-12">
//         <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-extrabold text-red-600 mb-6">Register as a Blood Donor</h2>

//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="confirmPassword" className="block mt-4 text-sm font-medium text-gray-600">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                 id="confirmPassword"
//                 name="confirmPassword"
//                 value={formData.confirmPassword}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="userType" className="block mt-4 text-sm font-medium text-gray-600">
//                 I am a...
//               </label>
//               <select
//                 id="userType"
//                 name="userType"
//                 value={formData.userType}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               >
//                 <option value="bloodBank">Blood Bank</option>
//                 <option value="donor">Donor</option>
//                 <option value="personInNeed">Person in Need</option>
//               </select>
//             </div>

//             <div>{/* Add additional input fields here if needed */}</div>

//             <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
//               >
//                 Register
//               </button>
//             </div>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-gray-600">
//               Already have an account? <Link to="/Signinpage" className="text-red-600 hover:underline">Sign in</Link>
//             </p>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };

// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// export const Signuppage = () => {
//   const [formData, setFormData] = useState({
//     userType: "", // Default user type
//     // Common fields
//     fullName: "",
//     email: "",
//     username: "",
//     password: "",
//     // Blood Bank specific fields
//     location: "",
//     contactNumber: "",
//     // Donor specific fields
//     firstName: "",
//     lastName: "",
//     gender: "",
//     dateOfBirth: "",
//     bloodType: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data based on selected user type
//     if (formData.userType === "bloodBank" && (!formData.fullName || !formData.location || !formData.contactNumber)) {
//       alert("Please fill in all Blood Bank fields.");
//       return;
//     }

//     if (formData.userType === "donor" && (!formData.firstName || !formData.lastName || !formData.gender || !formData.dateOfBirth || !formData.bloodType)) {
//       alert("Please fill in all Donor fields.");
//       return;
//     }

//     // TODO: Implement logic to send data to the server and handle database insertion
//     try {
//       const response = await fetch("http://your-api-endpoint/signup", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Successful registration
//         console.log("User registered successfully");
//       } else {
//         // Handle registration error
//         console.error("Error registering user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-12">
//         <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-extrabold text-red-600 mb-6">Register as a Blood Donor</h2>

//           {/* User Type Selection */}
//           <div className="flex justify-center mb-8">
//             <button onClick={() => setFormData({ ...formData, userType: "bloodBank" })} className="mx-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300">
//               Blood Bank
//             </button>
//             <button onClick={() => setFormData({ ...formData, userType: "donor" })} className="mx-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300">
//               Donor/Person in Need
//             </button>
//           </div>

//           {/* Registration Form */}
//           <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             {/* Common Fields */}
//             <div>
//               <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
//                 Full Name
//               </label>
//               <input
//                 type="text"
//                 id="fullName"
//                 name="fullName"
//                 value={formData.fullName}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
//                 Email Address
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="username" className="block mt-4 text-sm font-medium text-gray-600">
//                 Username
//               </label>
//               <input
//                 type="text"
//                 id="username"
//                 name="username"
//                 value={formData.username}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />

//               <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 className="mt-1 p-2 w-full border rounded-md"
//               />
//             </div>

//             {/* Blood Bank Specific Fields */}
//             {formData.userType === "bloodBank" && (
//               <div>
//                 <label htmlFor="location" className="block text-sm font-medium text-gray-600">
//                   Location
//                 </label>
//                 <input
//                   type="text"
//                   id="location"
//                   name="location"
//                   value={formData.location}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="contactNumber" className="block mt-4 text-sm font-medium text-gray-600">
//                   Contact Number
//                 </label>
//                 <input
//                   type="text"
//                   id="contactNumber"
//                   name="contactNumber"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//             )}

//             {/* Donor Specific Fields */}
//             {formData.userType === "donor" && (
//               <div>
//                 <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
//                   First Name
//                 </label>
//                 <input
//                   type="text"
//                   id="firstName"
//                   name="firstName"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="lastName" className="block mt-4 text-sm font-medium text-gray-600">
//                   Last Name
//                 </label>
//                 <input
//                   type="text"
//                   id="lastName"
//                   name="lastName"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="gender" className="block mt-4 text-sm font-medium text-gray-600">
//                   Gender
//                 </label>
//                 <input
//                   type="text"
//                   id="gender"
//                   name="gender"
//                   value={formData.gender}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="dateOfBirth" className="block mt-4 text-sm font-medium text-gray-600">
//                   Date of Birth
//                 </label>
//                 <input
//                   type="date"
//                   id="dateOfBirth"
//                   name="dateOfBirth"
//                   value={formData.dateOfBirth}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="bloodType" className="block mt-4 text-sm font-medium text-gray-600">
//                   Blood Type
//                 </label>
//                 <input
//                   type="text"
//                   id="bloodType"
//                   name="bloodType"
//                   value={formData.bloodType}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>
//             )}

//             <div className="col-span-2">
//               <button
//                 type="submit"
//                 className="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
//               >
//                 Register
//               </button>
//             </div>
//           </form>

//           <div className="mt-4 text-center">
//             <p className="text-gray-600">
//               Already have an account? <Link to="/Signinpage" className="text-red-600 hover:underline">Sign in</Link>
//             </p>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };




// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// export const Signuppage = () => {
//   const [formData, setFormData] = useState({
//     userType: "", // Default user type
//     fullName: "",
//     email: "",
//     username: "",
//     password: "",
//     location: "",
//     contactNumber: "",
//     firstName: "",
//     lastName: "",
//     gender: "",
//     dateOfBirth: "",
//     bloodType: "",
//   });

//   const [formVisible, setFormVisible] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Validate form data based on selected user type
//     if (formData.userType === "bloodBank" && (!formData.fullName || !formData.location || !formData.contactNumber)) {
//       alert("Please fill in all Blood Bank fields.");
//       return;
//     }

//     if (formData.userType === "donor" && (!formData.firstName || !formData.lastName || !formData.gender || !formData.dateOfBirth || !formData.bloodType)) {
//       alert("Please fill in all Donor fields.");
//       return;
//     }

//     // TODO: Implement logic to send data to the server and handle database insertion
//     try {
//       let response = await fetch(`http://localhost:1259/signup?userType=${formData.userType}&email=${formData.email}&password=${formData.password}&fullName=${formData.fullName}&username=${formData.username}&location=${formData.location}&contactNumber=${formData.contactNumber}&firstName=${formData.firstName}&lastName=${formData.lastName}&gender=${formData.gender}&dateOfBirth=${formData.dateOfBirth}&bloodType=${formData.bloodType}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData)  ,
//       });

//       if (response.ok) {
//         // Successful registration
//         console.log("User registered successfully");
//       } else {
//         // Handle registration error
//         console.error("Error registering user");
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-12">
//         <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
//           <h2 className="text-3xl font-extrabold text-red-600 mb-6">Register as a Blood Donor</h2>

//           {/* User Type Selection */}
//           <div className="flex justify-center mb-8">
//             <button
//               onClick={() => {
//                 setFormData({ ...formData, userType: "bloodBank" });
//                 setFormVisible(true);
//               }}
//               className="mx-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
//             >
//               Blood Bank
//             </button>
//             <button
//               onClick={() => {
//                 setFormData({ ...formData, userType: "donor" });
//                 setFormVisible(true);
//               }}
//               className="mx-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
//             >
//               Donor/Person in Need
//             </button>
//           </div>

//           {/* Registration Form */}
//           {formData.userType && (
//             <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${formVisible ? 'fade-in' : 'hidden'}`}>
//               {/* Common Fields */}
//               <div>
//                 <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
//                   Full Name
//                 </label>
//                 <input
//                   type="text"
//                   id="fullName"
//                   name="fullName"
//                   value={formData.fullName}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
//                   Email Address
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   name="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="username" className="block mt-4 text-sm font-medium text-gray-600">
//                   Username
//                 </label>
//                 <input
//                   type="text"
//                   id="username"
//                   name="username"
//                   value={formData.username}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />

//                 <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
//                   Password
//                 </label>
//                 <input
//                   type="password"
//                   id="password"
//                   name="password"
//                   value={formData.password}
//                   onChange={handleChange}
//                   className="mt-1 p-2 w-full border rounded-md"
//                 />
//               </div>

//               {/* Blood Bank Specific Fields */}
//               {formData.userType === "bloodBank" && (
//                 <div>
//                   <label htmlFor="location" className="block text-sm font-medium text-gray-600">
//                     Location
//                   </label>
//                   <input
//                     type="text"
//                     id="location"
//                     name="location"
//                     value={formData.location}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />

//                   <label htmlFor="contactNumber" className="block mt-4 text-sm font-medium text-gray-600">
//                     Contact Number
//                   </label>
//                   <input
//                     type="text"
//                     id="contactNumber"
//                     name="contactNumber"
//                     value={formData.contactNumber}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>
//               )}

//               {/* Donor Specific Fields */}
//               {formData.userType === "donor" && (
//                 <div>
//                   <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
//                     First Name
//                   </label>
//                   <input
//                     type="text"
//                     id="firstName"
//                     name="firstName"
//                     value={formData.firstName}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />

//                   <label htmlFor="lastName" className="block mt-4 text-sm font-medium text-gray-600">
//                     Last Name
//                   </label>
//                   <input
//                     type="text"
//                     id="lastName"
//                     name="lastName"
//                     value={formData.lastName}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />

//                   <label htmlFor="gender" className="block mt-4 text-sm font-medium text-gray-600">
//                     Gender
//                   </label>
//                   <input
//                     type="text"
//                     id="gender"
//                     name="gender"
//                     value={formData.gender}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />

//                   <label htmlFor="dateOfBirth" className="block mt-4 text-sm font-medium text-gray-600">
//                     Date of Birth
//                   </label>
//                   <input
//                     type="date"
//                     id="dateOfBirth"
//                     name="dateOfBirth"
//                     value={formData.dateOfBirth}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />

//                   <label htmlFor="bloodType" className="block mt-4 text-sm font-medium text-gray-600">
//                     Blood Type
//                   </label>
//                   <input
//                     type="text"
//                     id="bloodType"
//                     name="bloodType"
//                     value={formData.bloodType}
//                     onChange={handleChange}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>
//               )}

//               <div className="col-span-2">
//                 <button
//                   type="submit"
//                   className="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
//                 >
//                   Register
//                 </button>
//               </div>
//             </form>
//           )}

//           {!formVisible && (
//             <p className="text-gray-600 text-center">Please select an option to register</p>
//           )}

//           <div className="mt-4 text-center">
//             <p className="text-gray-600">
//               Already have an account? <Link to="/Signinpage" className="text-red-600 hover:underline">Sign in</Link>
//             </p>
//           </div>
//         </div>
//       </section>

//       <footer className="bg-gray-900 text-white py-8">
//         <div className="container mx-auto text-center">
//           <p className="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   );
// };




import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

export const Signuppage = () => {
  const [formData, setFormData] = useState({
    userType: "", // Default user type
    fullName: "",
    email: "",
    username: "",
    password: "",
    location: "",
    contactNumber: "",
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    bloodType: "",
  });

  const [formVisible, setFormVisible] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false); // New state variable

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data based on selected user type
    if (formData.userType === "bloodBank" && (!formData.fullName || !formData.location || !formData.contactNumber)) {
      alert("Please fill in all Blood Bank fields.");
      return;
    }

    if (formData.userType === "donor" && (!formData.gender || !formData.dateOfBirth || !formData.bloodType)) {
      alert("Please fill in all Donor fields.");
      return;
    }

    // TODO: Implement logic to send data to the server and handle database insertion
    try {
      let response = await fetch(`http://localhost:1280/signup?userType=${formData.userType}&email=${formData.email}&password=${formData.password}&fullName=${formData.fullName}&username=${formData.username}&location=${formData.location}&contactNumber=${formData.contactNumber}&firstName=${formData.firstName}&lastName=${formData.lastName}&gender=${formData.gender}&dateOfBirth=${formData.dateOfBirth}&bloodType=${formData.bloodType}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Successful registration
        console.log("User registered successfully");
        setRegistrationSuccess(true);
        // Clear form fields
        setFormData({
          userType: "",
          fullName: "",
          email: "",
          username: "",
          password: "",
          location: "",
          contactNumber: "",
          firstName: "",
          lastName: "",
          gender: "",
          dateOfBirth: "",
          bloodType: "",
        });
      } else {
        // Handle registration error
        console.error("Error registering user");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="py-12">
        <div className="container mx-auto bg-white p-8 rounded-lg shadow-md">
          {registrationSuccess ? (
            <div className="text-center text-green-600">
              <p>Registration successful! Thank you for signing up.</p>
            </div>
          ) : (
            <>
              <h2 className="text-3xl font-extrabold text-red-600 mb-6">Register as a Blood Donor</h2>

              {/* User Type Selection */}
              <div className="flex justify-center mb-8">
                <button
                  onClick={() => {
                    setFormData({ ...formData, userType: "bloodBank" });
                    setFormVisible(true);
                  }}
                  className="mx-4 px-6 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300 transition duration-300"
                >
                  Blood Bank
                </button>
                <button
                  onClick={() => {
                    setFormData({ ...formData, userType: "donor" });
                    setFormVisible(true);
                  }}
                  className="mx-4 px-6 py-2 bg-red-500 text-white rounded-full hover:bg-red-600 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
                >
                  Donor/Person in Need
                </button>
              </div>

              {/* Registration Form */}
              {formData.userType && (
                <form onSubmit={handleSubmit} className={`grid grid-cols-1 md:grid-cols-2 gap-8 ${formVisible ? 'fade-in' : 'hidden'}`}>
                  {/* Common Fields */}
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-600">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />

                    <label htmlFor="email" className="block mt-4 text-sm font-medium text-gray-600">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />

                    {/* <label htmlFor="username" className="block mt-4 text-sm font-medium text-gray-600">
                      Username
                    </label>
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    /> */}

                    <label htmlFor="password" className="block mt-4 text-sm font-medium text-gray-600">
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="mt-1 p-2 w-full border rounded-md"
                    />
                  </div>

                  {/* Blood Bank Specific Fields */}
                  {formData.userType === "bloodBank" && (
                    <div>
                      <label htmlFor="location" className="block text-sm font-medium text-gray-600">
                        Location
                      </label>
                      <input
                        type="text"
                        id="location"
                        name="location"
                        value={formData.location}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      />

                      <label htmlFor="contactNumber" className="block mt-4 text-sm font-medium text-gray-600">
                        Contact Number
                      </label>
                      <input
                        type="text"
                        id="contactNumber"
                        name="contactNumber"
                        value={formData.contactNumber}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                  )}

                  {/* Donor Specific Fields */}
                  {formData.userType === "donor" && (
                    <div>
                      {/* <label htmlFor="firstName" className="block text-sm font-medium text-gray-600">
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      /> */}

                      {/* <label htmlFor="lastName" className="block mt-4 text-sm font-medium text-gray-600">
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      /> */}

                      <label htmlFor="gender" className="block mt-4 text-sm font-medium text-gray-600">
                        Gender
                      </label>
                      <input
                        type="text"
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      />

                      <label htmlFor="dateOfBirth" className="block mt-4 text-sm font-medium text-gray-600">
                        Date of Birth
                      </label>
                      <input
                        type="date"
                        id="dateOfBirth"
                        name="dateOfBirth"
                        value={formData.dateOfBirth}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      />

                      <label htmlFor="bloodType" className="block mt-4 text-sm font-medium text-gray-600">
                        Blood Type
                      </label>
                      <input
                        type="text"
                        id="bloodType"
                        name="bloodType"
                        value={formData.bloodType}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                      />
                    </div>
                  )}

                  <div className="col-span-2">
                    <button
                      type="submit"
                      className="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300"
                    >
                      Register
                    </button>
                  </div>
                </form>
              )}

              <div className="mt-4 text-center">
                <p className="text-gray-600">
                  Already have an account? <Link to="/Signinpage" className="text-red-600 hover:underline">Sign in</Link>
                </p>
              </div>
            </>
          )}

        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};
