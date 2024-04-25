import React from 'react'
    
export default function Navbar() {
  return (
    <>
    <div>
            <header class="py-4 bg-gradient-to-r from-red-600 to-red-900 shadow-md">
                <div class="container mx-auto flex justify-between items-center">

                    <div>
                        <img src="logo2.png" alt="Blood Donation System" class="h-12" />
                    </div>


                    <nav class="hidden md:flex space-x-4">
                        <Link to="/home" class="text-white hover:text-gray-300 transition duration-300 ease-in-out">Home</Link>
                        <a href="#" class="text-white hover:text-gray-300 transition duration-300 ease-in-out">About Us</a>
                        <a href="#" class="text-white hover:text-gray-300 transition duration-300 ease-in-out">Services</a>
                        <a href="#" class="text-white hover:text-gray-300 transition duration-300 ease-in-out">Donate</a>
                        <a href="#" class="text-white hover:text-gray-300 transition3,'' duration-300 ease-in-out">Contact Us</a>
                    </nav>


                    <div class="flex space-x-4">
                   
                    <div>
                            <Link to="/Donate"
                                class="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">Request Now</Link>
                        </div>

                        <div>
                            <Link to="/Ask"
                                class="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">Donate now</Link>
                        </div>
                        {/* <div>
                            <Link to="/Signinpage"
                                class="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">Sign
                                in</Link>
                        </div>
                        <div>
                            <Link to="/Signuppage"
                                class="bg-white text-red-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition duration-300 ease-in-out">Sign
                                up</Link>
                        </div> */}
                    </div>
                </div>
            </header>
        </div>

    </>
    
  )
}
