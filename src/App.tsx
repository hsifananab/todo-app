import ClearButton from './components/ClearButton';
import Header from './components/Header';
import Menu from './components/Menu';
import Modal from './components/Modal';
import NewTodoButton from './components/NewTodoButton';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './components/TodoList';
import { useStateContext } from './contexts/ContextProvider';

function App() {
  const { modal, setModal } = useStateContext();
  return (
    <>
      <div className="bg-gray-100 h-screen ">
        <div className="w-screen h-screen sm:max-w-[390px] sm:max-h-[844px] relative mx-auto rounded-[36px] shadow-md bg-white">
          {modal && (
            <Modal title="add new task" onClose={() => setModal(false)}>
              <NewTodoForm />
            </Modal>
          )}
          <div className="px-4 pt-24 pb-20 flex flex-col gap-8 h-full relative">
            <Header />
            <Menu />
            <TodoList />
            <NewTodoButton />
            <ClearButton />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
