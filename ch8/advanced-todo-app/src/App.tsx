import './App.css'
import { useEffect, useState } from 'react';
import type { Todo } from './types/Todo';
import TodoForm from "./components/TodoForm"
import {TodoList} from "./components/TodoList"
import { getAllTodos, addTodoApi, toggleTodoApi, deleteTodoApi } from './services/todoService';
//import { v4 as uuid } from 'uuid'; 더이상 안씀

function App() {
  // const [ todos, setTodos ] = useState<Todo[]>(() => {
  //   const storedTodos = localStorage.getItem('todos');
  //   return storedTodos ? JSON.parse(storedTodos): [];
  // }); DB에서 가져올거기 떄문에 참조해서 이렇게 들고올 필요가 없음

  const [todos, setTodos] = useState<Todo[]>([]);
  const [isLoading, setIsLoding] = useState<boolean>(true);

  useEffect(()=>{
    const fetchTodosFromServer = async():Promise<void> => {
      try {
        setIsLoding(true);
        const serverTodos = await getAllTodos();
        setTodos(serverTodos);
      } catch (error){
        console.log('서버에서 데이터를 가지고 오는데 실패했습니다.:', error);
      } finally{
        setIsLoding(false);
      }
    };
    fetchTodosFromServer();
  }, []);

  const handleAddTodo = async (text: string): Promise<void>=>{
    try{
      setIsLoding(true);
      const newTodo = await addTodoApi(text);
      setTodos(prevTodos=>[...prevTodos, newTodo]);
      setIsLoding(false);
    }catch (error){
      console.log('todo를 추가하는데 실패했습니다.: ', error);
    }
  }

  // const addTodo = (text: string) => {
  //   const newTodo: Todo = {
  //     id: uuid(),
  //     text,
  //     completed: false,
  //   }
  //   const updatedTodos = [ ...todos, newTodo ];
  //   console.log('updatedTodos --->', updatedTodos);
  //   setTodos(updatedTodos);
  //   localStorage.setItem('todos', JSON.stringify(updatedTodos));
  // }

  // const deleteTodo = (id: string) => {
  //   const updatedTodos = todos.filter((todo) => todo.id !== id);
  //   setTodos(updatedTodos);
  //   localStorage.setItem('todos', JSON.stringify(updatedTodos));
  // } 

  // const toggleComplete = (id: string) => {
  //   const updatedTodos = todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed } : todo );
  //   setTodos(updatedTodos);
  //   localStorage.setItem('todos', JSON.stringify(updatedTodos));
  // }

  const handleToggleComplete = async (id: number) : Promise<void> => {
    try{
    const todoToToggle = todos.find(todo => todo.id === id);
    if (!todoToToggle) return;
    const updatedTodo = await toggleTodoApi(id, todoToToggle.completed);
    setTodos(prevTodos => 
      prevTodos.map(todo=> (todo.id === id ? updatedTodo : todo))
    );
    } catch(error){
      console.log("완료된 상태변경에 실패했습니다. :", error);
    }
  };

  const handleDeleteTodo = async(id: number):Promise<void>=>{
    try{
    await deleteTodoApi(id);
    setTodos(prevTodos=> prevTodos.filter(todo=> todo.id !== id));
    }catch(error){
      console.log('todo를 지우는데 실패했습니다. :', error);
    }
  }

  return (
    <div>
      <h1>Todo List</h1>
      <TodoForm onAddTodo={handleAddTodo}/>
      {
        isLoading ? (
          <p>목록을 불러오는 중입니다...</p>
        ) : (
          <TodoList todos={todos} onToggleComplete={handleToggleComplete} onDeleteTodo={handleDeleteTodo}/>
        )
      }
      
    </div>
  )
}

export default App
