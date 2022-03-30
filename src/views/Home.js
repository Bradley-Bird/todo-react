import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signInUser, signupUser } from '../services/auth';
import Auth from '../components/Authform';

function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [type, setType] = useState('sign-in');
  const [currentUser, setCurrentUser] = useState(null);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (type === 'sign-in') {
      try {
        const resp = await signInUser(email, password);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
    } else
      try {
        const resp = await signupUser(email, password);
        setCurrentUser(resp.email);
      } catch (e) {
        setError(e.message);
      }
  };
  return (
    <div>
      {error && <p>{error}</p>}
      <Auth {...{ error, password, email, setEmail, setPassword, handleSubmit, type, setType }} />
    </div>
  );
}

export default Home;
