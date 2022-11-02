import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';

const ClearButton = () => {
  const { clearAll } = useStateContext();
  return (
    <motion.div className="absolute bottom-7 left-0 right-0 flex items-center justify-center  ">
      <motion.button
        className="text-[12px] "
        onClick={clearAll}
        initial={{ color: 'rgb(75 85 99)' }}
        whileHover={{
          color: '#009A40',
          scale: 1.2,
        }}
        whileTap={{ color: '#009A40', scale: 1.2 }}
      >
        clear completed
      </motion.button>
    </motion.div>
  );
};

export default ClearButton;
