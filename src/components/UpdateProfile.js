import React, { useRef, useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {useHistory} from 'react-router-dom'

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser , updatePassword,updateEmail} = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const history=useHistory();

  const promises=[]


  function Cancelfun()
  {
    history.push("/")
  }

  function handleSubmit(e) {

    e.preventDefault();
    setLoading(true)
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError('passwords do not match')
    }

    if (passwordRef.current.value) {
      promises.push(updatePassword(passwordRef.current.value))
    }

    if(emailRef.current.value!==currentUser.email)
    {
      promises.push(updateEmail(emailRef.current.value))
    }

    Promise.all(promises).then(()=>{
      history.push("/")
    }).catch(()=>{
      setError('failed to update')
    }).finally(()=>{
      setLoading(false)
    })

  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Profile</h2>
          {error && <Alert variant="danger" style={{textAlign:'center'}}>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="leave blank to keep it same" ref={passwordRef}  />
            </Form.Group>
            <Form.Group id="password-confirm">
              <Form.Label>Password Confirmation</Form.Label>
              <Form.Control type="password" placeholder="leave blank to keep it same" ref={passwordConfirmRef}  />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit" disabled={loading} >
              Update 
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-4">
        <Button variant="link" onClick={Cancelfun} style={{ textDecoration: 'none' }}>Cancel</Button>
        </div>
    </>
  );

}