import React from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Pricing from './components/Pricing';

const Home = () => {
  return (
    <div>
      <Head>
        <title>Email Outreach</title>
      </Head>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-500 to-purple-600 text-white py-20 min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Elevate Your Email Outreach</h1>
            <p className="text-xl md:text-2xl mb-16">
              Streamline your email campaigns, engage your audience, and drive results with our powerful email outreach platform.
            </p>
            <a href="#" className="bg-white text-blue-600 font-semibold py-4 px-32 rounded-full shadow-md hover:bg-gray-100">
              Get Started
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <i className="fas fa-envelope text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Intuitive Campaign Creation</h3>
              <p className="text-gray-600">Easily create and customize email campaigns with our user-friendly campaign builder.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <i className="fas fa-users text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Advanced Contact Management</h3>
              <p className="text-gray-600">Efficiently manage your contacts, create segments, and personalize your outreach.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <i className="fas fa-chart-line text-4xl text-blue-600 mb-4"></i>
              <h3 className="text-xl font-semibold mb-2">Real-time Analytics</h3>
              <p className="text-gray-600">Gain valuable insights into your campaign performance with comprehensive reporting and analytics.</p>
            </div>
          </div>
        </div>
      </section>





      {/* Testimonials Section */}
      <section className="bg-gray-100 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">"Email Outreach has revolutionized the way we connect with our audience. The platform is intuitive, and the results speak for themselves."</p>
              <div className="flex items-center justify-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://example.com/avatar1.jpg" alt="Customer Avatar" />
                <div>
                  <p className="font-semibold">John Doe</p>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">"The advanced segmentation features have allowed us to target our campaigns effectively, resulting in higher engagement rates."</p>
              <div className="flex items-center justify-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://example.com/avatar2.jpg" alt="Customer Avatar" />
                <div>
                  <p className="font-semibold">Jane Smith</p>
                  <p className="text-gray-600">Sales Director</p>
                </div>
              </div>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 text-center">
              <p className="text-gray-600 mb-4">"Email Outreach has saved us countless hours and helped us streamline our email campaigns. It's a game-changer!"</p>
              <div className="flex items-center justify-center">
                <img className="w-12 h-12 rounded-full mr-4" src="https://example.com/avatar3.jpg" alt="Customer Avatar" />
                <div>
                  <p className="font-semibold">Michael Johnson</p>
                  <p className="text-gray-600">Entrepreneur</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <Pricing />

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Email Outreach?</h2>
            <p className="text-xl mb-8">Start your journey today and experience the power of effective email outreach.</p>
            <a href="#" className="bg-white text-blue-600 font-semibold py-3 px-8 rounded-full shadow-md hover:bg-gray-100">Get Started Now</a>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">From Our Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Email Marketing Tips</h3>
              <p className="text-gray-600 mb-4">Learn the best practices for creating effective email campaigns that drive engagement and conversions.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read More</a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Case Studies</h3>
              <p className="text-gray-600 mb-4">See how our clients have successfully used our platform to achieve their marketing goals.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read More</a>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Industry Insights</h3>
              <p className="text-gray-600 mb-4">Stay up-to-date with the latest trends and developments in the email marketing industry.</p>
              <a href="#" className="text-blue-600 hover:text-blue-700 font-medium">Read More</a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Email Outreach. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
