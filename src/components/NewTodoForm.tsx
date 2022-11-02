import React from 'react';
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
      <button className="w-full text-center bg-slate-200 px-4 py-2 rounded-xl outline-none hover:bg-[#009A40] hover:text-white focus:bg-[#009A40] focus:text-white transition-all shadow-md active:shadow-none">
        Add
      </button>
    </form>
  );
};

export default NewTodoForm;
