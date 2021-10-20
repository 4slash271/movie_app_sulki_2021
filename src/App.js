import React from 'react';

function Food({menu}){
  return (
    <h1>I like {menu}</h1>
  )
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
    </div>
   
  );
}

export default App;
