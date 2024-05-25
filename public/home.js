function Home(){

  return (
    <Card
      txtcolor="black"
      header="Blues Bank"
      title="Welcome to your bank!"
      text="Access your account information, make deposits or withdrawls, and see your recent activity."
      body={(<img src="bank.png" className="img-fluid" alt="Responsive image"/>)}
    />    
  );  
}
