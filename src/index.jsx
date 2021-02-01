import React from "react";
import ReactDOM from "react-dom";
import Clients from './components/Clients'
import "bootstrap/dist/css/bootstrap.min.css";


const App = () => (
  <div>
    <h1 className="hello">Hello world!</h1>
    <Clients />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
