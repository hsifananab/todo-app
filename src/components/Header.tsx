import React from 'react';
import { useStateContext } from '../contexts/ContextProvider';

const Header = () => {
  const { numOfActive } = useStateContext();

  return (
    <header className="flex justify-between items-end">
      <h1 className="text-5xl ">todo app</h1>
      <p className="text-[12px] text-gray-600 pr-4">{numOfActive} items left</p>
    </header>
  );
};

export default Header;
