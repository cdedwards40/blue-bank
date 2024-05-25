function Balance(){
  const ctx = React.useContext(UserContext);

  return (ctx.currentUser != null ?
    (<Card
      txtcolor="dark"
      header="Balance"
      text={`Balance: $${ctx.users[ctx.currentUser].balance.toFixed(2)}`}
    />
    ):(
      "Please log in"
    )

  )
}