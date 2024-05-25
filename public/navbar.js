function NavBar() {
return (
<nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><a href="#/" class="nav-link link-body-emphasis px-2 active" aria-current="page" data-toggle="tooltip" data-placement="bottom" title="Home">Home</a></li>
        <li class="nav-item"><a href="#/deposit/" class="nav-link link-body-emphasis px-2" data-toggle="tooltip" data-placement="bottom" title="Make a deposit">Deposit</a></li>
        <li class="nav-item"><a href="#/withdraw/" class="nav-link link-body-emphasis px-2" data-toggle="tooltip" data-placement="bottom" title="Make a withdraw">Withdraw</a></li>
        <li class="nav-item"><a href="#/alldata/" class="nav-link link-body-emphasis px-2" data-toggle="tooltip" data-placement="bottom" title="Recent activity">All Data</a></li>
      </ul>
      <ul class="nav">
        <a href="#/login/"><button type="button" className="btn btn-outline-dark me-2">Login</button></a>
        <a href="#/create/"><button type="button" className="btn btn-warning">Create Account</button></a>
      </ul>
    </div>
  </nav>
)









  return (
  <>
    <header className="p-3 text-bg-dark">
      <nav className="navbar">
      <div className="container-fluid">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a href="#/" className="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none">
            <svg className="bi me-2" width="40" height="32" role="img" aria-label="Bootstrap"><use href="#bootstrap"/></svg>            
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li className="nav-item"><a href="#/" className="nav-link px-2 active">Home</a></li>
            <li className="nav-item"><a href="#/deposit/" className="nav-link px-2">Deposit</a></li>
            <li className="nav-item"><a href="#/withdraw/" className="nav-link px-2">Withdraw</a></li>
            <li className="nav-item"><a href="#/alldata/" className="nav-link px-2">All Data</a></li>
          </ul>

          <div className="text-end">
            <a href="#/login/"><button type="button" className="btn btn-outline-light me-2">Login</button></a>
            <a href="#/create/"><button type="button" className="btn btn-warning">Create Account</button></a>
          </div>
        </div>
      </div>
      </nav>
    </header>
  </>
  )
  }

  // return(
  //   <>
  //   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  //     <a className="navbar-brand" href="#">BadBank</a>
  //     <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  //       <span className="navbar-toggler-icon"></span>
  //     </button>
  //     <div className="collapse navbar-collapse" id="navbarNav">
  //       <ul className="navbar-nav">
  //         <li className="nav-item">
  //           <a className="nav-link"  aria-current="page" href="#/">Home</a>
  //           {/* <span class="sr-only">(current)</span> */}
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/CreateAccount/">Create Account</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/login/">Login</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/deposit/">Deposit</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/withdraw/">Withdraw</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/balance/">Balance</a>
  //         </li>
  //         <li className="nav-item">
  //           <a className="nav-link" href="#/alldata/">AllData</a>
  //         </li>          
  //       </ul>
  //     </div>
  //   </nav>
  //   </>
  // );
  // }