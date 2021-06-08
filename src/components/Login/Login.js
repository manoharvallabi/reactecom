import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Login.css";
export default function Login(props)
{

  const[username,setUsername]=useState('');
  const[password,setPassword]=useState('');


  function updateName(e)
  {
    setUsername(e.target.value);
  }

  function updatePwd(e)
  {
    setPassword(e.target.value);
  }

    function handleSubmit(event) {
        event.preventDefault();
        // console.log(username);
        // console.log(password);
        props.auth(username,password);
      }

     

    
    return (
        <div className="Login">
          <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>User Name</Label>
        <Input type="text" name="username" onChange={updateName} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" onChange={updatePwd} />
      </FormGroup>
      < Button outline color="primary" >Submit</Button>
      <br></br><br></br>
      <h6 style={{ color: 'red' }}>{props.message}</h6>
      </Form>  
    </div>
    );
}