import { motion } from 'framer-motion';
import { MdDeleteOutline } from 'react-icons/md';
import { BsCheck } from 'react-icons/bs';
import { useStateContext } from '../contexts/ContextProvider';

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const todoItemMotion = {
  rest: { opacity: 0, x: -200 },
  visible: { opacity: 1, x: 0 },
  exit: { opaccity: 0, x: -200 },
};

const removeButtonMotion = {
  rest: { opacity: 0, y: -9, x: 10 },
  hover: { opacity: 1, y: -9, x: 0, transition: { duration: 0.1 } },
};

const TodoItem = ({ id, title, completed }: ITodo) => {
  const { toggleComplete, removeTodo } = useStateContext();

  return (
    <motion.div
      className="flex w-full items-center justify-start shadow-md relative"
      initial="rest"
      whileInView="visible"
      exit="exit"
      variants={todoItemMotion}
      viewport={{ once: true }}
    >
      <motion.div
        className="px-4 py-2 w-full bg-slate-200 active:bg-slate-300 transition-all rounded peer overflow-hidden relative"
        initial="rest"
        whileHover="hover"
        whileFocus="hover"
        whileTap="hover"
      >
        <label htmlFor="" className="relative flex items-center">
          <input
            type="checkbox"
            name=""
            id=""
            checked={completed}
            className="opacity-0 absolute top-0 bottom-0 left-0 right-0 cursor-pointer peer z-[5]"
            onChange={() => toggleComplete(id)}
          />
          <span className="w-4 h-4 rounded absolute border border-[#009A40] bg-transparent peer-checked:bg-[#009A40] flex items-center justify-center text-white transition-all">
            {completed && <BsCheck />}
          </span>
          <span className="pl-8 peer-checked:text-gray-400 peer-checked:line-through">
            {title}
          </span>
        </label>
        <motion.button
          className="aspect-square items-center justify-center absolute right-3 top-1/2 -translate-y-1/2 z-30"
          variants={removeButtonMotion}
          onClick={() => removeTodo(id)}
        >
          <MdDeleteOutline className="text-xl text-rose-500" />
        </motion.button>
      </motion.div>

      {/* <TodoDelete /> */}
    </motion.div>
  );
};

export default TodoItem;
