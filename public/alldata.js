function AllData() {
  const ctx = React.useContext(UserContext);

  return ctx.currentUser != null ? (
    <Card
      txtcolor="dark"
      header="All Data"
      text={`Name: ${ctx.users[ctx.currentUser].name}`}
      body={
        <div>
          <table className="table">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Activity</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody>
              {ctx.users[ctx.currentUser].activity.reverse().map((x, i) => (
                <tr key={i}>
                  <td>{x.datetime.toISOString().split("T")[0]}</td>
                  <td>{x.action}</td>
                  <td>{`$${x.amount}`}</td>
                </tr>
              ))}
            </tbody>
          </table>

          {ctx.users[ctx.currentUser].activity.length ? null : "No activity"}
        </div>
      }
    />
  ) : (
    "Please log in"
  );
}
