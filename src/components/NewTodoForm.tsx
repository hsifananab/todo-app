import React from 'react';
import { motion } from 'framer-motion';
import { useStateContext } from '../contexts/ContextProvider';

const NewTodoForm = () => {
  const { text, setText, addTodo } = useStateContext();

  return (
    <form className="flex flex-col justify-between h-full" onSubmit={addTodo}>
      <textarea
        placeholder="type here"
        rows={2}
        value={text}
        onChange={e => setText(e.target.value)}
        className="w-full h-full outline-none resize-none"
      />
      <motion.button
        className="w-full text-center px-4 py-2 rounded-xl outline-none shadow-md active:shadow-none"
        initial={{ color: '#000000', backgroundColor: 'rgb(226 232 240)' }}
        whileHover={{ color: '#ffffff', backgroundColor: '#009A40' }}
        whileTap={{ color: '#ffffff', backgroundColor: '#009A40' }}
      >
        Add
      </motion.button>
    </form>
  );
};

export default NewTodoForm;
