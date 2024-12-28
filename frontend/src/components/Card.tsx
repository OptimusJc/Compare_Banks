import React from 'react';

export default function Card({
  index,
  title,
  description,
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div className='flex h-96 w-72 flex-col items-center justify-center gap-12 rounded-lg bg-gray-100 p-2 shadow-xl md:w-80 lg:w-64 lg:gap-4'>
      <div className='flex flex-col items-center justify-center text-balance text-center'>
        <div className='mb-14 flex h-20 w-20 items-center justify-center rounded-full bg-blue-200 text-3xl text-blue-600'>
          {index}
        </div>
        <h1 className='text-2xl font-semibold md:text-xl'>{title}</h1>
        <p className='py-3 text-base'>{description}</p>
      </div>
    </div>
  );
}
