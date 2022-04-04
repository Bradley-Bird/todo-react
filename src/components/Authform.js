function Auth({ password, email, setEmail, setPassword, handleSubmit, setType }) {
  return (
    <>
      <div>
        <h4>
          <span onClick={() => setType('sign-in')}>Sign In</span>

          <span onClick={() => setType('sign-up')}>Sign Up</span>
        </h4>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button>Sign In</button>
        </form>
      </div>
    </>
  );
}

export default Auth;
