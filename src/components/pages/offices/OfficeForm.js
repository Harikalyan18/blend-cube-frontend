// import axios from 'axios';
// import Select from 'react-select';
// import { useState, useEffect } from 'react';
// import { useOffice } from '../../contexts/OfficeContext';

// export default function OfficeForm(props) {
//     const { offices, officesDispatch } = useOffice();
//     const office = offices.data.find(ele => ele._id === props.editId);

//     const [officeForm, setOfficeForm] = useState({
//         name: '',
//         image: '',
//         description: '',
//         houseNumber: '',
//         areaAndStreet: '',
//         locality: '',
//         pinCode: '',
//         city: '',
//         state: '',
//         country: '',
//         capacity: '',
//         amenities: []
//     });
//     const [amenityOptions, setAmenityOptions] = useState([
//         { value: 'WiFi', label: 'WiFi' },
//         { value: 'Parking', label: 'Parking' },
//         { value: 'Coffee', label: 'Coffee' },
//         { value: 'Cafeteria', label:'Cafeteria' },
//         { value: 'Bicycle Rack', label: 'Bicycle Rack' },
//         { value: 'Gym', label: 'Gym' },
//         { value: 'Workstations', label: 'Workstations' },
//         { value: 'outdoor-space', label: 'Outdoor Space' },
//         { value: 'Swimming Pool', label: 'Swimming Pool' },
//         { value: 'Garden', label: 'Garden' },
//         { value: 'Pet Friendly', label: 'Pet Friendly' },
//         { value: 'Green Space', label: 'Green Space' }
//     ]);


//     useEffect(() => {
//         if (office) {
//             setOfficeForm({
//                 name: office.name || '',
//                 image: office.image || '',
//                 description: office.description || '',
//                 houseNumber: office.address?.houseNumber || '',
//                 areaAndStreet: office.address?.areaAndStreet || '',
//                 locality: office.address?.locality || '',
//                 pinCode: office.address?.pinCode || '',
//                 city: office.address?.city || '',
//                 state: office.address?.state || '',
//                 country: office.address?.country || '',
//                 capacity: office.capacity || '',
//                 amenities: office.amenities.map(option => ({ value: option, label: option })) || []
//             });
//         }
//     }, [office]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = {
//             name: officeForm.name,
//             image: officeForm.image,
//             description: officeForm.description,
//             address: {
//                 houseNumber: officeForm.houseNumber,
//                 areaAndStreet: officeForm.areaAndStreet,
//                 locality: officeForm.locality,
//                 pinCode: officeForm.pinCode,
//                 city: officeForm.city,
//                 state: officeForm.state,
//                 country: officeForm.country,
//             },
//             capacity: officeForm.capacity,
//             amenities: officeForm.amenities.map(option => option.value)
//         };

