import { useEffect, useState } from 'react';
import { getTodos, updateStatus, updateTodos } from '../services/todo';
import styled from 'styled-components';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  //this state adds a layer between the typing and the click
  //so that it doesn't update every time you type something in the input
  const [sendTodo, setSendTodo] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, [sendTodo]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTodos(newTodo);
    //updating the useEffect to reload the page
    setSendTodo(newTodo);
    setNewTodo('');
  };
  const check = async (todo) => {
    await updateStatus(todo.id);
  };
  return (
    <div>
      {todos.map((todo) => (
        <StyledP
          className={todo.complete === true ? 'active' : ''}
          key={todo.id}
          onClick={() => check(todo)}
        >
          {todo.todo}
        </StyledP>
      ))}
      <form action="">
        <input
          type="text"
          value={newTodo}
          placeholder="Todo's"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleUpdate}>Add Todo</button>
      </form>
    </div>
  );
}

const StyledP = styled.p`
  .active {
    text-decoration: underline;
  }
`;
export default Todo;
