import { createContext, useContext, useEffect, useState } from 'react';

const stateContext = createContext();

export const ContextProvider = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [todos, setTodos] = useState([
    {
      id: Math.random(),
      title: 'Тестовое задание',
      completed: false,
    },
    {
      id: Math.random(),
      title: 'Прекрасный код',
      completed: true,
    },
    {
      id: Math.random(),
      title: 'Покрытие тестами',
      completed: false,
    },
  ]);

  const [modal, setModal] = useState(false);
  const [text, setText] = useState('');
  const [filtered, setFiltered] = useState(todos); // !!!
  const [numOfActive, setNumOfActive] = useState(
    todos.reduce((acc, item) => (item.completed === false ? acc + 1 : acc), 0)
  );

  useEffect(() => {
    setFiltered(todos);
    setNumOfActive(
      todos.reduce((acc, item) => (item.completed === false ? acc + 1 : acc), 0)
    );
  }, [todos]);

  const handleActiveIndex = index => {
    setActiveIndex(index);
  };

  const toggleComplete = id => {
    setTodos(
      todos.map(todo => {
        if (todo.id !== id) return todo;
        return {
          ...todo,
          completed: !todo.completed,
        };
      })
    );
  };

  const addTodo = event => {
    event.preventDefault();
    if (text.trim().length) {
      setTodos([
        ...todos,
        {
          id: Math.random(),
          title: text,
          completed: false,
        },
      ]);
    }
    setText('');
    setModal(false);
  };

  const filter = status => {
    console.log(status);
    if (status === 'all') {
      setFiltered(todos);
    } else {
      setFiltered(todos.filter(todo => todo.completed === status));
    }
  };

  const removeTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearAll = () => {
    setTodos(todos.filter(todo => todo.completed !== true));
  };

  return (
    <stateContext.Provider
      value={{
        activeIndex,
        handleActiveIndex,
        todos,
        toggleComplete,
        modal,
        setModal,
        text,
        setText,
        addTodo,
        removeTodo,
        filtered,
        setFiltered,
        filter,
        numOfActive,
        clearAll,
      }}
    >
      {children}
    </stateContext.Provider>
  );
};

export const useStateContext = () => useContext(stateContext);
