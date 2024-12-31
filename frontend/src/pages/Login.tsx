import React, { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in both the email and password');
    } else {
      setError('');

      console.log('Logged in with ', { email, password });
    }
  };

  return (
    <div>
      <div className='flex min-h-screen items-center justify-center bg-gray-100'>
        <div className='w-full max-w-md rounded-lg bg-white p-8 shadow-md'>
          <h2 className='mb-6 text-center text-2xl font-bold'>Login</h2>
          {error && (
            <div className='mb-4 text-center text-sm text-red-500'>{error}</div>
          )}
          <form onSubmit={handleSubmit}>
            <div className='mb-4'>
              <label
                htmlFor='email'
                className='mb-2 block font-medium text-gray-700'
              >
                Email
              </label>
              <input
                type='email'
                id='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className='w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your email'
              />
            </div>
            <div className='mb-6'>
              <label
                htmlFor='password'
                className='mb-2 block font-medium text-gray-700'
              >
                Password
              </label>
              <input
                type='password'
                id='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className='w-full rounded-md border p-2 focus:outline-none focus:ring-2 focus:ring-blue-400'
                placeholder='Enter your password'
              />
            </div>
            <button
              type='submit'
              className='w-full rounded-md bg-blue-500 py-2 text-white transition duration-200 hover:bg-blue-600'
            >
              Login
            </button>
          </form>
          <p className='mt-4 text-center text-sm'>
            Don’t have an account?{' '}
            <a href='/signup' className='text-blue-500 hover:underline'>
              Sign Up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
