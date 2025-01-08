import React from 'react';

const Dropdown = ({ selectedValue, onOptionChange }) => {
  const options = [
    { label: 'All', value: '' },
    { label: 'Checking', value: 'Checking' },
    { label: 'Savings', value: 'Savings' },
  ];

  return (
    <div className='mb-4'>
      <h3 className='mb-2 text-sm font-medium'>Filter by Account Type: </h3>
      <ul className='border-b- flex space-x-4 pb-2'>
        {options.map((option) => (
          <li
            key={option.value}
            className={`cursor-pointer rounded-md p-2 ${selectedValue === option.value ? 'bg-blue-500 text-white' : 'bg-gray-100 text-gray-700'}`}
            onClick={() => onOptionChange(option.value)}
          >
            {option.label}
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Dropdown;
