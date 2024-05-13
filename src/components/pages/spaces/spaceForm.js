// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// export default function SpaceForm() {
//     const [form, setForm] = useState({
//         name: '',
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
//         console.log(updatedTypes)
//         setForm({ ...form, type: updatedTypes });
//     };
//     console.log(handleTypeChange)

//     const handleAddType = () => {
//         setForm({
//             ...form,
//             type: [...form.type, { day: '', price: '' }]
//         });
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
//         try {
//             const response = await axios.post('http://localhost:3010/api/spaces/:id', form, {
//                 headers: {
//                     'Authorization': localStorage.getItem('token')
//                 }
//             });
//             console.log(response.data);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         (async () => {
//             try {
//                 const response = await axios.get('http://localhost:3010/api/get/categories');
//                 console.log(response.data);
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
//                 <button type="button" onClick={handleAddType}>Add Type</button>
//                 {form.type.map((type, index) => (
//                     <div key={index}>
//                         <label htmlFor={`day_${index}`}>Day</label>
//                         <select
//                             value={type.day}
//                             onChange={(e) => handleTypeChange(index, e)}
//                             name='day'
//                             id={`day_${index}`}
//                         >
//                             <option value="1day">1 Day</option>
//                             <option value="5day">5 Day</option>
//                             <option value="1month">1 Month</option>
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

// export default function SpaceForm() {
//     const [form, setForm] = useState({
//         name: '',
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
//         const dayValues = ['1day', '5day', '1month'];
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
//         try {
//             const response = await axios.post('http://localhost:3010/api/spaces/:id', form, {
//                 headers: {
//                     'Authorization': localStorage.getItem('token')
//                 }
//             });
//             console.log(response.data);
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
//                             <option value="1day">1 Day</option>
//                             <option value="5day">5 Day</option>
//                             <option value="1month">1 Month</option>
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


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSpace } from '../../contexts/SpaceContext';

export default function SpaceForm() {

    const { spaceDispatch } = useSpace()

    const [form, setForm] = useState({
        name: '',
        category: '',
        type: [],
        availableQuantity: '',
        image: ''
    });

    const [categories, setCategories] = useState([]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleTypeChange = (index, e) => {
        const { name, value } = e.target;
        const updatedTypes = [...form.type];
        updatedTypes[index][name] = value;
        setForm({ ...form, type: updatedTypes });
    };

    const handleAddType = () => {
        const dayValues = ['1day', '5day', '1month'];
        const selectedDays = form.type.map((type) => type.day);
        const allDaysSelected = dayValues.every((day) => selectedDays.includes(day));
        const allDaysHavePrices = form.type.every((type) => type.price);

        if (allDaysSelected && allDaysHavePrices) {
            alert('All days already have prices assigned.');
        } else {
            setForm({
                ...form,
                type: [...form.type, { day: '', price: '' }]
            });
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setForm({ ...form, image: file });
    }

    const handleRemoveType = (index) => {
        const updatedTypes = [...form.type];
        updatedTypes.splice(index, 1);
        setForm({ ...form, type: updatedTypes });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3010/api/spaces/:id', form, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
            console.log(response.data);
            spaceDispatch({ type: 'ADD_SPACE', payload: response.data})
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        (async () => {
            try {
                const response = await axios.get('http://localhost:3010/api/get/categories');
                setCategories(response.data);
            } catch (err) {
                console.log(err);
            }
        })();
    }, []);

    return (
        <>
            <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Space Name</label>
                <input
                    type="text"
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                />
            </div>
            <div>
                <label htmlFor='category'>Category</label>
                <select
                    value={form.category}
                    onChange={handleChange}
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
                <button type="button" onClick={handleAddType} disabled={form.type.length === 3}>Add Type</button>
                {form.type.map((type, index) => (
                    <div key={index}>
                        <label htmlFor={`day_${index}`}>Day</label>
                        <select
                            value={type.day}
                            onChange={(e) => handleTypeChange(index, e)}
                            name='day'
                            id={`day_${index}`}
                        >
                            <option value="">Select</option>
                            {['1day', '5day', '1month'].map((dayValue) => (
                                <option
                                    key={dayValue}
                                    value={dayValue}
                                    disabled={form.type.some((item, idx) => idx !== index && item.day === dayValue)}
                                >
                                    {dayValue}
                                </option>
                            ))}
                        </select>
                        <label htmlFor={`price_${index}`}>Price</label>
                        <input
                            type="text"
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
                    type="text"
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
    </>
    )
}
