
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useMember } from '../../contexts/MemberContext';

export default function MemberDetailsForm(props) {
    const { member, memberDispatch } = useMember();

    const [memberForm, setMemberForm] = useState({
        fullName: '',
        image: null,
        personalDetails: {
            fullAddress: '',
            aadharNo: '',
            occupation: '',
            purpose: '',
            document: null
        }
    });

    useEffect(() => {
        if (member && member.data && member.data.personalDetails) {
            setMemberForm({
                fullName: member.data.fullName || '',
                image: member.data.image || null,
                personalDetails: {
                    fullAddress: member.data.personalDetails.fullAddress || '',
                    occupation: member.data.personalDetails.occupation || '',
                    purpose: member.data.personalDetails.purpose || '',
                    aadharNo: member.data.personalDetails.aadharNo || '',
                    document: member.data.personalDetails.document || null
                }
            });
        }
    }, [member]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name in memberForm.personalDetails) {
            setMemberForm({
                ...memberForm,
                personalDetails: { ...memberForm.personalDetails, [name]: value }
            });
        } else {
            setMemberForm({ ...memberForm, [name]: value });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setMemberForm({ ...memberForm, image: file });
    };

    const handleDocumentChange = (e) => {
        const file = e.target.files[0];
        setMemberForm({ ...memberForm, personalDetails: { ...memberForm.personalDetails, document: file } });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('fullName', memberForm.fullName);
        if (memberForm.image) {
            formData.append('image', memberForm.image);
        }
        formData.append('personalDetails[fullAddress]', memberForm.personalDetails.fullAddress);
        formData.append('personalDetails[occupation]', memberForm.personalDetails.occupation);
        formData.append('personalDetails[purpose]', memberForm.personalDetails.purpose);
        formData.append('personalDetails[aadharNo]', memberForm.personalDetails.aadharNo);
        if (memberForm.personalDetails.document) {
            formData.append('personalDetails[document]', memberForm.personalDetails.document);
        }

        try {
            if (member && member.data && member.data._id) {
                console.log('came to update the member')
                const memberResponse = await axios.put(`http://localhost:3010/api/members/${member.data._id}`, formData, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                memberDispatch({ type: 'UPDATE_MEMBER_DETAILS', payload: memberResponse.data });
                props.toggle()
            } else {
                console.log('came to create the record')
                const response = await axios.post('http://localhost:3010/api/members', formData, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                memberDispatch({ type: 'ADD_MEMBER_DETAILS', payload: response.data });
            }

            setMemberForm({
                fullName: '',
                image: null,
                personalDetails: {
                    fullAddress: '',
                    aadharNo: '',
                    occupation: '',
                    purpose: '',
                    document: null
                }
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='fullName'>Full Name</label>
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
                        value={memberForm.personalDetails.fullAddress}
                        onChange={handleChange}
                        name="fullAddress"
                        id="fullAddress"
                    />
                </div>
                <div>
                    <label htmlFor='occupation'>Occupation</label>
                    <input
                        type="text"
                        value={memberForm.personalDetails.occupation}
                        onChange={handleChange}
                        name="occupation"
                        id="occupation"
                    />
                </div>
                <div>
                    <label htmlFor='purpose'>Purpose</label>
                    <input
                        type="text"
                        value={memberForm.personalDetails.purpose}
                        onChange={handleChange}
                        name="purpose"
                        id="purpose"
                    />
                </div>
                <div>
                    <label htmlFor='aadharNo'>Aadhar No</label>
                    <input
                        type="number"
                        value={memberForm.personalDetails.aadharNo}
                        onChange={handleChange}
                        name="aadharNo"
                        id="aadharNo"
                    />
                </div>
                <div>
                    <label htmlFor='document'>Document</label>
                    <input
                        type="file"
                        onChange={handleDocumentChange}
                        name="document"
                        id="document"
                    />
                </div>
                <input type="submit" />
            </form>
        </>
    );
}
