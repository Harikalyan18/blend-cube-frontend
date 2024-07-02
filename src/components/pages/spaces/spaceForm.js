
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSpace } from '../../contexts/SpaceContext';

// export default function SpaceForm() {

//     const { spaceDispatch } = useSpace()

//     const [form, setForm] = useState({
//         name: '',
//         category: '',
//         type: [],
//         availableQuantity: '',
//         image: ''
//     });

//     const [categories, setCategories] = useState([]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleTypeChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedTypes = [...form.type];
//         updatedTypes[index][name] = value;
//         setForm({ ...form, type: updatedTypes });
//     };

//     const handleAddType = () => {
//         const dayValues = ['1day', '5day', '10day'];
//         const selectedDays = form.type.map((type) => type.day);
//         const allDaysSelected = dayValues.every((day) => selectedDays.includes(day));
//         const allDaysHavePrices = form.type.every((type) => type.price);

//         if (allDaysSelected && allDaysHavePrices) {
//             alert('All days already have prices assigned.');
//         } else {
//             setForm({
//                 ...form,
//                 type: [...form.type, { day: '', price: '' }]
//             });
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setForm({ ...form, image: file });
//     }

//     const handleRemoveType = (index) => {
//         const updatedTypes = [...form.type];
//         updatedTypes.splice(index, 1);
//         setForm({ ...form, type: updatedTypes });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = {
//             name: form.name,
//             category: form.category,
//             type: form.type,
//             availableQuantity: form.availableQuantity,
//             image: form.image
//         }
//         try {
//             const response = await axios.post(`http://localhost:3010/api/spaces/${id}`, formData, {
//                 headers: {
//                     'Authorization': localStorage.getItem('token')
//                 }
//             });
//             console.log(response.data);
//             spaceDispatch({ type: 'ADD_SPACE', payload: response.data})
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await axios.get('http://localhost:3010/api/get/categories');
//                 setCategories(response.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         })();
//     }, []);

//     return (
//         <>
//             <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor='name'>Space Name</label>
//                 <input
//                     type="text"
//                     value={form.name}
//                     onChange={handleChange}
//                     name="name"
//                     id="name"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='category'>Category</label>
//                 <select
//                     value={form.category}
//                     onChange={handleChange}
//                     name="category"
//                     id="category"
//                 >
//                     <option value=''>Select</option>
//                     {categories.map((ele) => (
//                         <option value={ele._id} key={ele._id}>{ele.name}</option>
//                     ))}
//                 </select>
//             </div>
//             <div>
//                 <button type="button" onClick={handleAddType} disabled={form.type.length === 3}>Add Type</button>
//                 {form.type.map((type, index) => (
//                     <div key={index}>
//                         <label htmlFor={`day_${index}`}>Day</label>
//                         <select
//                             value={type.day}
//                             onChange={(e) => handleTypeChange(index, e)}
//                             name='day'
//                             id={`day_${index}`}
//                         >
//                             <option value="">Select</option>
//                             {['1day', '5day', '10day'].map((dayValue) => (
//                                 <option
//                                     key={dayValue}
//                                     value={dayValue}
//                                     disabled={form.type.some((item, idx) => idx !== index && item.day === dayValue)}
//                                 >
//                                     {dayValue}
//                                 </option>
//                             ))}
//                         </select>
//                         <label htmlFor={`price_${index}`}>Price</label>
//                         <input
//                             type="text"
//                             value={type.price}
//                             onChange={(e) => handleTypeChange(index, e)}
//                             name='price'
//                             id={`price_${index}`}
//                         />
//                         <button type="button" onClick={() => handleRemoveType(index)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <label htmlFor='availableQuantity'>Available Quantity</label>
//                 <input
//                     type="text"
//                     value={form.availableQuantity}
//                     onChange={handleChange}
//                     name="availableQuantity"
//                     id="availableQuantity"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="image">Image</label>
//                 <input type="file" 
//                     onChange={handleImageChange} 
//                     name="image" 
//                     id="image" 
//                 />
//             </div>
//             <input type="submit" />
//         </form>
//     </>
//     )
// }




// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSpace } from '../../contexts/SpaceContext';
// import { useParams } from 'react-router-dom';

// export default function SpaceForm(props) {

