function Withdraw(){
  const [amount, setAmount] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);
  const ctx = React.useContext(UserContext);

  function validate(value) {
    // If user puts in a value that ends with a ".", remove the ".", then check
    if (value.endsWith("."))
      value = value.slice(0,value.length-1);
    
    // Check if converting the entry to a float and then string will give the same result
    // If there is a letter, this will not pass
    if (Number(value).toString() === value)
      return true;
    else if (value.includes("."))
      if ((Number(value.split(".")[0]).toString() === value.split(".")[0]) && (Number(value.split(".")[1]).toString() === value.split(".")[1]) && (value.split(".")[1].length <= 2))
        return true;

    // If there is a decimal, there should be two digits after the decimal place
    return false;
  }

  function handleWithdraw() {
    if (!validate(amount)) {
      appendAlert("Invalid withdraw amount.", "danger");
      return;
    }
    
    if (amount < 0) {
      appendAlert("Withdraw amount cannot be negative.", "danger");
      return;
    }
    
    if (amount > ctx.users[ctx.currentUser].balance) {
      appendAlert("Withdrawl amount greater than account balance.", "danger");
      return;
    }
    
    ctx.users[ctx.currentUser].balance -= Number(amount);
    ctx.users[ctx.currentUser].activity.push({action:"Withdrawl", datetime:(new Date),amount:amount});
    appendAlert("Withdrawl successful!","success")
    setAmount("")
  }

  function handleAmountChange(value) {
    setAmount(value); 
    
    // if a value is input, then enable button
    value ? setIsDisabled(false) : setIsDisabled(true)
  }

  return (ctx.currentUser != null ?
    (<Card
      txtcolor="dark"
      header="Withdrawl"
      text={`Balance: $${ctx.users[ctx.currentUser].balance.toFixed(2)}`}
      body={(
        <form>
          <div>
          Withdrawl Amount<br/>
            <input type="input" className="form-control" id="amount" placeholder="$0.00" value={amount} onChange={e => {handleAmountChange(e.currentTarget.value); e.preventDefault()}} /><br/>
          </div>
          <div>
            <button type="submit" className="btn btn-primary" onClick={e => {handleWithdraw(); e.preventDefault()}}disabled={isDisabled} id="withdrawlBtn">Withdrawl</button>
          </div>
        </form>
      )}
    />
    ):(
      "Please log in"
    )
  )
}