//         try {
//             if (office) {
//                 const officeResponse = await axios.put(`http://localhost:3010/api/offices/update/${props.editId}`, formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 officesDispatch({ type: 'UPDATE_OFFICE', payload: officeResponse.data });
//                 props.toggle();
//             } else {
//                 const response = await axios.post('http://localhost:3010/api/offices/create', formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 officesDispatch({ type: 'ADD_OFFICE', payload: response.data });
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setOfficeForm({ ...officeForm, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         const file = e.target.files[0];
//         setOfficeForm({ ...officeForm, image: file });
//     };

//     const handleAmenitiesChange = (selectedOptions) => {
//         setOfficeForm({ ...officeForm, amenities: selectedOptions });
//     };

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.name || ''} 
//                     onChange={handleChange} 
//                     name="name" 
//                     id="name" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="image">Image</label>
//                 <input 
//                     type="file" 
//                     onChange={handleImageChange} 
//                     name="image" 
//                     id="image" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="description">Description</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.description || ''} 
//                     onChange={handleChange} 
//                     name="description" 
//                     id="description" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="houseNumber">House Number</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.houseNumber || ''} 
//                     onChange={handleChange} 
//                     name="houseNumber" 
//                     id="houseNumber" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="areaAndStreet">Area and Street</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.areaAndStreet || ''} 
//                     onChange={handleChange}                    
//                     name="areaAndStreet" 
//                     id="areaAndStreet" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="locality">Locality</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.locality || ''} 
//                     onChange={handleChange} 
//                     name="locality" 
//                     id="locality" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="pinCode">Pincode</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.pinCode || ''} 
//                     onChange={handleChange} 
//                     name="pinCode" 
//                     id="pinCode" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="city">City</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.city || ''} 
//                     onChange={handleChange} 
//                     name="city" 
//                     id="city" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="state">State</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.state || ''} 
//                     onChange={handleChange} 
//                     name="state" 
//                     id="state" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="country">Country</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.country || ''} 
//                     onChange={handleChange} 
//                     name="country" 
//                     id="country" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="capacity">Capacity</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.capacity || ''} 
//                     onChange={handleChange} 
//                     name="capacity" 
//                     id="capacity" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="amenities">Amenities</label>
//                 <Select
//                     isMulti
//                     options={amenityOptions}
//                     value={officeForm.amenities}
//                     onChange={handleAmenitiesChange}
//                     name="amenities"
//                     id="amenities"
//                 />
//             </div>
//             <input type="submit" />
//         </form>
//     );
// }


// import axios from 'axios';
// import Select from 'react-select';
// import { useState, useEffect } from 'react';
// import { useOffice } from '../../contexts/OfficeContext';
// import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDesktop, FaDumbbell, FaTree, FaDog, FaSwimmingPool } from 'react-icons/fa'; // Import icons directly

// export default function OfficeForm(props) {
//     const { offices, officesDispatch } = useOffice();
//     const office = offices.data.find(ele => ele._id === props.editId);

    // const [officeForm, setOfficeForm] = useState({
    //     name: '',
    //     image: [],
    //     description: '',
    //     houseNumber: '',
    //     areaAndStreet: '',
    //     locality: '',
    //     pinCode: '',
    //     city: '',
    //     state: '',
    //     country: '',
    //     capacity: '',
    //     amenities: []
    // });
    // const [amenityOptions, setAmenityOptions] = useState([
    //     { value: 'WiFi', label: 'WiFi' },
    //     { value: 'Parking', label: 'Parking' },
    //     { value: 'Coffee', label: 'Coffee' },
    //     { value: 'Cafeteria', label: 'Cafeteria' },
    //     { value: 'Bicycle Rack', label: 'Bicycle Rack' },
    //     { value: 'Gym', label: 'Gym' },
    //     { value: 'Workstations', label: 'Workstations' },
    //     { value: 'Outdoor Space', label: 'Outdoor Space' },
    //     { value: 'Swimming Pool', label: 'Swimming Pool' },
    //     { value: 'Garden', label: 'Garden' },
    //     { value: 'Pet Friendly', label: 'Pet Friendly' },
    //     { value: 'Green Space', label: 'Green Space' }
    // ]);

    // // Define the icon mapping directly within the component
    // const amenityIcons = {
    //     'WiFi': <FaWifi />,
    //     'Parking': <FaParking />,
    //     'Coffee': <FaCoffee />,
    //     'Cafeteria': <FaUtensils />,
    //     'Bicycle Rack': <FaBicycle />,
    //     'Gym': <FaDumbbell />,
    //     'Workstations': <FaDesktop />,
    //     'Outdoor Space': <FaTree />,
    //     'Swimming Pool': <FaSwimmingPool />,
    //     'Garden': <FaTree />,
    //     'Pet Friendly': <FaDog />,
    //     'Green Space': <FaTree />,
    // };

//     useEffect(() => {
//         if (office) {
//             setOfficeForm({
//                 name: office.name ?? '',
//                 image: office.image ?? [],
//                 description: office.description ?? '',
//                 houseNumber: office.address?.houseNumber ?? '',
//                 areaAndStreet: office.address?.areaAndStreet ?? '',
//                 locality: office.address?.locality ?? '',
//                 pinCode: office.address?.pinCode ?? '',
//                 city: office.address?.city ?? '',
//                 state: office.address?.state ?? '',
//                 country: office.address?.country ?? '',
//                 capacity: office.capacity ?? '',
//                 amenities: office.amenities.map(option => ({ value: option, label: option })) ?? []
//             });
//         }
//     }, [office]);
    

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
    
//         formData.append('name', officeForm.name);
//         formData.append('description', officeForm.description);
//         formData.append('houseNumber', officeForm.address.houseNumber);
//         formData.append('areaAndStreet', officeForm.address.areaAndStreet);
//         formData.append('locality', officeForm.address.locality);
//         formData.append('pinCode', officeForm.address.pinCode);
//         formData.append('city', officeForm.address.city);
//         formData.append('state', officeForm.address.state);
//         formData.append('country', officeForm.address.country);
//         formData.append('capacity', officeForm.capacity);
    
//         // Add address as a JSON string
//         const address = {
//             houseNumber: officeForm.address.houseNumber,
//             areaAndStreet: officeForm.address.areaAndStreet,
//             locality: officeForm.address.locality,
//             city: officeForm.address.city,
//             state: officeForm.address.state,
//             country: officeForm.address.country
//         };
//         formData.append('address', JSON.stringify(address));

//         // const formData = {
//         //                 name: officeForm.name,
//         //                 image: officeForm.image,
//         //                 description: officeForm.description,
//         //                 address: {
//         //                     houseNumber: officeForm.address?.houseNumber ?? '', // Use optional chaining and nullish coalescing
//         //                     areaAndStreet: officeForm.address?.areaAndStreet ?? '', // Use optional chaining and nullish coalescing
//         //                     locality: officeForm.address?.locality ?? '', // Use optional chaining and nullish coalescing
//         //                     pinCode: officeForm.address?.pinCode ?? '', // Use optional chaining and nullish coalescing
//         //                     city: officeForm.address?.city ?? '', // Use optional chaining and nullish coalescing
//         //                     state: officeForm.address?.state ?? '', // Use optional chaining and nullish coalescing
//         //                     country: officeForm.address?.country ?? '', // Use optional chaining and nullish coalescing
//         //                 },
//         //                 capacity: officeForm.capacity,
//         //                 amenities: officeForm.amenities.map(amenity => amenity.value), 
//         //             };
    
//         // Append amenities
//         officeForm.amenities.forEach((amenity, index) => {
//             formData.append(`amenities[${index}]`, amenity.value);
//         });
    
//         // Append each file under the 'image' field
//         officeForm.image.forEach((file) => {
//             formData.append('image', file);
//         });
    
//         try {
//             if (office) {
//                 const officeResponse = await axios.put(`http://localhost:3010/api/offices/update/${props.editId}`, formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token'),
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 officesDispatch({ type: 'UPDATE_OFFICE', payload: officeResponse.data });
//                 props.toggle();
//             } else {
//                 const response = await axios.post('http://localhost:3010/api/offices/create', formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token'),
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 officesDispatch({ type: 'ADD_OFFICE', payload: response.data });
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };
    
    
    

