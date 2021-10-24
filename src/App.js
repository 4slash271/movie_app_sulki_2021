import React from 'react';
import PropTypes from 'prop-types';

class App extends React.Component{
  state= {
    count:0
  };//바꿀 데이터는 state 안에

  add = () =>{
    console.log("add");
  };

  minus = () =>{
    console.log("minus");
  };
  render(){
    return (
    <div>
      <h2>The number is {this.state.count}</h2>
    <button onClick = {this.add}>Add</button>
    <button onClick = {this.minus}>Minus</button>
    </div>);
  }//class component는 확장 필수
}

export default App;
