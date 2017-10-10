import React, { Component } from 'react';
//import axios, { Component } from 'axios';
import axios from 'axios';

class ViewUser extends Component {
  constructor(){
    super();
    this.state = {
        username:'',
        email:'',
        password:'',
        age:''
    }
  }
  render() {
    return (
      <div>
       
       {this.getAllUser()}
        

      </div>  
    );
  }
  
  getAllUser() {
    console.log("state--- "+JSON.stringify(this.state));
    axios.post('http://localhost:3003/api/getAllUser')
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

export default ViewUser;
