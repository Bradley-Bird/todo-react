import { useEffect, useState } from 'react';
import { getTodos, updateStatus, updateTodos } from '../services/todo';
import styled from 'styled-components';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  //this state adds a layer between the typing and the click
  //so that it doesn't update every time you type something in the input
  const [sendTodo, setSendTodo] = useState('');
  //making state to update false to true
  const [complete, setComplete] = useState(false);
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

  // const handleComplete = async (e) => {
  //   setComplete(!complete);
  //   await updateStatus(e.target.id);
  // };
  return (
    <div>
      {todos.map((todo) => (
        <StyledP
          className={complete ? 'active' : ''}
          key={todo.id}
          onClick={async () => updateStatus(todo.id)}
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
    text-decoration: strike;
  }
`;
export default Todo;
