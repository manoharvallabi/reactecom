import './App.css';
import Login from './components/Login/Login.js'
import HomePage from './components/HomePage/HomePage.js'
import React, { useState } from 'react';


function App() {


  const [state, setState] = useState(false);

  const[uname,setUname]=useState("");

  function authentication(username, password) {

    console.log(username, password);


    if (username !== "" && password !== "") {
      setUname(username);
      setState(!state);
    }

  }





  return (
    <div className="App">
      {!state && <Login auth={authentication} />}
      {state && <HomePage data={uname} />}
    </div>
  );
}

export default App;
