import React, { useState, useEffect } from 'react';
import postagramlogo from './assets/logo.jpeg';
import './App.css';
import Cookies from 'universal-cookie';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [error, setError] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const ifResponseOk = (response) => {
    if (response.status >= 200 && response.status <= 299) {
      return response.json();
    } else {
      throw Error(response.statusText);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("/api/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-CSRFToken": cookies.get("csrftoken"),
      },
      credentials: "same-origin",
      body: JSON.stringify({ username, password }),
    })
    .then(ifResponseOk)
    .then((data)=> {
      console.log(data);
      setIsAuthenticated(true);
      setUsername('');
      setPassword('');
      setError('');
    })
    .catch((err)=> {
      console.log(err);
      setError("Wrong username or password");
    });
  };

  useEffect(() => {
    getSession();
  }, []);

  const getSession = () => {
    fetch("/api/session", {
      credentials: "same-origin"
    })
    .then((res)=> res.json())
    .then((data)=> {
      console.log(data);
      setIsAuthenticated(data.isauthenticated);
    })
    .catch((err)=> {
      console.log(err);
    });
  };

  const whoami = () => {
    fetch("/api/whoami/", {
      headers:{
        "Content-Type":"application/json",
      },
      credentials: "same-origin"
    })
    .then((res)=> res.json())
    .then((data)=> console.log("You are logged in as: " + data.username))
    .catch((err)=> {
      console.log(err);
    });
  };

  const cookies = new Cookies();

  return (
    <div className='mx-auto w-[800px]'>
      <div className='flex items-center justify-between mb-20'>
        <a href="https://vitejs.dev" target="_blank">
          <img src={postagramlogo} className="logo" alt="Vite logo" />
        </a>
        <h1 className='text-blue-600 text-6xl'>Welcome to Postagram!</h1>
      </div>
      <p>Login now and start enjoying!</p>
      <p className='mb-20'>Or if you do not have an account, please <a href="" className='text-green-800 underline'>register</a>.</p>
      <div className='bg-cyan-100 rounded-lg w-[750px] mx-auto shadow-xl p-10'>
        <form onSubmit={handleSubmit}>
          <div className='mb-8'>
            <label htmlFor="email" className='flex items-start text-stone-500'>Email address</label> <br /> <br />
            <input
              type="email"
              id="email"
              placeholder='Enter email address'
              value={email}
              onChange={handleEmailChange}
              required
              className='w-full rounded-xl p-2'
            />
          </div>
          <div className='mb-8'>
            <label htmlFor="password" className='flex items-start  text-stone-500'>Password</label> <br /> <br />
            <input
              type="password"
              id="password"
              placeholder='Password'
              className='w-full rounded-xl p-2'
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <button
            type="submit"
            className="group relative w-32 flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="absolute left-0 inset-y-0 flex items-center pl-3">
              <svg
                className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M3 4c0-1.1.9-2 2-2h10a2 2 0 0 1 2 2v5h-1V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v5H3V4zm14 7a1 1 0 0 1-1 1h-2v4a1 1 0 0 1-2 0v-4H6a1 1 0 0 1-1-1v-3h12v3zM2 14a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1v-3z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default App;
