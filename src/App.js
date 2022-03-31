import './App.css';
import { useState } from 'react';
import Home from './views/Home';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Todo from './views/Todo';
import { getUser } from './services/auth';

function App() {
  const user = getUser();
  const [currentUser, setCurrentUser] = useState(user);
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route path="/todo">{currentUser ? <Todo /> : <Redirect to="/" />}</Route>
          <Route path="/">
            {currentUser ? <Redirect to="/todo" /> : <Home {...{ setCurrentUser }} />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
