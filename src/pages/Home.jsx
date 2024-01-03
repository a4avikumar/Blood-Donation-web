import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Navbar />
      <section
        className="hero bg-cover bg-center relative"
        style={{ backgroundImage: 'url("2.jpg")' }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="container mx-auto text-center relative z-10 text-white py-20">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
            Saving Lives Through Blood Donation
          </h1>
          <p className="text-lg md:text-xl mb-8">
            Join us in making a difference. Your donation can save a life.
          </p>
          <Link
            to={'/Ask'}
            className="bg-white text-red-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition duration-300"
          >
            Donate Now
          </Link>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">About Us</h2>

          <p className="text-gray-700 leading-relaxed mb-8">
            At Blood Donation System, our mission is to connect donors with those in need. We are
            committed to ensuring a safe and efficient process of blood donation, saving lives and
            making a positive impact in our community.
          </p>

          <div className="flex flex-wrap items-center justify-center space-y-4 md:space-y-0 md:space-x-4">
            <div className="w-full md:w-1/3 px-4 mb-4">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Compassion</h3>
              <p className="text-gray-700">
                We approach our work with empathy and understanding, valuing every donor and
                recipient.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Integrity</h3>
              <p className="text-gray-700">
                We uphold the highest standards of integrity in all our interactions and
                operations.
              </p>
            </div>
            <div className="w-full md:w-1/3 px-4 mb-4">
              <h3 className="text-xl font-semibold text-red-600 mb-2">Collaboration</h3>
              <p className="text-gray-700">
                We believe in the power of collaboration to achieve our mission and goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">Our Services</h2>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Blood Donation Events</h3>
            <p className="text-gray-700 leading-relaxed">
              Join us in our upcoming blood donation events. Check out the schedule and locations to
              find a convenient time and place to make your donation.
            </p>
          </div>

          <div className="mb-8">
            <h3 className="text-2xl font-semibold text-red-600 mb-4">Donor Registration</h3>
            <p className="text-gray-700 leading-relaxed">
              Register as a blood donor and become a part of our life-saving community. Your
              registration helps us connect donors with those in need more efficiently.
            </p>
          </div>

          <a
            href="#"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold mt-10 hover:bg-red-700 transition duration-300"
          >
            Get Involved
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">How It Works</h2>

          <div className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-600 text-white rounded-full p-4">
                  <span className="text-2xl font-semibold">1</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">Registration</h3>
              <p className="text-gray-700">
                Create an account and complete the registration process to become a blood donor.
              </p>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-600 text-white rounded-full p-4">
                  <span className="text-2xl font-semibold">2</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">Find Events</h3>
              <p className="text-gray-700">
                Explore upcoming blood donation events in your area and choose a convenient location.
              </p>
            </div>

            <div className="w-full md:w-1/3">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-red-600 text-white rounded-full p-4">
                  <span className="text-2xl font-semibold">3</span>
                </div>
              </div>
              <h3 className="text-xl font-semibold text-red-600 mb-2">Donate Blood</h3>
              <p className="text-gray-700">
                Visit the selected event, complete the donation process, and contribute to saving
                lives.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">Statistics</h2>

          <div className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3">
              <p className="text-4xl font-extrabold text-red-600">5,000+</p>
              <p className="text-gray-700">Lives Saved</p>
            </div>

            <div className="w-full md:w-1/3">
              <p className="text-4xl font-extrabold text-red-600">20,000+</p>
              <p className="text-gray-700">Units Collected</p>
            </div>

            <div className="w-full md:w-1/3">
              <p className="text-4xl font-extrabold text-red-600">10,000+</p>
              <p className="text-gray-700">Donors Engaged</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">Testimonials</h2>

          <div className="flex flex-wrap items-center justify-center space-y-8 md:space-y-0 md:space-x-8">
            <div className="w-full md:w-1/3 bg-gray-200 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-4">
                "The donation process was smooth, and the staff made me feel comfortable. I'm proud
                to be a part of this community."
              </p>
              <p className="text-gray-600">- Jane Doe</p>
            </div>

            <div className="w-full md:w-1/3 bg-gray-200 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-4">
                "Knowing that my donation can save lives motivates me to contribute regularly. It's a
                rewarding experience."
              </p>
              <p className="text-gray-600">- John Smith</p>
            </div>

            <div className="w-full md:w-1/3 bg-gray-200 p-6 rounded-lg mb-4">
              <p className="text-gray-700 mb-4">
                "I appreciate the organization's transparency and the positive impact it has on the
                community. Keep up the great work!"
              </p>
              <p className="text-gray-600">- Sarah Johnson</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">Get Involved Today</h2>

          <a
            href="#"
            className="bg-red-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-red-700 transition duration-300"
          >
            Donate Now
          </a>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">Contact Us</h2>

          <p className="text-gray-700 mb-4">Have questions or concerns? Reach out to us!</p>
          <p className="text-gray-700 mb-4">Email: info@blooddonationsystem.org</p>
          <p className="text-gray-700">Phone: (555) 123-4567</p>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">© 2023 Blood Donation System. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Home;
