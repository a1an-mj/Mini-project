import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    remember: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  return (
    <div 
      className="h-screen w-full bg-cover bg-bottom m-0 p-0 bg-[url('/bg-img.png')]" 
    >
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl w-full pt-9 pb-16 tracking-[67px] font-courier text-white text-center mt-8">ANALYTICS</h2>
        </div>
      <div className="max-w-2xl mx-auto">
        <div className="bg-[rgba(255,255,255,0.4)] shadow-md rounded-3xl w-[419px] h-[450px] p-5 sm:p-7 lg:p-12 dark:bg-[rgba(0,0,0,0.4)] flex flex-col justify-center mx-auto">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <h3 className="font-courier text-4xl text-gray-900 dark:text-white">Sign in</h3>
            <div>
              <label htmlFor="email" className="text-sm font-courier text-gray-900 block mb-2 dark:text-white">
                email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="bg-transparent border border-gray-300 text-[#d6d6d6] sm:text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-[319.96px] h-[50.03px] p-2.5 dark:bg-transparent dark:border-blue-500 dark:placeholder-[#d6d6d6] dark:text-[#d6d6d6] font-courier"
                placeholder="name@company.com"
                required=""
              />
            </div>
            <div>
              <label htmlFor="password" className="text-sm font-courier text-gray-900 block mb-2 dark:text-white">
                password
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="bg-transparent border border-gray-300 text-gray-900 sm:text-sm rounded-2xl focus:ring-blue-500 focus:border-blue-500 block w-[319.96px] h-[50.03px] p-2.5 dark:bg-transparent dark:border-blue-500 dark:placeholder-gray-300 dark:text-gray-500"
                required=""
              />
            </div>
            <div className="flex items-start">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    name="remember"
                    aria-describedby="remember"
                    type="checkbox"
                    checked={formData.remember}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                    required=""
                  />
                </div>
                <div className="text-sm ml-3">
                  <label htmlFor="remember" className="font-courier text-gray-900 dark:text-gray-300">
                    Remember me
                  </label>
                </div>
              </div>
            </div>
            <button
              type="submit"
              className="w-[319.96px] h-[50.03px] text-white bg-[rgba(0,122,255,1)] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-courier rounded-3xl text-sm px-5 py-2.5 text-center dark:bg-[rgba(0, 122, 255, 1)] dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Sign In
            </button>
          </form>
        </div>

        <p className="text-center mt-4 font-courier">Don't have an account? <Link to={"/signup"} className="text-white hover:underline">Sign up</Link></p>
        <p className="text-center mt-1 font-courier"><a href="/forgot-password" className="text-white hover:underline">Forgot Password?</a></p>
      </div>
    </div>
  );
}

export default Login;