import React, { Component } from 'react';
//import axios, { Component } from 'axios';
import axios from 'axios';

class Home extends Component {
  constructor(){
    super();
    this.state = {
      //userObj:{
        username:'',
        email:'',
        password:'',
        age:''
      //}
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
        <button onClick={(e) => this.submit(e)}> submit </button> <br /><br /><br />
        <button> View User </button>

      </div>  
    );
  }
  change(e){
    //console.log(e.target.name);
    //{this.state.username} - {this.state.email} - {this.state.password} - {this.state.age}

    this.setState({[e.target.name]: e.target.value});
  }
  submit() {
    console.log("state--- "+JSON.stringify(this.state));
    axios.post('http://localhost:3003/api/userEntry', this.state)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default Home;
