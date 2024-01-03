// import React from "react"
// import { Link } from "react-router-dom"
// import Navbar from "./Navbar"

// export const Signinpage = () => {
//   return (
//     <div>
//       <Navbar/>
// <section class="py-12">
//     <div class="container mx-auto bg-white p-8 rounded-lg shadow-md">
//         <h2 class="text-3xl font-extrabold text-red-600 mb-6">Sign In to Your Account</h2>
  
//         <form action="#" method="post">
    
//             <div class="mb-4">
//                 <label for="email" class="block text-sm font-medium text-gray-600">Email Address</label>
//                 <input type="email" id="email" name="email" class="mt-1 p-2 w-full border rounded-md"/>
//             </div>

//             <div class="mb-6">
//                 <label for="password" class="block text-sm font-medium text-gray-600">Password</label>
//                 <input type="password" id="password" name="password" class="mt-1 p-2 w-full border rounded-md"/>
//             </div>

         
//             <div class="text-right">
//                 <a href="#" class="text-red-600 hover:underline">Forgot Password?</a>
//             </div>

        
         
//             <div class="mt-6">
//                 <a href="#" id="signinLink" class="w-full bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:border-red-300 transition duration-300">Sign In</a>
//             </div>
         
//         </form>


//         <div class="mt-4 text-center">

//           <p class="text-gray-600">Don't have an account? <Link to="/Signuppage" class="text-red-600 hover:underline">Register now</Link></p>
//         </div>
//     </div>
//     </section>
//     </div>
//   )
// }


// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Navbar from "./Navbar";

// export const Signinpage = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [selectedUserType, setSelectedUserType] = useState("");

//   const handleSignIn = async () => {
//     // Implement your backend logic for authorization here
//     // Use formData.email and formData.password for authentication
//     try {
//       const response = await fetch(`http://localhost:1269/signin?userType=${formData.userType}&email=${formData.email}&password=${formData.password}`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (response.ok) {
//         // Successful authentication
//         console.log("User authenticated successfully");
//         // Redirect to the dashboard or another page
//       } else {
//         // Handle authentication error
//         console.error("Authentication failed");
//         // Show error message to the user
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-12">
//         <div className="container mx-auto">
//           <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
//             <h2 className="text-3xl font-extrabold text-red-600 mb-6">Sign In to Your Account</h2>

//             {/* User Type Selection */}
//             <div className="flex justify-center mb-8">
//               <button
//                 onClick={() => setSelectedUserType("bloodBank")}
//                 className={`mx-4 px-6 py-2 rounded-full ${selectedUserType === "bloodBank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-blue-300 transition duration-300`}
//               >
//                 Blood Bank
//               </button>
//               <button
//                 onClick={() => setSelectedUserType("donor")}
//                 className={`mx-4 px-2  py-2 rounded-full ${selectedUserType === "donor" ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
//               >
//                 Donor/Person in Need
//               </button>
//             </div>

//             {/* Registration Form */}
//             {selectedUserType && (
//               <form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>

//                 <div className="text-right">
//                   <a href="#" className="text-red-600 hover:underline">
//                     Forgot Password?
//                   </a>
//                 </div>

//                 <div className="mt-6">
                 
//                   <button
//                     type="button"
//                     onClick={handleSignIn}
//                     className={`w-full py-2 rounded-full ${selectedUserType === "bloodBank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-red-500 text-white hover:bg-red-600'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
//                     >
//                     Sign In
//                   </button>

//                 </div>
//               </form>
//             )}

//             <div className="mt-4 text-center">
//               <p className="text-gray-600">
//                 Don't have an account? <Link to="/Signuppage" className="text-red-600 hover:underline">Register now</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };








// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";

// import Navbar from "./Navbar";

// export const Signinpage = () => {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });

//   const [selectedUserType, setSelectedUserType] = useState("");
//   const navigate = useNavigate()

//   const handleSignIn = async () => {
//     try {
//       console.log("info sent");
//       const response = await fetch(`http://localhost:1276/signin?userType=${selectedUserType}&email=${formData.email}&password=${formData.password}`, {
//         method: "GET",
//         headers: {
//           "Content-Type": "application/json",
//         }
//       });
//       console.log("info received");
//       if (response.ok) {
//         // Successful authentication
//         console.log("User authenticated successfully");
//         if (selectedUserType==="bloodbank"){navigate("/profile");}
//         else if(selectedUserType==="donor"){navigate("/Donate")}
//         // Redirect to the dashboard or another page
//       } else {
//         // Handle authentication error
//         console.error("Authentication failed");
//         // Show error message to the user
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div>
//       <Navbar />
//       <section className="py-12">
//         <div className="container mx-auto">
//           <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
//             <h2 className="text-3xl font-extrabold text-red-600 mb-6">Sign In to Your Account</h2>

