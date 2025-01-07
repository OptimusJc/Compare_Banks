import React, { useState, useRef, useEffect } from 'react';

interface Dropdown {
  label: string;
}

const Dropdown = ({ label }: Dropdown) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState('Select an option');
  const dropdownRef = useRef(null);

  const [datas, setDatas] = useState([]);
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

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: { target: any }) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event?.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleOptionClick = (value: string) => {
    setSelectedValue(value);
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className='relative inline-block text-left'>
      <div className='flex md:items-center md:space-x-3'>
        <label className='hidden text-base font-medium text-gray-700 md:block'>
          {label}
        </label>
        <button
          onClick={toggleDropdown}
          className='w-44 rounded-md bg-blue-600 px-4 py-2 text-left text-white hover:bg-blue-700 focus:outline-none md:w-48'
        >
          {selectedValue}
        </button>
        {/* Dropdown Menu */}
        {isOpen && (
          <div className='absolute z-50 mt-10 w-44 rounded-md border border-gray-200 bg-white shadow-lg md:left-[118px] md:mt-44 md:w-48'>
            <ul className='py-2'>
              {/* TODO: Find a way to iterate over options  */}
              {/* {datas?.map((data, idx) => { */}
              {/*   <li key={idx}> */}
              {/*     <button */}
              {/*       onClick={() => handleOptionClick('Option 1')} */}
              {/*       className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100' */}
              {/*     > */}
              {/*       {data.Type} */}
              {/*     </button> */}
              {/*   </li>; */}
              {/* })} */}
              <li>
                <button
                  onClick={() => handleOptionClick('Checking')}
                  className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                >
                  Checking
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleOptionClick('Savings')}
                  className='block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100'
                >
                  Savings
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};
export default Dropdown;
