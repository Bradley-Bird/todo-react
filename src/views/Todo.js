import { useEffect, useState } from 'react';
import { getTodos, updateStatus, updateTodos } from '../services/todo';
import styled from 'styled-components';

function Todo() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  //this state adds a layer between the typing and the click
  //so that it doesn't update every time you type something in the input
  const [sendTodo, setSendTodo] = useState([]);
  const [clicked, setClicked] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await getTodos();
      setTodos(data);
    };
    fetchData();
  }, [sendTodo, clicked]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    await updateTodos(newTodo);
    //updating the useEffect to reload the page
    setSendTodo((prev) => [...prev, newTodo]);
    setNewTodo('');
  };
  const check = async (todo) => {
    await updateStatus(todo.id);
    setClicked((prev) => [...prev, todo.id]);
  };
  return (
    <div>
      <form action="">
        <input
          type="text"
          value={newTodo}
          placeholder="Todo's"
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={handleUpdate}>Add Todo</button>
      </form>
      {todos.map((todo) => (
        <StyledContainer key={todo.id}>
          <StyledP className={todo.complete === true ? 'active' : ''} onClick={() => check(todo)}>
            {todo.todo}
          </StyledP>
        </StyledContainer>
      ))}
    </div>
  );
}
const StyledContainer = styled.div`
  .active {
    text-decoration: underline;
    color: red;
  }
`;
const StyledP = styled.p`
  color: white;
  }
`;
export default Todo;
