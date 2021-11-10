import React from "react";
import { BrowserRouter,Route, Switch} from "react-router-dom";
import Home from "./routes";
import About from "./routes";

function App() {
  return (
    <BrowserRouter>
    <Switch>
     
        <Route path="/" exact={true} component={Home}/>
        <Route path="/about" component={About}/>
    
      </Switch>
    </BrowserRouter>
  );
}

export default App;