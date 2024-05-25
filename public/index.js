function Spa() {
  return (
    <HashRouter>
      <NavBar />

      <UserContext.Provider
        value={{
          users: [
            {
              name: "abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
              activity: [],
            },
          ],
          currentUser: null,
        }}
      >
        <div className="container" style={{ padding: "20px" }}>
          <Route path="/" exact component={Home} />
          <Route path="/create/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
        <div
          className="container fixed-bottom"
          style={{ paddingLeft: "10%", paddingRight: "10%" }}
          id="liveAlertPlaceholder"
        ></div>
      </UserContext.Provider>
    </HashRouter>
  );
}

let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Spa />);
