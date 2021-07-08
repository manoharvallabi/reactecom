import React, { useRef, useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link,useHistory} from 'react-router-dom'


export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const history=useHistory();

  async function handleSubmit(e) {

    e.preventDefault();

    try {
        setError('')
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value)
      history.push("/")
    }
    catch
    {
      setError('failed to login')
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Sign In</h2>
          {error && <Alert variant="danger" style={{textAlign:'center'}}>{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" ref={passwordRef} required />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit" disabled={loading} >
              Sign in
            </Button>
            <div className="w-100 text-center mt-2">
        <Link to="/reset-password" style={{ textDecoration: 'none' }}>Forgot Password? </Link>
      </div>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        Create a account? <Link to="/signup" style={{ textDecoration: 'none' }}>Sign Up</Link>
      </div>
    </>
  );

}