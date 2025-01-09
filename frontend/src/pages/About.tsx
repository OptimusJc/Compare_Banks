import React from 'react';
import Jay from '../assets/images/Jay.jpg';
import Joseph from '../assets/images/Joseph.jpg';
import Alphonse from '../assets/images/Mugisha David.jpg';
import Tshepiso from '../assets/images/Tshepiso.jpg';
import about_1 from '../assets/about_1.jpeg';
import about_2 from '../assets/about_2.jpeg';

export default function About() {
  const teamMembers = [
    {
      name: 'Joel Udoye',
      role: 'Frontend Developer',
      image: `${Jay}`,
    },
    {
      name: 'Alphonse Mugisha',
      role: 'Database Admin',
      image: `${Alphonse}`,
    },
    {
      name: 'Tshepiso Tlhong',
      role: 'Backend Developer',
      image: `${Tshepiso}`,
    },
    {
      name: 'Joseph Otieno',
      role: 'Frontend Lead',
      image: `${Joseph}`,
    },
  ];

  return (
    <main className='pt-8'>
      <section>
        <div className='container mx-auto bg-gray-50 text-gray-800'>
          {/* Header Section */}
          <div className='mx-auto max-w-4xl px-4 py-12'>
            <h1 className='text-center text-4xl font-bold'>
              Compare Banks <br />
              <span className='text-gray-600'>
                Smart Decisions, Smarter Finances.
              </span>
            </h1>
            <p className='mt-4 text-center text-lg text-gray-500'>
              At CompareBanks, we believe that choosing the right bank shouldn't
              be a complicated process. Our mission is to empower individuals
              and businesses with the information they need to make informed
              decisions about their financial services. We strive to provide a
              clear, unbiased, and easy-to-use platform that compares banking
              options, thereby providing financial security, saving you time and
              money.
            </p>
          </div>

          {/* Stats Section */}
          <div className='mx-auto grid max-w-7xl grid-cols-1 gap-6 px-4 py-12 md:grid-cols-2 lg:grid-cols-4'>
            {[
              { text: 'Checking and savings accounts' },
              { text: 'Mortgages and loans' },
              { text: 'Investment options' },
              { text: 'Fees and interest rates' },
            ].map((item, index) => (
              <div
                key={index}
                className='flex flex-col items-center rounded-lg bg-gradient-to-r from-red-400 to-blue-400 p-6 text-white'
              >
                <p className='mt-2 text-center'>{item.text}</p>
              </div>
            ))}
          </div>

          {/* Team in Action Section */}
          <div className='mx-auto max-w-7xl px-4 py-12'>
            <h2 className='text-xl font-bold uppercase text-gray-500'>
              Behind the Scene
            </h2>
            <h3 className='mt-2 text-3xl font-semibold'>Team in Action</h3>

            {/* Image Grid */}
            <div className='mt-8 grid grid-cols-1 gap-6 md:grid-cols-2'>
              <div className='h-96 bg-gray-300'>
                {/* Placeholder for Image */}
                <img
                  src={about_1}
                  alt='Team in action 1'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
              <div className='h-96 bg-gray-300'>
                {/* Placeholder for Image */}
                <img
                  src={about_2}
                  alt='Team in action 2'
                  className='h-full w-full rounded-lg object-cover'
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='container mx-auto max-w-4xl px-4 py-12 text-center'>
          <h3 className='text-3xl font-bold'>What we do</h3>
          <p>
            Our comparison tools allow you to filter and sort banks based on
            your specific needs, such as interest rates, fees, branch locations,
            and online banking features. We aim to provide a comprehensive
            overview of the banking landscape in your country, helping you find
            the perfect fit for your financial goals.
          </p>
        </div>
      </section>

      <section>
        <div className='contianer mx-auto max-w-4xl px-4 py-12 text-center'>
          <h3 className='text-3xl font-bold'>Our Data</h3>
          <p>
            We are committed to providing accurate and up-to-date information.
            We source our data from publicly available information, bank
            websites, and official publications. We regularly update our
            database to ensure its reliability. However, it's important to note
            that information can change, so we always recommend verifying
            details directly with the respective banks.
          </p>
        </div>
      </section>

      <section>
        <div className='bg-gray-50 px-4 py-16 text-gray-800'>
          <div className='mx-auto max-w-7xl'>
            {/* Heading */}
            <h2 className='text-sm font-bold uppercase text-gray-500'>
              Meet the Team
            </h2>
            <h3 className='mt-2 text-4xl font-semibold'>Our Creative Minds</h3>

            {/* Team Grid */}
            <div className='mt-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3'>
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className='group overflow-hidden rounded-lg bg-white shadow-md transition-shadow duration-300 hover:shadow-lg'
                >
                  {/* Image */}
                  <div className='relative flex h-64 w-full items-center justify-center'>
                    <img
                      src={member.image}
                      alt={member.name}
                      className='h-full w-full object-cover'
                    />
                  </div>

                  {/* Info */}
                  <div className='p-4'>
                    <h4 className='flex items-center text-lg font-bold group-hover:text-blue-500'>
                      {member.name}
                      <span className='ml-2 text-blue-500'>↗</span>
                    </h4>
                    <p className='text-gray-500'>{member.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
