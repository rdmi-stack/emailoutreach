import React, { useState } from 'react';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const toggleBillingCycle = () => {
    setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly');
  };

  return (
    <section className="py-20 bg-gradient-to-r from-gray-50 to-gray-100" id="pricing">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-800">Pricing Plans</h2>
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-full shadow-md flex items-center">
            <button
              onClick={toggleBillingCycle}
              className={`py-2 px-6 rounded-full transition-colors duration-300 ${billingCycle === 'monthly' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600'} focus:outline-none`}
            >
              Monthly
            </button>
            <button
              onClick={toggleBillingCycle}
              className={`py-2 px-6 rounded-full transition-colors duration-300 ${billingCycle === 'yearly' ? 'bg-blue-600 text-white' : 'bg-transparent text-gray-600'} focus:outline-none`}
            >
              Yearly
            </button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 md:w-10/12 mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Basic Plan</h3>
            <p className="text-gray-800 text-3xl font-bold mb-4">
              {billingCycle === 'monthly' ? '$39/month' : '$290/year'}
            </p>
            <ul className="text-gray-600 mb-8">
              <li className="mb-2">100 Emails</li>
              <li className="mb-2">Basic Support</li>
              <li className="mb-2">Analytics</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-shadow duration-300">
              Choose Plan
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center relative transition-transform transform hover:scale-105 md:w-10/12 mx-auto">
            <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white text-xs font-semibold px-2 py-1 rounded-full">Most Popular</div>
            <h3 className="text-2xl font-semibold mb-4">Pro Plan</h3>
            <p className="text-gray-800 text-3xl font-bold mb-4">
              {billingCycle === 'monthly' ? '$99/month' : '$990/year'}
            </p>
            <ul className="text-gray-600 mb-8">
              <li className="mb-2">500 Emails</li>
              <li className="mb-2">Priority Support</li>
              <li className="mb-2">Advanced Analytics</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-shadow duration-300">
              Choose Plan
            </button>
          </div>
          <div className="bg-white shadow-lg rounded-lg p-8 text-center transition-transform transform hover:scale-105 md:w-10/12 mx-auto">
            <h3 className="text-2xl font-semibold mb-4">Enterprise Plan</h3>
            <p className="text-gray-800 text-3xl font-bold mb-4">
              {billingCycle === 'monthly' ? '$199/month' : '$1990/year'}
            </p>
            <ul className="text-gray-600 mb-8">
              <li className="mb-2">Unlimited Emails</li>
              <li className="mb-2">Dedicated Support</li>
              <li className="mb-2">Custom Analytics</li>
            </ul>
            <button className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-medium py-3 px-6 rounded-full focus:outline-none focus:shadow-outline transition-shadow duration-300">
              Choose Plan
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
