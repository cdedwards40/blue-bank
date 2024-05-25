function Login() {
  const [show, setShow] = React.useState(true);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const history = ReactRouterDOM.useHistory();
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    return !field ? false : true;
  }

  function handleLogin() {
    if (!validate(email, "email")) {
      appendAlert("No email provided", "danger");
      return;
    }
    if (!validate(password, "password")) {
      appendAlert("No password provided", "danger");
      return;
    }

    ctx.users.forEach((user, i) => {
      if (user.email === email && user.password === password) {
        ctx.currentUser = i;
        history.push("/balance");
        return;
      }
      if (i + 1 == ctx.users.length) {
        ctx.currentUser = null;
        appendAlert("Incorrect email/password combination", "danger");
      }
    });
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <Card
      txtcolor="dark"
      header="Login"
      status={status}
      body={
        show ? (
          <>
            Email address
            <br />
            <input
              type="input"
              className="form-control"
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
            <br />
            Password
            <br />
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
            <br />
            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleLogin}
            >
              Login
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>
              Add another account
            </button>
          </>
        )
      }
    />
  );
}
