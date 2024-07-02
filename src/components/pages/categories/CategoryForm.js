import { useState } from 'react'
import axios from 'axios'
import { useCategory } from '../../contexts/CategoriesContext'

export default function CategoryForm() {

    const { categoriesDispatch } = useCategory()
    const [form, setForm] = useState({
        name: '',
        description:''
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setForm({...form, [name]: value})
    }
    const handleSubmit = async(e) => {
        e.preventDefault()
        const formData = {
            name: form.name,
            description: form.description
        }
        try {
            const response = await axios.post('http://localhost:3010/api/categories', formData, {        
                headers: {
                    'Authorization': localStorage.getItem('token')
                }   
            })
            console.log(response.data)
            categoriesDispatch({ type: 'ADD_CATEGORY', payload: response.date})

        } catch(err) {
            console.log(err)
        }
    }
    return (
            <form onSubmit={ handleSubmit}>
                <div>
                    <label htmlFor='name'>Category Name</label>
                    <input
                        type="text"
                        value={form.name}
                        onChange={handleChange}
                        name="name"
                        id="name"
                    />
                </div>
                <div>
                    <label htmlFor='description'>Description</label>
                    <textarea
                        value={form.description}
                        onChange={handleChange}
                        name="description"
                        id="description"
                    />
                </div>
                <input type="submit" />
            </form>        
    )
}