//     const { id } = useParams();
//     const { spaces, spacesDispatch } = useSpace();

//     const space = spaces.data.find(ele => ele._id === props.editId)

//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [categories, setCategories] = useState([]);

//     useEffect(() => {
//         if (space) {
//             setSelectedCategory(space.category);
//         }
//     }, [space]);

//     const [form, setForm] = useState({
//         name: selectedCategory ? selectedCategory.name : '',
//         category: '',
//         type: [{ day: '', price: '' }], 
//         availableQuantity: '',
//         image: null
//     });

    
//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await axios.get('http://localhost:3010/api/categories');
//                 console.log(response.data)
//                 setCategories(response.data);
//             } catch (err) {
//                 console.log(err);
//             }
//         })();
//     }, []);
    
//     useEffect(() => {
//         if (space) {
//             setForm({
//                 name: space.name || '',
//                 category: space.category || '',
//                 type: space.type && space.type.length > 0 ? space.type.map(type => ({ day: type.days, price: type.price })) : [{ day: '', price: '' }],
//                 availableQuantity: space.availableQuantity || '',
//                 image: space.image || null
//             });
//         }
//     }, [space]);

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setForm({ ...form, [name]: value });
//     };

//     const handleTypeChange = (index, e) => {
//         const { name, value } = e.target;
//         const updatedTypes = [...form.type];
//         updatedTypes[index][name] = name === 'price' ? Number(value) : value;
//         setForm({ ...form, type: updatedTypes });
//     };

//     const handleAddType = () => {
//         const dayValues = ['1day', '5day', '10day'];
//         const selectedDays = form.type.map((type) => type.day);
//         const allDaysSelected = dayValues.every((day) => selectedDays.includes(day));
//         const allDaysHavePrices = form.type.every((type) => type.price);

//         if (allDaysSelected && allDaysHavePrices) {
//             alert('All days already have prices assigned.');
//         } else {
//             setForm({
//                 ...form,
//                 type: [...form.type, { day: '', price: '' }]
//             });
//         }
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setForm({ ...form, image: file });
//     };

//     const handleRemoveType = (index) => {
//         const updatedTypes = [...form.type];
//         updatedTypes.splice(index, 1);
//         setForm({ ...form, type: updatedTypes });
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         formData.append('name', form.name);
//         formData.append('category', form.category);
//         form.type.forEach((type, index) => {
//             formData.append(`type[${index}][day]`, type.day);
//             formData.append(`type[${index}][price]`, type.price);
//         });
//         formData.append('availableQuantity', Number(form.availableQuantity));
//         if (form.image) {
//             formData.append('image', form.image);
//         }

//         try {
//             if(space) {
//                 const spaceResponse = await axios.put(`http://localhost:3010/api/spaces/${props.editId}`, formData, {
//                     headers: {
//                         Authorization: localStorage.getItem('token'),
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 })
//                 console.log(spaceResponse.data)
//                 spacesDispatch({ type:'UPDATE_SPACE', payload: spaceResponse.data })
//                 props.toggle()
//             }

//             const response = await axios.post(`http://localhost:3010/api/spaces/${id}`, formData, {
//                 headers: {
//                     'Authorization': localStorage.getItem('token'),
//                     'Content-Type': 'multipart/form-data'
//                 }
//             });
//             console.log('sdffdf',response.data);
//             spacesDispatch({ type: 'ADD_SPACE', payload: response.data })
//         } catch (err) {
//             console.error(err);
//         }
//     };


//     return (
//         <form onSubmit={handleSubmit}>
//              <div>
//                 <label htmlFor='category'>Category</label>
//                 <select
//                     value={form.category}
//                     onChange={(e) => {
//                         handleChange(e);
//                         const selectedCategory = categories.find(cat => cat._id === e.target.value);
//                         if (selectedCategory) {
//                             setForm(prevForm => ({
//                                 ...prevForm,
//                                 name: selectedCategory.name // Update the name field based on the selected category
//                             }));
//                         }
//                     }}
//                     name="category"
//                     id="category"
//                 >
//                     <option value=''>Select</option>
//                     {categories.map((ele) => (
//                         <option value={ele._id} key={ele._id}>{ele.name}</option>
//                     ))}
//                 </select>
//             </div>

