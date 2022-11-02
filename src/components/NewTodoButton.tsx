import { IoMdAdd } from 'react-icons/io';
import { motion } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';

const NewTodoButton = () => {
  const { setModal } = useStateContext();
  return (
    <motion.button
      className="rounded-full flex items-center justify-center self-center  bg-[#009A40] w-14 aspect-square shadow-[0px_0px_40px_16px_rgba(34,60,80,0.2)] absolute bottom-14 outline-none z-[5]"
      onClick={() => setModal(true)}
      initial={{ rotate: '-90deg', scale: 1 }}
      whileHover={{ rotate: 0, scale: 1.1 }}
      whileTap={{ rotate: 0, scale: 1.1 }}
    >
      <IoMdAdd className="text-2xl text-white" />
    </motion.button>
  );
};

export default NewTodoButton;
