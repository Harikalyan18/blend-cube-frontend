import { useState } from 'react'
import axios from 'axios'
// import { useMember } from '../../contexts/MemberContext'

export default function MemberForm() {

    // const { memberDispatch } = useMember()

    const [ memberForm, setMemberForm ] = useState({
        fullName: '',
        image: '',      
        fullAddress: '',
        occupation: '',
        purpose: '',
        aadharNo: '',
        document: ''
    })

    const handleChange = (e) => {
        const { name, value} = e.target
        setMemberForm({...memberForm, [name]: value })
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0]
        setMemberForm({...memberForm, image: file})
    }

    const handleDocumentChange = (e) => {
        const file = e.target.files[0]
        setMemberForm({...memberForm, document: file})
    }

    const handleSubmit = async(e) => {
        e.preventDefault() 
        const formData = {
            fullName: memberForm.fullName,
            image: memberForm.image,
            personalDetails: {
                fullAddress: memberForm.fullAddress,
                occupation: memberForm.occupation,
                purpose: memberForm.purpose,
                aadharNo: memberForm.aadharNo,
                document: memberForm.document
            }
        }

        try {
            const response = await axios.post('http://localhost:3010/api/members', formData, {
                headers: {
                    Authorization: localStorage.getItem('token'),
                    'Content-Type': 'multipart/form-data'
                }
            })
            console.log(response.data)
            // memberDispatch({ type: 'ADD_MEMBER_DETAILS', payload: response.data})

        } catch(err){
            console.log(err)
        }
    }

    return (
        <>
            <h2>Add Member</h2>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='fullName'> Enter FullName</label>
                <input
                    type="text"
                    value={memberForm.fullName}
                    onChange={handleChange}
                    name="fullName"
                    id="fullName"
                />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="file" 
                    onChange={handleImageChange} 
                    name="image" 
                    id="image" 
                />
            </div>
            <div>
                <label htmlFor='fullAddress'>Full Address</label>
                <input
                    type="text"
                    value={memberForm.fullAddress}
                    onChange={handleChange}
                    name="fullAddress"
                    id="fullAddress"
                />
            </div>
            <div>
                <label htmlFor='occupation'>Occupation</label>
                <input
                    type="text"
                    value={memberForm.occupation}
                    onChange={handleChange}
                    name="occupation"
                    id="occupation"
                />
            </div>
            <div>
                <label htmlFor='purpose'>Purpose</label>
                <input
                    type="text"
                    value={memberForm.purpose}
                    onChange={handleChange}
                    name="purpose"
                    id="purpose"
                />
            </div>
            <div>
                <label htmlFor='aadharNo'>Aadhar No</label>
                <input
                    type="number"
                    value={memberForm.aadharNo}
                    onChange={handleChange}
                    name="aadharNo"
                    id="aadharNo"
                />
            </div>
            <div>
                <label htmlFor='document'>Document</label>
                <input
                    type="file"
                    value={memberForm.document}
                    onChange={handleDocumentChange}
                    name="document"
                    id="document"
                />
            </div>
            <input type="submit" />
            </form>
        </>
    )
}