//             <div>
//                 <label htmlFor='name'>Space Name</label>
//                 <input
//                     type="text"
//                     value={form.name}
//                     // onChange={handleChange}
//                     readOnly
//                     name="name"
//                     id="name"
//                 />
//             </div>
//             <div>
//                 <button type="button" onClick={handleAddType} disabled={form.type.length === 3}>Add Type</button>
//                 {form.type.map((type, index) => (
//                     <div key={index}>
//                         <label htmlFor={`day_${index}`}>Day</label>
//                         <select
//                             value={type.day}
//                             onChange={(e) => handleTypeChange(index, e)}
//                             name='day'
//                             id={`day_${index}`}
//                         >
//                             <option value="">Select</option>
//                             {['1day', '5day', '10day'].map((dayValue) => (
//                                 <option
//                                     key={dayValue}
//                                     value={dayValue}
//                                     disabled={form.type.some((item, idx) => idx !== index && item.day === dayValue)}
//                                 >
//                                     {dayValue}
//                                 </option>
//                             ))}
//                         </select>
//                         <label htmlFor={`price_${index}`}>Price</label>
//                         <input
//                             type="number"
//                             value={type.price}
//                             onChange={(e) => handleTypeChange(index, e)}
//                             name='price'
//                             id={`price_${index}`}
//                         />
//                         <button type="button" onClick={() => handleRemoveType(index)}>Remove</button>
//                     </div>
//                 ))}
//             </div>
//             <div>
//                 <label htmlFor='availableQuantity'>Available Quantity</label>
//                 <input
//                     type="number"
//                     value={form.availableQuantity}
//                     onChange={handleChange}
//                     name="availableQuantity"
//                     id="availableQuantity"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="image">Image</label>
//                 <input type="file" 
//                     onChange={handleImageChange} 
//                     name="image" 
//                     id="image" 
//                 />
//             </div>
//             <input type="submit" />
//         </form>
//     );
// }


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpace } from '../../contexts/SpaceContext';
import { useParams } from 'react-router-dom';

