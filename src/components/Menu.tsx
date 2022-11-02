import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';

const menuTabs = ['All', 'Active', 'Completed'];

const Menu: React.FC = () => {
  const { activeIndex, handleActiveIndex, filter } = useStateContext();

  return (
    <ul className="flex items-center justify-evenly bg-slate-50 rounded py-2 shadow-xl">
      {menuTabs.map((tab, index) => (
        <MenuItem
          key={index}
          tab={tab}
          isActive={activeIndex === index}
          handleClick={() => {
            handleActiveIndex(index);
            if (index === 0) filter('all');
            if (index === 1) filter(false);
            if (index === 2) filter(true);
          }}
        />
      ))}
    </ul>
  );
};

export default Menu;

interface MenuItemProps {
  tab: string;
  isActive: boolean;
  handleClick: () => void;
}

const MenuItem: React.FC<MenuItemProps> = ({ tab, handleClick, isActive }) => {
  return (
    <motion.li
      className="relative cursor-pointer transition-all"
      onClick={handleClick}
      // style={{ color: isActive ? 'rgb(14 165 233)' : '#000' }}
    >
      {isActive && <ActiveLine />}
      {tab}
    </motion.li>
  );
};

export const ActiveLine = () => {
  return (
    <>
      <motion.div
        layoutId="activeItem"
        className="w-[calc(100%/2)] h-[2px] absolute -top-1 -left-2 bg-sky-500 "
      />
      <motion.div
        layoutId="activeItem1"
        className="h-[calc(100%/2)] w-[2px] absolute -top-1 -left-2 bg-sky-500 "
      />
      <motion.div
        layoutId="activeItem2"
        className="w-[calc(100%/2)] h-[2px] absolute -bottom-1 -right-2 bg-sky-500 "
      />
      <motion.div
        layoutId="activeItem3"
        className="h-[calc(100%/2)] w-[2px] absolute -bottom-1 -right-2 bg-sky-500 "
      />
    </>
  );
};