//     const handleAmenitiesChange = (selectedOptions) => {
//         setOfficeForm({ ...officeForm, amenities: selectedOptions });
//     };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setOfficeForm({ ...officeForm, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         const files = e.target.files;
//         // Convert FileList to an array
//         const fileList = Array.from(files);
    
//         // Update the officeForm state with the array of files
//         setOfficeForm({ ...officeForm, image: fileList });
//     };


//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor="name">Name</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.name || ''} 
//                     onChange={handleChange} 
//                     name="name" 
//                     id="name" 
//                 />
//             </div>
//             <div>
//             <label htmlFor="image">Image</label>
//                 <input 
//                     type="file" multiple 
//                     onChange={handleImageChange} 
//                     name="image" 
//                     id="image" 
//                 />
//             </div>

//             <div>
//                 <label htmlFor="description">Description</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.description || ''} 
//                     onChange={handleChange} 
//                     name="description" 
//                     id="description" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="houseNumber">House Number</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.houseNumber || ''} 
//                     onChange={handleChange} 
//                     name="houseNumber" 
//                     id="houseNumber" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="areaAndStreet">Area and Street</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.areaAndStreet || ''} 
//                     onChange={handleChange}                    
//                     name="areaAndStreet" 
//                     id="areaAndStreet" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="locality">Locality</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.locality || ''} 
//                     onChange={handleChange} 
//                     name="locality" 
//                     id="locality" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="pinCode">Pincode</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.pinCode || ''} 
//                     onChange={handleChange} 
//                     name="pinCode" 
//                     id="pinCode" 
//                 />
//                 </div>
//             <div>
//                 <label htmlFor="city">City</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.city || ''} 
//                     onChange={handleChange} 
//                     name="city" 
//                     id="city" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="state">State</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.state || ''} 
//                     onChange={handleChange} 
//                     name="state" 
//                     id="state" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="country">Country</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.country || ''} 
//                     onChange={handleChange} 
//                     name="country" 
//                     id="country" 
//                 />
//             </div>
//             <div>
//                 <label htmlFor="capacity">Capacity</label>
//                 <input 
//                     type="text" 
//                     value={officeForm.capacity || ''} 
//                     onChange={handleChange} 
//                     name="capacity" 
//                     id="capacity" 
//                 />
//             </div>
            // <div>
            // <label htmlFor="amenities">Amenities</label>
            //     <Select
            //         isMulti
            //         options={amenityOptions.map(option => ({
            //             ...option,
            //             label: (
            //                 <div style={{ display: 'flex', alignItems: 'center' }}>
            //                     {amenityIcons[option.value]} <span style={{ marginLeft: '0.5rem' }}>{option.label}</span>
            //                 </div>
            //             )
            //         }))}
            //         value={officeForm.amenities}
            //         onChange={handleAmenitiesChange}
            //         name="amenities"
            //         id="amenities"
            //     />
            // </div>