export default function SpaceForm(props) {
    const { id } = useParams();
    const { spaces, spacesDispatch } = useSpace();
    const space = spaces.data.find(ele => ele._id === props.editId);

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [categories, setCategories] = useState([]);

    const [form, setForm] = useState({
        name: '',
        category: '',
        type: [{ day: '', hour: '', price: '' }], 
        availableQuantity: '',
        image: null
    });

    useEffect(() => {
        if (space) {
            setSelectedCategory(space.category);
            setForm({
                name: space.name || '',
                category: space.category || '',
                type: space.type && space.type.length > 0 ? space.type.map(type => ({ day: type.day || '', hour: type.hour || '', price: type.price })) : [{ day: '', hour: '', price: '' }],
                availableQuantity: space.availableQuantity || '',
                image: space.image || null
            });
        }
    }, [space]);

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3010/api/categories');
                setCategories(response.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleTypeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedTypes = [...form.type];
        updatedTypes[index][name] = name === 'price' ? Number(value) : value;
        setForm({ ...form, type: updatedTypes });
    };

    const handleAddType = () => {
        setForm({
            ...form,
            type: [...form.type, { day: '', hour: '', price: '' }]
        });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
    };

    const handleRemoveType = (index) => {
        const updatedTypes = [...form.type];
        updatedTypes.splice(index, 1);
        setForm({ ...form, type: updatedTypes });
    };

    // const handleSubmit = async (e) => {
    //     e.preventDefault();
    //     const formData = new FormData();
    //     formData.append('name', form.name);
    //     formData.append('category', form.category);
    //     form.type.forEach((type, index) => {
    //         if (form.name === 'meeting-room') {
    //             formData.append(`type[${index}][hour]`, type.hour);
    //         } else {
    //             formData.append(`type[${index}][day]`, type.day);
    //         }
    //         formData.append(`type[${index}][price]`, type.price);
    //     });
    //     formData.append('availableQuantity', Number(form.availableQuantity));
    //     if (form.image) {
    //         formData.append('image', form.image);
    //     }

    //     try {
    //         if (space) {
    //             const spaceResponse = await axios.put(`http://localhost:3010/api/spaces/${props.editId}`, formData, {
    //                 headers: {
    //                     Authorization: localStorage.getItem('token'),
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             });
    //             spacesDispatch({ type: 'UPDATE_SPACE', payload: spaceResponse.data });
    //             props.toggle();
    //         } else {
    //             const response = await axios.post(`http://localhost:3010/api/spaces/${id}`, formData, {
    //                 headers: {
    //                     Authorization: localStorage.getItem('token'),
    //                     'Content-Type': 'multipart/form-data'
    //                 }
    //             });
    //             spacesDispatch({ type: 'ADD_SPACE', payload: response.data });
    //         }
    //     } catch (err) {
    //         console.error(err);
    //     }
    // };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', form.name);
        formData.append('category', form.category);
        
        form.type.forEach((type, index) => {
            if (form.name === 'meeting-room') {
                formData.append(`type[${index}][hour]`, type.hour);
            } else {
                formData.append(`type[${index}][day]`, type.day);
            }
            formData.append(`type[${index}][price]`, type.price);
        });
    
        formData.append('availableQuantity', Number(form.availableQuantity));
        
        if (form.image) {
            formData.append('image', form.image);
        }

        for (let [key, value] of formData.entries()) {
            console.log(key, value);
        }
    
        try {
            if (space) {
                const spaceResponse = await axios.put(`http://localhost:3010/api/spaces/${props.editId}`, formData, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                spacesDispatch({ type: 'UPDATE_SPACE', payload: spaceResponse.data });
                props.toggle();
            } else {
                const response = await axios.post(`http://localhost:3010/api/spaces/${id}`, formData, {
                    headers: {
                        Authorization: localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                spacesDispatch({ type: 'ADD_SPACE', payload: response.data });
            }
        } catch (err) {
            console.error('Error submitting form:', err);
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='category'>Category</label>
                <select
                    value={form.category}
                    onChange={(e) => {
                        handleChange(e);
                        const selectedCategory = categories.find(cat => cat._id === e.target.value);
                        if (selectedCategory) {
                            setForm(prevForm => ({
                                ...prevForm,
                                name: selectedCategory.name // Update the name field based on the selected category
                            }));
                        }
                    }}
                    name="category"
                    id="category"
                >
                    <option value=''>Select</option>
                    {categories.map((ele) => (
                        <option value={ele._id} key={ele._id}>{ele.name}</option>
                    ))}
                </select>
            </div>

            <div>
                <label htmlFor='name'>Space Name</label>
                <input
                    type="text"
                    value={form.name}
                    readOnly
                    name="name"
                    id="name"
                />
            </div>

            <div>
                <button type="button" onClick={handleAddType} disabled={form.name === 'meeting-room' && form.type.some(type => type.hour === '1hour')}>Add Type</button>
                {form.type.map((type, index) => (
                    <div key={index}>
                        <label htmlFor={`time_${index}`}>{form.name === 'meeting-room' ? 'Hour' : 'Day'}</label>
                        <select
                           value={form.type[index][form.name === 'meeting-room' ? 'hour' : 'day']}
                            onChange={(e) => handleTypeChange(index, e)}
                            name={form.name === 'meeting-room' ? 'hour' : 'day'}
                            id={`time_${index}`}
                        >
                            <option value="">Select</option>
                            {(form.name === 'meeting-room' ? ['1hour'] : ['1day', '5day', '10day']).map((timeValue) => (
                                <option
                                    key={timeValue}
                                    value={timeValue}
                                    disabled={form.type.some((item, idx) => idx !== index && (form.name === 'meeting-room' ? item.hour : item.day) === timeValue)}
                                >
                                    {timeValue}
                                </option>
                            ))}
                        </select>
                        <label htmlFor={`price_${index}`}>Price</label>
                        <input
                            type="number"
                            value={type.price}
                            onChange={(e) => handleTypeChange(index, e)}
                            name='price'
                            id={`price_${index}`}
                        />
                        <button type="button" onClick={() => handleRemoveType(index)}>Remove</button>
                    </div>
                ))}
            </div>

            <div>
                <label htmlFor='availableQuantity'>Available Quantity</label>
                <input
                    type="number"
                    value={form.availableQuantity}
                    onChange={handleChange}
                    name="availableQuantity"
                    id="availableQuantity"
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
            <input type="submit" />
        </form>
    );
}
