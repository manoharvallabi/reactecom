import React, { useRef, useState } from 'react';
import { Card, Form, Button,Alert } from 'react-bootstrap';
import { useAuth } from '../contexts/AuthContext';
import {Link} from 'react-router-dom'


export default function PasswordReset() {
  const emailRef = useRef();
  const { resetPassword } = useAuth();
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false);
  const [message,setMessage]=useState('')

  async function handleSubmit(e) {

    e.preventDefault();

    try {
        setError('')
        setMessage('')
      setLoading(true);
      await resetPassword(emailRef.current.value)
      setMessage('check you inbox for further instructions')
    }
    catch
    {
      setError('failed to reset password')
    }
    setLoading(false);
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Password Reset</h2>
          {error && <Alert variant="danger" style={{textAlign:'center'}}>{error}</Alert>}
          {message && <Alert variant="success" style={{textAlign:'center'}}>{message}</Alert>}

          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" ref={emailRef} required />
            </Form.Group>
            <br></br>
            <Button className="w-100" type="submit" disabled={loading} >
              Update Password
            </Button>
            <div className="w-100 text-center mt-2">
         <Link to="/signin" style={{ textDecoration: 'none' }}>Log In</Link>
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