// import axios from 'axios'
// import Select from 'react-select'
// import { useState } from 'react'
// import { useOffice } from '../contexts/OfficeContext'

// export default function OfficeForm() {
//     const { officeDispatch } = useOffice()
//     const [amenityOptions, setAmenityOptions] = useState([
//         { value: 'wifi', label: 'WiFi' },
//         { value: 'parking-space', label: 'parking-space' },
//         { value: 'coffee-bar', label: 'coffee-bar' },
//         // Add more options as needed
//     ])
//     const [officeForm, setOfficeForm] = useState({
//         name: '',
//         image: '',
//         description:'',
//             houseNumber: '',
//             areaAndStreet: '',
//             locality: '',
//             pinCode: '',
//             city: '',
//             state: '',
//             country: '',      
//         capacity:'',
//         amenities: []
//         })

//         const handleSubmit = async(e) => {
//             e.preventDefault()
//             const formData = {
//                 name: officeForm.name,
//                 image: officeForm.image,
//                 description: officeForm.description,
//                 address: {
//                     houseNumber: officeForm.houseNumber,
//                     areaAndStreet: officeForm.areaAndStreet,
//                     locality: officeForm.locality,
//                     pinCode: officeForm.pinCode,
//                     city: officeForm.city,
//                     state: officeForm.state,
//                     country: officeForm.country,
//                 },               
//                 capacity: officeForm.capacity,
//                 amenities: officeForm.amenities.map(option => option.value) // Extract values from options
//             }
//             try {
//                 const response = await axios.post('http://localhost:3010/api/offices/create', formData, {                   
//                         headers: {
//                             'Authorization': localStorage.getItem('token')
//                         }
//                 })
//                 console.log(response.data)
//                 officeDispatch({ type:' ADD_OFFICE', payload: response.data})
//             } catch(err) {
    
//             }
//         }

//         const handleChange = (e) => {
//             const { name, value } = e.target
//             setOfficeForm({ ...officeForm, [name]: value })
//         }

//         const handleImageChange = (e) => {
//             const file = e.target.files[0]
//             setOfficeForm({ ...officeForm, image: file})
//         }
//          // Define a function to handle change in amenities
//         const handleAmenitiesChange = (selectedOptions) => {
//             setOfficeForm({ ...officeForm, amenities: selectedOptions });
//         }

//         // Define a function to handle creating a new amenity option
//         const handleCreateAmenity = (inputValue) => {
//             const newAmenity = { value: inputValue.toLowerCase(), label: inputValue };
//             setAmenityOptions([...amenityOptions, newAmenity]);
//             setOfficeForm({ ...officeForm, amenities: [...officeForm.amenities, newAmenity] });
//         }
//         return(
//             <>           
//                 <form onSubmit={handleSubmit}>
//                     <div>
//                         <label 
//                             htmlFor="name" 
//                         >Name</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.name} 
//                             onChange={handleChange} 
//                             name="name" 
//                             id="name"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="image" 
//                         >Image</label>
//                         <input 
//                             type="file" 
//                             value={officeForm.image} 
//                             onChange={handleImageChange} 
//                             name="image" 
//                             id="image"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="description" 
//                         >Description</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.description} 
//                             onChange={handleChange} 
//                             name="description" 
//                             id="description"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="houseNumber" 
//                         >House Number</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.houseNumber} 
//                             onChange={handleChange} 
//                             name="houseNumber"
//                             id="houseNumber"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="areaAndStreet" 
//                         >Area</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.areaAndStreet} 
//                             onChange={handleChange} 
//                             name="areaAndStreet" 
//                             id="areaAndStreet"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="locality" 
//                         >Locality</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.locality}  
//                             onChange={handleChange} 
//                             name="locality" 
//                             id="locality"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="pinCode" 
//                         >Pincode</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.pinCode}  
//                             onChange={handleChange} 
//                             name="pinCode" 
//                             id="pinCode"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="city" 
//                         >city</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.city}  
//                             onChange={handleChange} 
//                             name="city" 
//                             id="city"                    
//                         /> 
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="state" 
//                         >state</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.state}  
//                             onChange={handleChange} 
//                             name="state" 
//                             id="state"                    
//                         />               
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="country" 
//                         >country</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.country}  
//                             onChange={handleChange} 
//                             name="country" 
//                             id="country"                    
//                         />               
//                     </div>
//                     <div>
//                         <label 
//                             htmlFor="capacity" 
//                         >Capacity</label>
//                         <input 
//                             type="text" 
//                             value={officeForm.capacity}  
//                             onChange={handleChange} 
//                             name="capacity" 
//                             id="capacity"                    
//                         />               
//                     </div>
//                     <div>
//                     <label htmlFor="amenities"
//                     >Amenities</label>
//                     <Select
//                         isMulti
//                         options={amenityOptions}
//                         value={officeForm.amenities}
//                         onChange={handleAmenitiesChange}
//                         onCreateOption={handleCreateAmenity}
//                         formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
//                         name="amenities"
//                         id="amenities"
//                     />
//                 </div>

//                     <input type="submit" />
//                 </form>
            
