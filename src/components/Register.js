import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export default function Register() {
    const [register, setRegister] = useState({
        username:'',
        email: '',
        password:''
    })
    const navigate = useNavigate()
    const handleChange = (e) => {
        const { name, value} = e.target
        setRegister({...register , [name]:value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        try{
            const formData = {
                username:register.username,
                email:register.email,
                password:register.password
            }
            console.log(formData)
            const response = await axios.post('http://localhost:3010/api/users/register' , formData)
            console.log(response.data)
            navigate('/login')
        } catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmalFor='username'>Username</label>
                <input 
                    type='text' 
                    value={register.username} 
                    name= 'username' 
                    onChange = {handleChange}/>
                 <label htmalFor='email'>email</label>
                <input 
                    type='text' 
                    value={register.email} 
                    name= 'email' 
                    onChange = {handleChange}/>
                 <label htmalFor='passwored'>password</label>
                <input 
                    type='password' 
                    value={register.password} 
                    name= 'password' 
                    onChange = {handleChange}/>
                <input type='submit' />
            </form>
        </div>
    )
}