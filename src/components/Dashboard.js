import React,{useState} from 'react'
import {Card, Button ,Alert} from "react-bootstrap"
import {Link,useHistory} from 'react-router-dom'
import {useAuth} from '../contexts/AuthContext'

export default function Dashboard() {

    const history=useHistory();
    const {logout}= useAuth();
    const [error,setError]=useState('');

    async function handleLogOut()
    {
        try{
            await logout();
            setError('');
            history.push("/signin")
        }catch{
            setError('failed to log out')
        }
    }
    const {currentUser} =useAuth();
    return (
        <>
        <Card>
            <Card.Body>
            <h2 className="text-center mb-3">Profile</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <strong>Email:</strong>{currentUser.email}
            <Link to="/update-profile" className="btn btn-primary w-100 mt-4" >Update Profile</Link>
            </Card.Body>
        </Card>
        <div className="w-100 text-center mt-4">
        <Button variant="link" onClick={handleLogOut} style={{ textDecoration: 'none' }}>Log Out</Button>
        </div>
        </>
    )
}
