import React from 'react';



class App extends React.Component {

    state = {
        value:'',
        Username: '',
        MoneySpent: '',
        Amount:  ''
    };



getValue = (event) => {
const name = event.target.name;
const value = event.target.value;
this.setState({ [name]: value });
}




handleSubmit = (event) => {
    event.preventDefault();
  const Username = this.state.Username;
  const MoneySpent = this.state.MoneySpent;
  const Description = this.state.Description;
  
  console.log('Username on submits: ',Username);
  console.log('MoneySpnet on submits: ',MoneySpent);
  console.log('Description on submits: ',Description);

};
    render() {
        console.log('States: ',this.state);

    

return (
    <div>
    <h2> Budgeting Web App</h2>
    <form action="">
    <div>
            <label htmlFor=""></label>
            <input type="Username" onChange = { this.getValue } name='Username'/>
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="MoneySpent" onChange = { this.getValue } name='MoneySpent'/>
        </div>
        <div>
            <label htmlFor=""></label>
            <input type="Description" onChange = { this.getValue } name='Description'/>
        </div>
        <button onClick = {this.handleSubmit }>Submit</button>
    </form>
    </div>
   );
  }
}
 export default App ;