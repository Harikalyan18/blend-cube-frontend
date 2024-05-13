import axios from 'axios'
import { useState } from 'react'
import { useAuth } from './contexts/AuthContext'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const navigate = useNavigate()
    const { handleLogin } = useAuth()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = {
            email, 
            password
        }
        console.log(formData)
        try {
            const response = await axios.post('http://localhost:3010/api/users/login', formData)
                console.log(response.data)
                localStorage.setItem('token' , response.data.token)
            const userResponse = await axios.get('http://localhost:3010/api/users/account', {
                headers: {
                    Authorization: localStorage.getItem('token')
                }
            })
            handleLogin(userResponse.data)
            navigate('/')

        } catch(err) {
            console.log(err)
        }

    }

    return (
        <div> 
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input 
                    type="text"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value)
                    }}
                /><br />
                <label htmlFor="password">Password</label>
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value)
                    }}
                /><br />
                <input type="submit" />
            </form>
        </div>
    )
}