function CreateAccount() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isBtnDisabled, setIsBtnDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      // setStatus('Error: ' + label);
      setTimeout(() => setStatus(""), 3000);
      appendAlert(`Error: ${label} cannot be blank`, "danger");
      return false;
    }

    if (label === "password" && field.length < 8) {
      setTimeout(() => setStatus(""), 3000);
      appendAlert(
        `Error: password must be at least 8 characters long`,
        "danger"
      );
      return false;
    }

    return true;
  }

  function handleCreate() {
    if (!validate(name, "name")) return;
    if (!validate(email, "email")) return;
    if (!validate(password, "password")) return;
    ctx.users.push({ name, email, password, balance: 0, activity: [] });
    ctx.users[ctx.users.length - 1].activity.push({
      action: "Account Created",
      datetime: new Date(),
      amount: "",
    });
    appendAlert("Account successfully created", "success");
    setShow(false);
  }

  function clearForm() {
    setName("");
    setEmail("");
    setPassword("");
    setShow(true);
  }

  return (
    <div>
      <Card
        txtcolor="dark"
        header="Create Account"
        status={status}
        body={
          show ? (
            <>
              Name
              <br />
              <input
                type="input"
                className="form-control"
                id="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => {
                  setName(e.currentTarget.value); 
                  (name.length && email.length && password.length) ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
                }}
              />
              <br />
              Email address
              <br />
              <input
                type="input"
                className="form-control"
                id="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => {
                  setEmail(e.currentTarget.value); 
                  (name.length && email.length && password.length) ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
                }}
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
                onChange={(e) => {
                  setPassword(e.currentTarget.value); 
                  (name.length && email.length && password.length) ? setIsBtnDisabled(false) : setIsBtnDisabled(true);
                }}
              />
              <br />
              <button
                type="submit"
                className="btn btn-primary"
                onClick={handleCreate}
                disabled={isBtnDisabled}
                id="createAccountBtn"
              >
                Create Account
              </button>
            </>
          ) : (
            <>
              <h5>Success</h5>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={clearForm}
              >
                Add another account
              </button>
            </>
          )
        }
      />
    </div>
  );
}
