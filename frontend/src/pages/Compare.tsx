import React from 'react';
import Dropdown from '../components/Dropdown';

export default function Compare() {
  return (
    <div>
      <main className='container mx-auto bg-gray-100 py-8'>
        <div className='text-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold capitalize md:text-3xl'>
              Find the right current account for you
            </h1>
            <p className='text-wrap py-3 md:w-96'>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s,
            </p>
          </div>

          {/* compare section */}
          <section>
            {/* top dropdowns */}
            <div className='my-3 flex items-center justify-evenly gap-1'>
              <Dropdown label='Account type ?' />
              <Dropdown label='Sort results by' />
            </div>

            {/* display container */}
            <div className='mx-auto bg-white py-8 shadow-md md:w-3/4'>
              {/* display head */}
              <div className='border-b-2 border-gray-200 py-4'>
                <div className='flex gap-2'>
                  <div className='flex h-20 w-24 items-center justify-center'>
                    <img
                      src='https://placehold.co/200x200'
                      alt='bank logo'
                      className='w-full object-cover'
                    />
                  </div>
                  <div className='flex flex-col items-start justify-center gap-3'>
                    <h3 className='text-lg font-bold uppercase'>Chase</h3>
                    <p className='flex items-center gap-1 capitalize'>
                      Chase current account{' '}
                      <span className='rounded-md bg-blue-600 p-1 capitalize text-white'>
                        Basic
                      </span>
                      <span className='flex h-6 w-6 items-center justify-center rounded-full border-2 p-1 text-sm font-bold'>
                        ?
                      </span>
                    </p>
                  </div>
                </div>
              </div>

              {/* display body */}
              <div className='flex flex-col gap-5 p-2 py-8 text-start capitalize md:flex-row'>
                <div className='flex flex-col items-start gap-2 px-2 md:w-1/2'>
                  <h3 className='text-lg font-bold'>Rewards and Benefits</h3>
                  <ul className='ml-7 list-disc'>
                    <li>cashback</li>
                    <li>exclusive offers and rewards</li>
                  </ul>
                  <h3 className='text-lg font-bold'>Eligibility</h3>
                  <ul className='ml-7 list-disc'>
                    <li>you must be 18+, SA resident and a tax resident</li>
                  </ul>
                </div>
                <div className='flex flex-col gap-4 md:w-1/2'>
                  <div className='flex flex-col gap-2 text-wrap bg-gray-300 px-2 py-4'>
                    <p className='flex items-center justify-between font-bold'>
                      interest rates <span className='font-normal'>0%</span>
                    </p>
                    <p className='flex items-center justify-between font-bold'>
                      annual fee <span className='font-normal'>no fee</span>
                    </p>
                    <p className='flex items-center justify-between font-bold'>
                      refused payment fee{' '}
                      <span className='font-normal'>0rand</span>
                    </p>
                    <p className='flex items-center justify-between font-bold'>
                      arranged overdraft{' '}
                      <span className='font-normal'>none</span>
                    </p>
                  </div>
                  <button className='bg-blue-600 px-5 py-3 capitalize text-white'>
                    take me to chase
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
