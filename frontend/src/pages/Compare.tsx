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
  images?: string;
}

export default function Compare() {
  const [datas, setDatas] = useState<DataType[]>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedValue, setSelectedValue] = useState();
  const API_URL = import.meta.env.VITE_API_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);

        const res = await fetch(`${API_URL}/compare`);
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

  const filteredAccounts = selectedValue
    ? datas?.filter((account) => account.Type === selectedValue)
    : datas;

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
              <Dropdown
                selectedValue={selectedValue}
                onOptionChange={setSelectedValue}
              />
            </div>

            {loading ? <div>loading</div> : ''}
            {error ? <div>Error: {error}</div> : ''}
            {filteredAccounts?.map((account, idx) => {
              return (
                <div
                  key={idx}
                  className='mx-auto my-4 border-2 border-black/20 bg-white py-8 shadow-md md:w-3/4'
                >
                  {/* display head */}
                  <div className='border-b-2 border-gray-200 py-4'>
                    <div className='flex gap-2'>
                      <div className='flex h-20 w-24 items-center justify-center overflow-hidden'>
                        <img
                          src={account.images}
                          alt='bank logo'
                          className='w-full object-cover'
                        />
                      </div>
                      <div className='flex flex-col items-start justify-center gap-3'>
                        <h3 className='text-lg font-bold uppercase'>
                          {account.BankName}
                        </h3>
                        <p className='flex items-center gap-1 capitalize'>
                          {`${account.BankName} ${account.Type} account`}
                          <span className='rounded-md bg-blue-600 p-1 capitalize text-white'>
                            {account.Type}
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
                      <p className='pb-4 pl-2'>{account.PackageName}</p>
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
                            {account.MonthlyFee !== null
                              ? account.MonthlyFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          minimum balance{' '}
                          <span className='font-normal'>
                            {account.MinimumBalance !== null
                              ? account.MinimumBalance
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          withdrawal fee{' '}
                          <span className='font-normal'>
                            {account.WithdrawalFee !== null
                              ? account.WithdrawalFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          cash deposit fee{' '}
                          <span className='font-normal'>
                            {account.CashDepositFee !== null
                              ? account.CashDepositFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          online transaction fee{' '}
                          <span className='font-normal'>
                            {account.OnlineTransactionalFee !== null
                              ? account.OnlineTransactionalFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          external debit order fee{' '}
                          <span className='font-normal'>
                            {account.ExternalDebitOrderFee !== null
                              ? account.ExternalDebitOrderFee
                              : 0}
                          </span>
                        </p>
                        <p className='flex items-center justify-between font-bold'>
                          internal debit order fee{' '}
                          <span className='font-normal'>
                            {account.InternalDebitOrderFee !== null
                              ? account.InternalDebitOrderFee
                              : 0}
                          </span>
                        </p>
                      </div>
                      <a
                        href={account.Website}
                        target='_blank'
                        className='bg-blue-600 px-5 py-3 text-center capitalize text-white'
                      >
                        take me to {account.BankName}
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