//         </>
//         )
// }


import axios from 'axios';
import Select from 'react-select';
import { useState } from 'react';
import { useOffice } from '../../contexts/OfficeContext';

export default function OfficeForm() {
    const { officeDispatch } = useOffice();

    const [officeForm, setOfficeForm] = useState({
        name: '',
        image: '',
        description: '',
        houseNumber: '',
        areaAndStreet: '',
        locality: '',
        pinCode: '',
        city: '',
        state: '',
        country: '',
        capacity: '',
        amenities: []
    });
    const [amenityOptions, setAmenityOptions] = useState([
        { value: 'wifi', label: 'WiFi' },
        { value: 'parking-space', label: 'Parking Space' },
        { value: 'coffee-bar', label: 'Coffee Bar' },
        // Add more options as needed
    ]);

    const [newAmenityInput, setNewAmenityInput] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: officeForm.name,
            image: officeForm.image,
            description: officeForm.description,
            address: {
                houseNumber: officeForm.houseNumber,
                areaAndStreet: officeForm.areaAndStreet,
                locality: officeForm.locality,
                pinCode: officeForm.pinCode,
                city: officeForm.city,
                state: officeForm.state,
                country: officeForm.country,
            },
            capacity: officeForm.capacity,
            amenities: officeForm.amenities.map(option => option.value)
        };
        try {
            const response = await axios.post('http://localhost:3010/api/offices/create', formData, {
                headers: {
                    'Authorization': localStorage.getItem('token')
                }
            });
            console.log(response.data);
            officeDispatch({ type: 'ADD_OFFICE', payload: response.data });
        } catch (err) {
            console.error(err);
        }
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfficeForm({ ...officeForm, [name]: value });
    }

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setOfficeForm({ ...officeForm, image: file });
    }

    const handleAmenitiesChange = (selectedOptions) => {
        setOfficeForm({ ...officeForm, amenities: selectedOptions });
    }

    const handleCreateAmenity = () => {
        const newAmenity = { value: newAmenityInput.toLowerCase(), label: newAmenityInput };
        if (!amenityOptions.some(option => option.value === newAmenity.value)) {
            setAmenityOptions(prevOptions => [...prevOptions, newAmenity]);
        }
        setOfficeForm(prevState => ({
            ...prevState,
            amenities: [...prevState.amenities, newAmenity]
        }));
        setNewAmenityInput('');
    }
    

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" value={officeForm.name} onChange={handleChange} name="name" id="name" />
            </div>
            <div>
                <label htmlFor="image">Image</label>
                <input type="file" onChange={handleImageChange} name="image" id="image" />
            </div>
            <div>
                <label htmlFor="description">Description</label>
                <input type="text" value={officeForm.description} onChange={handleChange} name="description" id="description" />
            </div>
            <div>
                <label htmlFor="houseNumber">House Number</label>
                <input type="text" value={officeForm.houseNumber} onChange={handleChange} name="houseNumber" id="houseNumber" />
            </div>
            {/* Add more fields */}
            <div>
                <label htmlFor="areaAndStreet">Area and Street</label>
                <input type="text" value={officeForm.areaAndStreet} onChange={handleChange} name="areaAndStreet" id="areaAndStreet" />
            </div>
            <div>
                <label htmlFor="locality">Locality</label>
                <input type="text" value={officeForm.locality} onChange={handleChange} name="locality" id="locality" />
            </div>
            <div>
                <label htmlFor="pinCode">Pincode</label>
                <input type="text" value={officeForm.pinCode} onChange={handleChange} name="pinCode" id="pinCode" />
            </div>
            <div>
                <label htmlFor="city">City</label>
                <input type="text" value={officeForm.city} onChange={handleChange} name="city" id="city" />
            </div>
            <div>
                <label htmlFor="state">State</label>
                <input type="text" value={officeForm.state} onChange={handleChange} name="state" id="state" />
            </div>
            <div>
                <label htmlFor="country">Country</label>
                <input type="text" value={officeForm.country} onChange={handleChange} name="country" id="country" />
            </div>
            <div>
                <label htmlFor="capacity">Capacity</label>
                <input type="text" value={officeForm.capacity} onChange={handleChange} name="capacity" id="capacity" />
            </div>
            {/* <div>
                <label htmlFor="amenities">Amenities</label>
                <Select
                    isMulti
                    options={amenityOptions}
                    value={officeForm.amenities}
                    onChange={handleAmenitiesChange}
                    onCreateOption={handleCreateAmenity}
                    formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
                    name="amenities"
                    id="amenities"
                />
            </div> */}

            <div>
                <label htmlFor="amenities">Amenities</label>
                <Select
                    isMulti
                    options={amenityOptions}
                    value={officeForm.amenities}
                    onChange={handleAmenitiesChange}
                    onCreateOption={() => handleCreateAmenity()}
                    formatCreateLabel={(inputValue) => `Create "${inputValue}"`}
                    inputValue={newAmenityInput}
                    onInputChange={(input) => setNewAmenityInput(input)}
                    name="amenities"
                    id="amenities"
                />
            </div>
            <input type="submit" />
        </form>
    );
}
