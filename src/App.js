import React, { Component } from 'react';
//import axios, { Component } from 'axios';
import {Router} from './router'

class App extends Component {
  
  render() {
    return (
     <Router/>
    );
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


