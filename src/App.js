import React, { Component } from 'react';
//import axios, { Component } from 'axios';
import axios from 'axios';

class App extends Component {
  constructor(){
    super();
    this.state = {
      userObj:{
        username:'',
        email:'',
        password:'',
        age:''
      }
    }
  }
  render() {
    return (
      <div>
        Username - <input type="text" name="username" onChange={(e) => this.change(e)}/>
        Email - <input type="text" name="email" onChange={(e) => this.change(e)}/>
        Password - <input type="password" name="password" onChange={(e) => this.change(e)}/>
        Age - <input type="number" name="age" onChange={(e) => this.change(e)}/>
        <span>    </span>
        <button onClick={(e) => this.submit(e)}> submit </button>
        {this.state.username} - {this.state.email} - {this.state.age}
      </div>  
    );
  }
  change(e){
    //console.log(e.target.name);
    this.setState({[e.target.name]: e.target.value});
  }
  submit() {
    console.log("state--- "+JSON.stringify(this.state));
   /* axios.post('localhost:9000/api/testReact', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });*/
  }
}

export default App;















































/*class App extends Component {
  constructor(){
    super();
    this.state = {
      userObj:{
        username:'',
        email:'',
        age:''
      }
    }
  }
  render() {
    return (
      <div>
        Username - <input type="text" name="username" onChange={(e) => this.usernameChange(e)}/>
        Email - <input type="text" name="email" onChange={(e) => this.emailChange(e)}/>
        Age - <input type="number" name="age" onChange={(e) => this.ageChange(e)}/>
        <span>    </span>
        <button onClick={(e) => this.submit(e)}> submit </button>
        {this.state.username} - {this.state.email} - {this.state.age}
      </div>  
    );
  }
  usernameChange(e){
    console.log(e.target.name);
    let username = e.target.value ;
    this.setState({username:username});
  }
  emailChange(e){
    console.log(e.target.name);
    let email = e.target.value ;
    this.setState({email:email})
  }
  ageChange(e){
    console.log(e.target.name);
    let age = e.target.value ;
    this.setState({age:age})
  }
  submit() {
    console.log(this.state)
  }
}*/