//             <input type="submit" />
//         </form>
//     );
// }


// import React, { useState, useEffect } from 'react';
// import Select from 'react-select';
// import axios from 'axios';
// import { useOffice } from '../../contexts/OfficeContext'; // Assuming you have an OfficeContext for managing office data
// import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDumbbell, FaDesktop, FaTree, FaSwimmingPool, FaDog } from 'react-icons/fa';

// export default function OfficeForm(props) {
//     const { offices, officesDispatch } = useOffice();
//     const office = offices.data.find(ele => ele._id === props.editId);

//     const [officeForm, setOfficeForm] = useState({
//         name: '',
//         image: [],
//         description: '',
//         address: {
//             houseNumber: '',
//             areaAndStreet: '',
//             locality: '',
//             pinCode: '',
//             city: '',
//             state: '',
//             country: ''
//         },
//         location: {
//             type: ['Point'],
//             coordinates: [0, 0]
//         },
//         capacity: '',
//         amenities: []
//     });
//     const [amenityOptions, setAmenityOptions] = useState([
//         { value: 'WiFi', label: 'WiFi' },
//         { value: 'Parking', label: 'Parking' },
//         { value: 'Coffee', label: 'Coffee' },
//         { value: 'Cafeteria', label: 'Cafeteria' },
//         { value: 'Bicycle Rack', label: 'Bicycle Rack' },
//         { value: 'Gym', label: 'Gym' },
//         { value: 'Workstations', label: 'Workstations' },
//         { value: 'Outdoor Space', label: 'Outdoor Space' },
//         { value: 'Swimming Pool', label: 'Swimming Pool' },
//         { value: 'Garden', label: 'Garden' },
//         { value: 'Pet Friendly', label: 'Pet Friendly' },
//         { value: 'Green Space', label: 'Green Space' }
//     ]);

//     // Define the icon mapping directly within the component
//     const amenityIcons = {
//         'WiFi': <FaWifi />,
//         'Parking': <FaParking />,
//         'Coffee': <FaCoffee />,
//         'Cafeteria': <FaUtensils />,
//         'Bicycle Rack': <FaBicycle />,
//         'Gym': <FaDumbbell />,
//         'Workstations': <FaDesktop />,
//         'Outdoor Space': <FaTree />,
//         'Swimming Pool': <FaSwimmingPool />,
//         'Garden': <FaTree />,
//         'Pet Friendly': <FaDog />,
//         'Green Space': <FaTree />,
//     };
//     useEffect(() => {
//         if (office) {
//             setOfficeForm({
//                 name: office.name ?? '',
//                 image: office.image ?? [],
//                 description: office.description ?? '',
//                 address: {
//                     houseNumber: office.address?.houseNumber ?? '',
//                     areaAndStreet: office.address?.areaAndStreet ?? '',
//                     locality: office.address?.locality ?? '',
//                     pinCode: office.address?.pinCode ?? '',
//                     city: office.address?.city ?? '',
//                     state: office.address?.state ?? '',
//                     country: office.address?.country ?? ''
//                 },
//                 location: office.location ?? { type: ['Point'], coordinates: [0, 0] },
//                 capacity: office.capacity ?? '',
//                 amenities: office.amenities.map(option => ({ value: option, label: option })) ?? []
//             });
//         }
//     }, [office]);

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();

