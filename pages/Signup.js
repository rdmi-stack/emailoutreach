import React from 'react';

const Signup = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <h1 className="mb-8 text-3xl font-bold text-black">Email Outreach</h1>
      <div className="w-full max-w-md">
        <div className="mb-6 rounded-lg bg-white px-8 pb-8 pt-10 shadow-lg">
          <h2 className="mb-8 text-center text-3xl font-bold text-gray-800">Sign Up</h2>
          <form>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="name"> Name </label>
              <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none" type="text" id="name" placeholder="Enter your name" required />
            </div>
            <div className="mb-6">
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="email"> Email </label>
              <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none" type="email" id="email" placeholder="Enter your email" required />
            </div>
            <div className="mb-8">
              <label className="mb-2 block text-sm font-semibold text-gray-700" htmlFor="password"> Password </label>
              <input className="w-full rounded-lg border border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none" type="password" id="password" placeholder="Enter your password" required />
            </div>
            <div className="mb-9 flex items-center justify-center">
              <button className="focus:shadow-outline rounded-lg bg-blue-600 px-24 py-4 font-bold text-white hover:bg-blue-700 focus:outline-none" type="submit">Sign Up</button>
            </div>
            <div className="mb-4 flex items-center justify-center">
              <a className="inline-block align-baseline text-sm font-semibold text-blue-600 hover:text-blue-700" href="#"> Already have an account? </a>
            </div>
            <div className="mb-4 text-center">
              <span className="text-sm text-gray-500">or</span>
            </div>
            <div className="flex justify-center">
              <button className="focus:shadow-outline flex items-center rounded-lg border border-gray-300 bg-white px-4 py-2 font-semibold text-gray-800 shadow-sm hover:bg-gray-100 focus:outline-none">
                <img src="https://www.google.com/images/icons/product/google_search-48.png" className="mr-2 h-5 w-5" alt="Google Icon" />
                Sign Up with Google
              </button>
            </div>
          </form>
        </div>
        <p className="text-center text-xs text-gray-500">&copy; 2023 Email Outreach. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Signup;
