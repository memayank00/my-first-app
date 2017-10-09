import React, { Component } from 'react';
//import axios, { Component } from 'axios';
import axios from 'axios';

class Login extends Component {
  constructor(){
    super();
    this.state = {
      //userObj:{
        email:'',
        password:''
      //}
    }
  }
  render() {
    return (
      <div>
       
        Email - <input type="text" name="email" onChange={(e) => this.change(e)}/>
        Password - <input type="password" name="password" onChange={(e) => this.change(e)}/>
       
        <span>    </span>
        <button onClick={(e) => this.submit(e)}> submit </button> <br /><br /><br />
        

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
    axios.post('http://localhost:3003/api/userLogin', this.state)
    .then(function (response) {
      
      if(response.data.status===200){
        console.log('response-- '+JSON.stringify(response.data));
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
}

export default Login;
