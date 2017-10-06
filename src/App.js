import React, { Component } from 'react';


class App extends Component {
  constructor(){
    super();
    this.state = {
      username:''
    }
  }
  render() {
    return (
      <div>
        <input type="text" name="username" onChange={(e) => this.submit(e)}/>
        {this.state.username}
      </div>  
    );
  }
  submit(e){
    
    let username = e.target.value ;
    this.setState({username:username})
  }
}

export default App;
