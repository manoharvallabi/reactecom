import './App.css';
import Login from './components/Login/Login.js'
import HomePage from './components/HomePage/HomePage.js'
import React, { useState } from 'react';


function App() {


  const [state, setState] = useState(false);

  const [mymsg,setMymsg]=useState("");

  const[uname,setUname]=useState("");

  function authentication(username, password) {

    console.log(username, password);


    if (username === "abc" && password !== "") {
      setUname(username);
      setState(!state);
    }
    else{
      setMymsg("please enter valid credentials");
    }

  }





  return (
    <div className="App">
      {!state && <Login auth={authentication} message={mymsg}/>}
      {state && <HomePage data={uname} />}
    </div>
  );
}

export default App;
