// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';

const LoginSignup = () => {
  const [state, setState] = useState('Sign Up');
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: ''
  });

  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const login = async (e) => {
    e.preventDefault();
    console.log("login", formData);
    let responseData;
    await fetch('https://ecomclothingapp.onrender.com/login', { // Assuming the login API endpoint
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json().then((data) => responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors);
    }
  };


  const signup = async (e) => {
    e.preventDefault();
    console.log("signup", formData);
    let responseData;
    await fetch('https://ecomclothingapp.onrender.com/signup', {
      method: 'POST',
      headers: {
        Accept: 'application/form-data',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then((response) => response.json().then((data) => responseData = data));

    if (responseData.success) {
      localStorage.setItem('auth-token', responseData.token);
      window.location.replace('/');
    }
    else {
      alert(responseData.errors);
    }
  };

  return (
    <div className="py-4 sm:py-8 lg:py-12">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <form className="bg-white mx-auto max-w-lg border">
          <div className="flex flex-col gap-8 p-4 md:p-8">
            <h2 className="my-2 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">{state}</h2>
            {state === "Sign Up" && (
              <div>
                <input
                  name="username"
                  value={formData.username}
                  onChange={changeHandler}
                  placeholder='Your Name'
                  className="w-full rounded border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                />
              </div>
            )}

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={changeHandler}
                placeholder='Email Address'
                className="w-full rounded border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <div>
              <input
                name="password"
                value={formData.password}
                onChange={changeHandler}
                placeholder='password'
                type='password'
                className="w-full rounded border bg-gray-50 px-3 py-3 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              />
            </div>

            <button
              onClick={(event) => {
                state === "Login" ? login(event) : signup(event);
              }}
              className="block rounded-lg bg-red-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-red-300 transition duration-100 hover:bg-red-800 focus-visible:ring active:bg-red-600 md:text-base"
            >
              Continue
            </button>
          </div>

          <div className="flex flex-col gap-2 items-center justify-center bg-gray-100 p-4">
            {state === "Sign Up" ? (
              <p onClick={() => setState("Login")} className="text-center text-sm text-gray-500">
                Already have an account? <span className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Login</span>
              </p>
            ) : (
              <p onClick={() => setState("Sign Up")} className="text-center text-sm text-gray-500">
                Don&apos;t have an account? <span className="text-red-500 transition duration-100 hover:text-red-600 active:text-red-700">Register</span>
              </p>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginSignup;
