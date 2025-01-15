import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const [captchaVerified, setCaptchaVerified] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  useEffect(() => {
    // Load the reCAPTCHA script
    const script = document.createElement('script');
    script.src = 'https://www.google.com/recaptcha/api.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  const handleCaptchaVerify = () => {
    setCaptchaVerified(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!captchaVerified) {
      alert('Please verify that you are not a robot');
      return;
    }
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  // Add this to your window object to handle reCAPTCHA callback
  window.onRecaptchaSuccess = () => {
    handleCaptchaVerify();
  };

  window.onRecaptchaExpired = () => {
    setCaptchaVerified(false);
  };

  return (
    <div className="h-screen w-full flex">
      {/* Left side with background image - fixed */}
      <div className="hidden md:flex md:w-1/2 fixed left-0 h-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/bg-img.png')"
          }}
        />
        <div className="relative z-10 flex flex-col items-center justify-center w-full text-white">
          <h1 className="text-4xl font-mono tracking-[0.3em] mb-16">
            A N A L Y T I C S
          </h1>
          <h2 className="text-2xl font-mono mb-4">
            Get Started with Us
          </h2>
          <p className="text-blue-200 text-center font-mono text-sm">
            Complete the registration of your account
          </p>
        </div>
      </div>

      {/* Spacer div to offset content on larger screens */}
      <div className="hidden md:block md:w-1/2" />

      {/* Right side with form - scrollable */}
      <div className="w-full md:w-1/2 bg-black min-h-screen overflow-y-auto">
        <div className="max-w-md w-full mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-2xl text-white font-mono mb-2">Sign Up Account</h2>
            <p className="text-gray-500 font-mono text-sm">
              Enter your personal data to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="First name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                />
              </div>
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
              />
            </div>

            <div className="space-y-1">
              <div>
                <label className="block text-sm text-white font-mono mb-2" htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
                />
                <p className="text-gray-600 text-xs font-mono">Must be at least 8 characters</p>
              </div>
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none rounded-lg"
              />
            </div>

            <div>
              <label className="block text-sm text-white font-mono mb-2" htmlFor="role">Role</label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="w-full bg-gray-900 border border-gray-800 text-white px-4 py-2 font-mono text-sm focus:outline-none appearance-none rounded-lg"
              >
                <option value="">Select Role</option>
                <option value="manager">Manager</option>
                <option value="developer">Developer</option>
              </select>
            </div>

            {/* reCAPTCHA container */}
            <div className="flex justify-center">
              <div
                className="g-recaptcha"
                data-sitekey="6LfMi7gqAAAAAFdm_vwXrekR_9lj1tAf3ooP3j_F"
                data-callback="onRecaptchaSuccess"
                data-expired-callback="onRecaptchaExpired"
                data-theme="dark"
              ></div>
            </div>

            <button
              type="submit"
              className="w-full bg-white text-black py-2 font-mono text-sm hover:bg-gray-100 transition-colors rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={!captchaVerified}
            >
              Sign Up
            </button>

            <p className="text-gray-500 text-center font-mono text-sm">
              Already have an account?{' '}
              <Link to="/" className="text-blue-400 hover:text-blue-300">
                Sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;