//         // Append individual fields of the address object
//     formData.append('name', officeForm.name);
//     formData.append('description', officeForm.description);
//     if (officeForm.address) {
//         formData.append('houseNumber', officeForm.address.houseNumber);
//         formData.append('areaAndStreet', officeForm.address.areaAndStreet);
//         formData.append('locality', officeForm.address.locality);
//         formData.append('pinCode', officeForm.address.pinCode);
//         formData.append('city', officeForm.address.city);
//         formData.append('state', officeForm.address.state);
//         formData.append('country', officeForm.address.country);
//     }
//     // formData.append('houseNumber', officeForm.address.houseNumber);
//     // formData.append('areaAndStreet', officeForm.address.areaAndStreet);
//     // formData.append('locality', officeForm.address.locality);
//     // formData.append('pinCode', officeForm.address.pinCode);
//     // formData.append('city', officeForm.address.city);
//     // formData.append('state', officeForm.address.state);
//     // formData.append('country', officeForm.address.country);
//     formData.append('location', officeForm.location);
//     formData.append('capacity', officeForm.capacity);

//         officeForm.amenities.forEach((amenity, index) => {
//             formData.append(`amenities[${index}]`, amenity.value);
//         });
//         officeForm.image.forEach((file) => {
//             formData.append('image', file);
//         });

//         try {
//             if (office) {
//                 const officeResponse = await axios.put(`http://localhost:3010/api/offices/update/${props.editId}`, formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token'),
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 officesDispatch({ type: 'UPDATE_OFFICE', payload: officeResponse.data });
//                 props.toggle();
//             } else {
//                 const response = await axios.post('http://localhost:3010/api/offices/create', formData, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token'),
//                         'Content-Type': 'multipart/form-data'
//                     }
//                 });
//                 officesDispatch({ type: 'ADD_OFFICE', payload: response.data });
//             }
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     const handleAmenitiesChange = (selectedOptions) => {
//         setOfficeForm({ ...officeForm, amenities: selectedOptions });
//     };
//     const handleChange = (e) => {
//         const { name, value } = e.target;
//         setOfficeForm({ ...officeForm, [name]: value });
//     };

//     const handleImageChange = (e) => {
//         const files = e.target.files;
//         const fileList = Array.from(files);
//         setOfficeForm({ ...officeForm, image: fileList });
//     };
//     const handleChangeAddress = (field, e) => {
//         const { value } = e.target;
//         setOfficeForm(prevState => ({
//             ...prevState,
//             address: {
//                 ...prevState.address,
//                 [field]: value
//             }
//         }));
//     };
    
    

//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <label htmlFor='name'>Office Name</label>
//                 <input
//                     type="text"
//                     value={officeForm.name}
//                     onChange={handleChange}
//                     name="name"
//                     id="name"
//                 />
//             </div>
//             <div>
//                 <label htmlFor="image">Images</label>
//                 <input 
//                     type="file" 
//                     onChange={handleImageChange} 
//                     name="image" 
//                     id="image" 
//                     multiple  // Allow multiple files to be selected
//                 />
//             </div>
//             <div>
//                 <label htmlFor='description'>Description</label>
//                 <input
//                     type="text"
//                     value={officeForm.description}
//                     onChange={handleChange}
//                     name="description"
//                     id="description"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='houseNumber'>House Number</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.houseNumber}
//                     onChange={(e) => handleChangeAddress('houseNumber', e)}
//                     name="houseNumber"
//                     id="houseNumber"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='areaAndStreet'>Area and Street</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.areaAndStreet}
//                     onChange={(e) => handleChangeAddress('areaAndStreet', e)}
//                     name="areaAndStreet"
//                     id="areaAndStreet"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='locality'>Locality</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.locality}
//                     onChange={(e) => handleChangeAddress('locality', e)}
//                     name="locality"
//                     id="locality"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='pinCode'>Pin Code</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.pinCode}
//                     onChange={(e) => handleChangeAddress('pinCode', e)}
//                     name="pinCode"
//                     id="pinCode"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='city'>City</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.city}
//                     onChange={(e) => handleChangeAddress('city', e)}
//                     name="city"
//                     id="city"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='state'>State</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.state}
//                     onChange={(e) => handleChangeAddress('state', e)}
//                     name="state"
//                     id="state"
//                 />
//             </div>
//             <div>
//                 <label htmlFor='country'>Country</label>
//                 <input
//                     type="text"
//                     value={officeForm.address.country}
//                     onChange={(e) => handleChangeAddress('country', e)}
//                     name="country"
//                     id="country"
//                 />
//             </div>
//             <div>
//             <label htmlFor="amenities">Amenities</label>
//                 <Select
//                     isMulti
//                     options={amenityOptions.map(option => ({
//                         ...option,
//                         label: (
//                             <div style={{ display: 'flex', alignItems: 'center' }}>
//                                 {amenityIcons[option.value]} <span style={{ marginLeft: '0.5rem' }}>{option.label}</span>
//                             </div>
//                         )
//                     }))}
//                     value={officeForm.amenities}
//                     onChange={handleAmenitiesChange}
//                     name="amenities"
//                     id="amenities"
//                 />
//             </div>
//             <input type="submit" />
//         </form>
//     );
// }


import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import axios from 'axios';
import { useOffice } from '../../contexts/OfficeContext';
import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDumbbell, FaDesktop, FaTree, FaSwimmingPool, FaDog } from 'react-icons/fa';

