// import axios from 'axios'
// import { useState } from 'react'
// import { useAuth } from './contexts/AuthContext'
// // import { useNavigate } from 'react-router-dom'

// export default function Login() {

//     // const navigate = useNavigate()
//     const { handleLogin } = useAuth()

//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')

//     const handleSubmit = async(e) => {
//         e.preventDefault()
//         const formData = {
//             email, 
//             password
//         }
//         console.log(formData)
//         try {
//             const response = await axios.post('http://localhost:3010/api/users/login', formData)
//                 console.log('res',response.data)
//                 localStorage.setItem('token' , response.data.token)
//             const userResponse = await axios.get('http://localhost:3010/api/users/account', {
//                 headers: {
//                     Authorization: localStorage.getItem('token')
//                 }
//             })
//             handleLogin(userResponse.data)
//             // if(userResponse.data.role == 'member'){
//             //     navigate('/')
//             // }
//             // if(userResponse.data.role == 'owner'){
//             //     navigate('/')
//             // }
//             // if(userResponse.data.role == 'admin'){
//             //     navigate('/dashboard')
//             // }

//         } catch(err) {
//             console.log(err)
//         }

//     }

//     return (
//         <div> 
//             <h1>Login</h1>
//             <form onSubmit={handleSubmit}>
//                 <label htmlFor="email">Email</label>
//                 <input 
//                     type="text"
//                     value={email}
//                     onChange={(e) => {
//                         setEmail(e.target.value)
//                     }}
//                 /><br />
//                 <label htmlFor="password">Password</label>
//                 <input 
//                     type="password"
//                     value={password}
//                     onChange={(e) => {
//                         setPassword(e.target.value)
//                     }}
//                 /><br />
//                 <input type="submit" />
//             </form>
//         </div>
//     )
// }


import React, { useState } from 'react';
import { Form, Button, Container, Row, Col, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useAuth } from './contexts/AuthContext';
// import { useNavigate } from 'react-router-dom';

export default function Login() {
    // const navigate = useNavigate();
    const { handleLogin } = useAuth();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            email,
            password,
        };
        console.log(formData);
        try {
            const response = await axios.post('http://localhost:3010/api/users/login', formData);
            console.log('res', response.data);
            localStorage.setItem('token', response.data.token);
            const userResponse = await axios.get('http://localhost:3010/api/users/account', {
                headers: {
                    Authorization: localStorage.getItem('token'),
                },
            });
            handleLogin(userResponse.data);
            // if(userResponse.data.role === 'member'){
            //     navigate('/');
            // }
            // if(userResponse.data.role === 'owner'){
            //     navigate('/');
            // }
            // if(userResponse.data.role === 'admin'){
            //     navigate('/dashboard');
            // }
        } catch (err) {
            console.log(err);
            setError('Login failed. Please check your credentials.');
        }
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md={6}>
                    <h1 className="text-center">Login</h1>
                    {error && <Alert variant="danger">{error}</Alert>}
                    <Form onSubmit={handleSubmit}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email"
                            />
                        </Form.Group>

                        <Form.Group controlId="formPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Enter your password"
                            />
                        </Form.Group>

                        <Button variant="primary" type="submit" className="w-100 mt-3">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
