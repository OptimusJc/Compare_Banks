import React, { useEffect, useState } from 'react';
import Dropdown from '../components/Dropdown';

interface DataType {
  AcountType: string;
  AccountTypeID: number;
  BankID: number;
  BankName: string;
  CashDepositFee?: string;
  ExternalDebitOrderFee?: number;
  InternalDebitOrderFee?: number;
  MinimumBalance?: number;
  MonthlyFee?: number;
  OnlineTransactionalFee?: number;
  PackageName: string;
  Type: string;
  Website: string;
  WithdrawalFee?: string;
}

export default function Compare() {
  const [datas, setDatas] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch('http://127.0.0.1:5000/compare');
        if (!res.ok) {
          throw new Error('Failed to fetch data!');
        }

        const data = await res.json();
        setDatas(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(datas);

  return (
    <div>
      <main className='container mx-auto bg-gray-100 py-8'>
        <div className='text-center'>
          <div className='flex flex-col items-center'>
            <h1 className='text-xl font-bold capitalize md:text-3xl'>
              Discover the perfect account for you
            </h1>
            <div className='md:w-96 lg:w-1/2'>
              <p className='text-wrap py-3'>
                Looking for the best banking products? Whether you're comparing
                interest rates, checking eligibility criteria, or connecting
                with reliable customer service, Compare Banks is here to guide
                you.{' '}
              </p>
              <p>
                We analyze and compare banks to recommend the top financial
                solutions, helping you make informed decisions with ease.
              </p>
            </div>
          </div>

          {/* compare section */}
          <section>
            {/* top dropdowns */}
            <div className='my-3 flex items-center justify-evenly gap-1'>
              <Dropdown label='Account type ?' />
              {/* <Dropdown label='Sort results by' /> */}
            </div>

            {loading ? <div>loading</div> : ''}
            {error ? <div>Error: {error}</div> : ''}
            {datas?.map((data, idx) => {
              return (
                <div
                  key={idx}
                  className='mx-auto my-4 border-2 border-black/20 bg-white py-8 shadow-md md:w-3/4'
                >
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
                        <h3 className='text-lg font-bold uppercase'>
                          {data.BankName}
                        </h3>
                        <p className='flex items-center gap-1 capitalize'>
                          {`${data.BankName} ${data.Type} account`}
                          <span className='rounded-md bg-blue-600 p-1 capitalize text-white'>
                            {data.Type}
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
                      <h3 className='text-lg font-bold'>Package Name</h3>
                      <p className='pb-4 pl-2'>{data.PackageName}</p>
                      <h3 className='text-lg font-bold'>Eligibility</h3>
                      <ul className='ml-7 list-disc'>
                        <li>SA resident and a tax resident</li>
                      </ul>
                    </div>
                    <div className='flex flex-col gap-4 md:w-1/2'>
                      <div className='flex flex-col gap-2 text-wrap bg-gray-300 px-2 py-4'>
                        <p className='flex items-center justify-between font-bold'>
                          monthly fee{' '}
                          <span className='font-normal'>
                            {data.MonthlyFee !== null ? data.MonthlyFee : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          minimum balance{' '}
                          <span className='font-normal'>
                            {data.MinimumBalance !== null
                              ? data.MinimumBalance
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          withdrawal fee{' '}
                          <span className='font-normal'>
                            {data.WithdrawalFee !== null
                              ? data.WithdrawalFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          cash deposit fee{' '}
                          <span className='font-normal'>
                            {data.CashDepositFee !== null
                              ? data.CashDepositFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          online transaction fee{' '}
                          <span className='font-normal'>
                            {data.OnlineTransactionalFee !== null
                              ? data.OnlineTransactionalFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          external debit order fee{' '}
                          <span className='font-normal'>
                            {data.ExternalDebitOrderFee !== null
                              ? data.ExternalDebitOrderFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          internal debit order fee{' '}
                          <span className='font-normal'>
                            {data.InternalDebitOrderFee !== null
                              ? data.InternalDebitOrderFee
                              : 0}
                          </span>
                        </p>
                      </div>
                      <a
                        href={data.Website}
                        target='_blank'
                        className='bg-blue-600 px-5 py-3 text-center capitalize text-white'
                      >
                        take me to {data.BankName}
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </section>
        </div>
      </main>
    </div>
  );
}