const initialOfficeFormState = {
    name: '',
    image: [],
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
};

export default function OfficeForm(props) {
    const { offices, officesDispatch } = useOffice();
    const office = offices.data.find(ele => ele._id === props.editId);

    const [officeForm, setOfficeForm] = useState(initialOfficeFormState);

    const amenityOptions = [
        { value: 'WiFi', label: 'WiFi' },
        { value: 'Parking', label: 'Parking' },
        { value: 'Coffee', label: 'Coffee' },
        { value: 'Cafeteria', label: 'Cafeteria' },
        { value: 'Bicycle Rack', label: 'Bicycle Rack' },
        { value: 'Gym', label: 'Gym' },
        { value: 'Workstations', label: 'Workstations' },
        { value: 'Outdoor Space', label: 'Outdoor Space' },
        { value: 'Swimming Pool', label: 'Swimming Pool' },
        { value: 'Garden', label: 'Garden' },
        { value: 'Pet Friendly', label: 'Pet Friendly' },
        { value: 'Green Space', label: 'Green Space' }
    ];

    const amenityIcons = {
        'WiFi': <FaWifi />,
        'Parking': <FaParking />,
        'Coffee': <FaCoffee />,
        'Cafeteria': <FaUtensils />,
        'Bicycle Rack': <FaBicycle />,
        'Gym': <FaDumbbell />,
        'Workstations': <FaDesktop />,
        'Outdoor Space': <FaTree />,
        'Swimming Pool': <FaSwimmingPool />,
        'Garden': <FaTree />,
        'Pet Friendly': <FaDog />,
        'Green Space': <FaTree />
    };

    useEffect(() => {
        if (office) {
            setOfficeForm({
                name: office.name ?? '',
                image: office.image ?? [],
                description: office.description ?? '',
                houseNumber: office.address?.houseNumber ?? '',
                areaAndStreet: office.address?.areaAndStreet ?? '',
                locality: office.address?.locality ?? '',
                pinCode: office.address?.pinCode ?? '',
                city: office.address?.city ?? '',
                state: office.address?.state ?? '',
                country: office.address?.country ?? '',
                capacity: office.capacity ?? '',
                amenities: office.amenities?.map(option => ({ value: option, label: option })) ?? []
            });
        }
    }, [office]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', officeForm.name);
        formData.append('description', officeForm.description);
        formData.append('houseNumber', officeForm.address.houseNumber);
        formData.append('areaAndStreet', officeForm.address.areaAndStreet);
        formData.append('locality', officeForm.address.locality);
        formData.append('pinCode', officeForm.address.pinCode);
        formData.append('city', officeForm.address.city);
        formData.append('state', officeForm.address.state);
        formData.append('country', officeForm.address.country);
        formData.append('capacity', officeForm.capacity);

        // Assuming the location is handled separately, you might need to adapt this as per your requirements.
        // formData.append('location', JSON.stringify({ type: 'Point', coordinates: [longitude, latitude] }));

        officeForm.amenities.forEach((amenity, index) => {
            formData.append(`amenities[${index}]`, amenity.value);
        });
        officeForm.image.forEach((file) => {
            formData.append('image', file);
        });

        try {
            if (office) {
                const officeResponse = await axios.put(`http://localhost:3010/api/offices/update/${props.editId}`, formData, {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                officesDispatch({ type: 'UPDATE_OFFICE', payload: officeResponse.data });
                props.toggle();
            } else {
                const response = await axios.post('http://localhost:3010/api/offices/create', formData, {
                    headers: {
                        'Authorization': localStorage.getItem('token'),
                        'Content-Type': 'multipart/form-data'
                    }
                });
                officesDispatch({ type: 'ADD_OFFICE', payload: response.data });
            }
        } catch (err) {
            console.error(err);
        }
    };

    const handleAmenitiesChange = (selectedOptions) => {
        setOfficeForm({ ...officeForm, amenities: selectedOptions });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setOfficeForm({ ...officeForm, [name]: value });
    };

    const handleImageChange = (e) => {
        const files = e.target.files;
        const fileList = Array.from(files);
        setOfficeForm({ ...officeForm, image: fileList });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Office Name</label>
                <input
                    type="text"
                    value={officeForm.name}
                    onChange={handleChange}
                    name="name"
                    id="name"
                />
            </div>
            <div>
                <label htmlFor="image">Images</label>
                <input 
                    type="file" 
                    onChange={handleImageChange} 
                    name="image" 
                    id="image" 
                    multiple
                />
            </div>
            <div>
                <label htmlFor='description'>Description</label>
                <input
                    type="text"
                    value={officeForm.description}
                    onChange={handleChange}
                    name="description"
                    id="description"
                />
            </div>
            <div>
                <label htmlFor='houseNumber'>House Number</label>
                <input
                    type="text"
                    value={officeForm.houseNumber}
                    onChange={handleChange}
                    name="houseNumber"
                    id="houseNumber"
                />
            </div>
            <div>
                <label htmlFor='areaAndStreet'>Area and Street</label>
                <input
                    type="text"
                    value={officeForm.areaAndStreet}
                    onChange={handleChange}
                    name="areaAndStreet"
                    id="areaAndStreet"
                />
            </div>
            <div>
                <label htmlFor='locality'>Locality</label>
                <input
                    type="text"
                    value={officeForm.locality}
                    onChange={handleChange}
                    name="locality"
                    id="locality"
                />
            </div>
            <div>
                <label htmlFor='pinCode'>Pin Code</label>
                <input
                    type="text"
                    value={officeForm.pinCode}
                    onChange={handleChange}
                    name="pinCode"
                    id="pinCode"
                />
            </div>
            <div>
                <label htmlFor='city'>City</label>
                <input
                    type="text"
                    value={officeForm.city}
                    onChange={handleChange}
                    name="city"
                    id="city"
                />
            </div>
            <div>
                <label htmlFor='state'>State</label>
                <input
                    type="text"
                    value={officeForm.state}
                    onChange={handleChange}
                    name="state"
                    id="state"
                />
            </div>
            <div>
                <label htmlFor='country'>Country</label>
                <input
                    type="text"
                    value={officeForm.country}
                    onChange={handleChange}
                    name="country"
                    id="country"
                />
            </div>
            <div>
                <label htmlFor='capacity'>Capacity</label>
                <input
                    type="text"
                    value={officeForm.capacity}
                    onChange={handleChange}
                    name="capacity"
                    id="capacity"
                />
            </div>
            <div>
                <label htmlFor="amenities">Amenities</label>
                <Select
                    isMulti
                    options={amenityOptions.map(option => ({
                        ...option,
                        label: (
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                {amenityIcons[option.value]} <span style={{ marginLeft: '0.5rem' }}>{option.label}</span>
                            </div>
                        )
                    }))}
                    value={officeForm.amenities}
                    onChange={handleAmenitiesChange}
                    name="amenities"
                    id="amenities"
                />
            </div>
            <input type="submit" />
        </form>
    );
}
