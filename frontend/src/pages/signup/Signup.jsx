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

  useEffect(() => {
    // Load the reCAPTCHA script
    const recaptchaScript = document.createElement('script');
    recaptchaScript.src = 'https://www.google.com/recaptcha/api.js';
    recaptchaScript.async = true;
    recaptchaScript.defer = true;
    document.head.appendChild(recaptchaScript);

    // Load Google Identity Services script
    const googleScript = document.createElement('script');
    googleScript.src = 'https://accounts.google.com/gsi/client';
    googleScript.async = true;
    googleScript.defer = true;
    document.head.appendChild(googleScript);

    return () => {
      document.head.removeChild(recaptchaScript);
      document.head.removeChild(googleScript);
    };
  }, []);

  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: "349488632873-mk2mu8pkrhba44iqlne1m882pva74see.apps.googleusercontent.com", // Replace with your Google Client ID
        callback: handleGoogleSignIn
      });
    }
  }, []);

  const handleGoogleSignIn = (response) => {
    // Handle the Google Sign-In response
    console.log('Google Sign-In successful:', response);
    // Add your Google authentication logic here
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

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
    <div className="min-h-screen w-full flex">
      {/* Left side with background image */}
      <div className="hidden md:flex md:w-1/2 relative">
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

      {/* Right side with form */}
      <div className="w-full md:w-1/2 bg-black flex items-center justify-center">
        <div className="max-w-md w-full mx-auto px-6 py-12">
          <div className="mb-12">
            <h2 className="text-2xl text-white font-mono mb-2">Sign Up Account</h2>
            <p className="text-gray-500 font-mono text-sm">
              Enter your personal data to create your account
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Previous form fields remain unchanged */}
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

            <div className="space-y-4">
              <button
                type="submit"
                className="w-full bg-white text-black py-2 font-mono text-sm hover:bg-gray-100 transition-colors rounded-3xl disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!captchaVerified}
              >
                Sign Up
              </button>

              <div
                id="g_id_onload"
                data-client_id="YOUR_GOOGLE_CLIENT_ID"
                data-callback="handleGoogleSignIn"
              ></div>
              <button
                type="button"
                onClick={() => {
                  window.google?.accounts.id.prompt();
                }}
                className="w-full flex items-center justify-center gap-2 bg-gray-900 border border-gray-800 text-white py-2 font-mono text-sm hover:bg-gray-800 transition-colors rounded-3xl"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  />
                  <path
                    fill="currentColor"
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  />
                  <path
                    fill="currentColor"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  />
                </svg>
                Continue with Google
              </button>
            </div>

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