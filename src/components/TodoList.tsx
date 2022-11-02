import React from 'react';
import TodoItem from './TodoItem';
import { useStateContext } from '../contexts/ContextProvider';

interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const { filtered } = useStateContext();
  return (
    <div className="flex flex-col gap-4 items-center justify-start px-4 py-4 bg-slate-50 rounded-[20px] shadow-xl h-full overflow-scroll">
      {filtered.map((item: ITodo, index: string) => (
        <TodoItem {...item} key={index} />
      ))}

      {!filtered.length && (
        <p className="m-auto text-sm text-gray-600">add some new tasks</p>
      )}
    </div>
  );
};

export default TodoList;