//             {/* User Type Selection */}
//             <div className="flex justify-center mb-8">
//               <button
//                 onClick={() => setSelectedUserType("bloodBank")}
//                 className={`mx-4 px-6 py-2 rounded-full ${selectedUserType === "bloodBank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-blue-300 transition duration-300`}
//               >
//                 Blood Bank
//               </button>
//               <button
//                 onClick={() => setSelectedUserType("donor")}
//                 className={`mx-4 px-2  py-2 rounded-full ${selectedUserType === "donor" ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
//               >
//                 Donor/Person in Need
//               </button>
//             </div>

//             {/* Registration Form */}
//             {selectedUserType && (
//               <form>
//                 <div className="mb-4">
//                   <label htmlFor="email" className="block text-sm font-medium text-gray-600">
//                     Email Address
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     name="email"
//                     value={formData.email}
//                     onChange={(e) => setFormData({ ...formData, email: e.target.value })}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>

//                 <div className="mb-6">
//                   <label htmlFor="password" className="block text-sm font-medium text-gray-600">
//                     Password
//                   </label>
//                   <input
//                     type="password"
//                     id="password"
//                     name="password"
//                     value={formData.password}
//                     onChange={(e) => setFormData({ ...formData, password: e.target.value })}
//                     className="mt-1 p-2 w-full border rounded-md"
//                   />
//                 </div>

//                 <div className="text-right">
//                   <a href="#" className="text-red-600 hover:underline">
//                     Forgot Password?
//                   </a>
//                 </div>

//                 <div className="mt-6">
//                   <button
//                     type="button"
//                     onClick={handleSignIn}
//                     className={`w-full py-2 rounded-full ${selectedUserType === "bloodBank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-red-500 text-white hover:bg-red-600'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
//                   >
//                     Sign In
//                   </button>
//                 </div>
//               </form>
//             )}

//             <div className="mt-4 text-center">
//               <p className="text-gray-600">
//                 Don't have an account? <Link to="/Signuppage" className="text-red-600 hover:underline">Register now</Link>
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };


import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

export const Signinpage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [selectedUserType, setSelectedUserType] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      console.log("info sent");
      const response = await fetch(`http://localhost:1280/signin?userType=${encodeURIComponent(selectedUserType)}&email=${encodeURIComponent(formData.email)}&password=${encodeURIComponent(formData.password)}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        }
      });
      console.log("info received");

      console.log("Response status:", response.status);

      if (response.ok) {
        // Successful authentication
        console.log("User authenticated successfully");
        if (selectedUserType === "bloodbank") {
          navigate("/profile");
        } else if (selectedUserType === "donor") {
          navigate("/Donate");
        }
      } else {
        // Handle authentication error
        console.error("Authentication failed");
        const errorData = await response.json(); // if response contains JSON error message
        console.error("Error data:", errorData);
        // Show error message to the user
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div>
      <Navbar />
      <section className="py-12">
        <div className="container mx-auto">
          <div className="bg-white p-8 rounded-lg shadow-md max-w-md mx-auto">
            <h2 className="text-3xl font-extrabold text-red-600 mb-6">Sign In to Your Account</h2>

            {/* User Type Selection */}
            <div className="flex justify-center mb-8">
              <button
                onClick={() => setSelectedUserType("bloodbank")}
                className={`mx-4 px-6 py-2 rounded-full ${selectedUserType === "bloodbank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-blue-300 transition duration-300`}
              >
                Blood Bank
              </button>
              <button
                onClick={() => setSelectedUserType("donor")}
                className={`mx-4 px-2 py-2 rounded-full ${selectedUserType === "donor" ? 'bg-red-500 text-white hover:bg-red-600' : 'bg-gray-300 text-gray-600 hover:bg-gray-400'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
              >
                Donor/Person in Need
              </button>
            </div>

            {/* Registration Form */}
            {selectedUserType && (
              <form>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="mb-6">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="mt-1 p-2 w-full border rounded-md"
                  />
                </div>

                <div className="text-right">
                  <a href="#" className="text-red-600 hover:underline">
                    Forgot Password?
                  </a>
                </div>

                <div className="mt-6">
                  <button
                    type="button"
                    onClick={handleSignIn}
                    className={`w-full py-2 rounded-full ${selectedUserType === "bloodbank" ? 'bg-blue-500 text-white hover:bg-blue-600' : 'bg-red-500 text-white hover:bg-red-600'} focus:outline-none focus:ring focus:border-red-300 transition duration-300`}
                  >
                    Sign In
                  </button>
                </div>
              </form>
            )}

            <div className="mt-4 text-center">
              <p className="text-gray-600">
                Don't have an account? <Link to="/Signuppage" className="text-red-600 hover:underline">Register now</Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
