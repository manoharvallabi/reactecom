import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import "./Login.css";
import HomePage from '../HomePage/HomePage';
export default function Login()
{

  const[data,setData]=useState({
      username:'',
      password:''
  })

  const{username,password}=data;

  const handleChange =e =>{
    setData({...data,[e.target.name]:e.target.value})
  }
    

    function handleSubmit(event) {
        event.preventDefault();
        console.log(data);
      }

    
    return (
        <div className="Login">
          <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" name="username" onChange={handleChange} value={username} />
      </FormGroup>
      <FormGroup>
        <Label>Password</Label>
        <Input type="password" name="password" onChange={handleChange} value={password}/>
      </FormGroup>
      <Button outline color="primary">Submit</Button>
      </Form>  
    </div>
    );
}