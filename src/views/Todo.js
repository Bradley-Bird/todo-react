import { useEffect, useState } from 'react';
import { getTodos } from '../services/todo';

function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <p key={todo.id}>{todo.todo}</p>
      ))}
      <form action="">
        <input type="text" placeholder="Todo's" />
        <button>Add Todo</button>
      </form>
    </div>
  );
}

export default Todo;
