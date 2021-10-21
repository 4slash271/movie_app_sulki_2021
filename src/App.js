import React from 'react';

function Food({menu}){
  return (
    <h1>I like {menu}</h1>
  )
}
function Animal({pets}){
  return<h2>I like also a {pets}</h2>
}

function App() {
  return (
    <div>Hello!!
      <Food menu="kimchi"/>
      <Food menu="bibimbap"/>
      <Food menu="gimbap"/>
      <Food menu="pizza"/>
      <Food menu="ramen"/>
      <Food menu="jajangmyeon"/>
      <Food menu="chicken"/>
      <Animal pets = "cat"/>
      <Animal pets = "rabbit"/>
      <Animal pets = "dog"/>
      <Animal pets = "rat"/>
      <Animal pets = "bear"/>
      <Animal pets = "bird"/>
    </div>
   
  );
}

export default App;
