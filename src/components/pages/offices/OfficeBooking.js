
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDesktop, FaTree, FaSwimmingPool, FaDog, FaDumbbell } from 'react-icons/fa';
// import { useSpace } from '../../contexts/SpaceContext';

// export default function OfficeBooking() {
//     const { id } = useParams();
//     const [office, setOffice] = useState(null);
//     const { spaces, isLoading, error } = useSpace();

//     useEffect(() => {
//         const fetchOffice = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/offices/${id}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setOffice(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchOffice();
//     }, [id]);

//     if (!office) {
//         return <div>Loading...</div>;
//     }

//     const formatAddress = (address) => {
//         return `${address.houseNumber}, ${address.areaAndStreet}, ${address.locality}, ${address.city} - ${address.pinCode}, ${address.state}, ${address.country}`;
//     };

//     const getMapUrl = (lat, lon) => {
//         const apiKey = 'ab6864cc24fd4a2faad3d17ca8c7702c';
//         return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lon},${lat}&zoom=13&marker=lonlat:${lon},${lat};type:material;color:%23ff0000;icontype:awesome&apiKey=${apiKey}`;
//     };

//     const getGeoapifyMapLink = (lat, lon) => {
//         return `https://www.geoapify.com/maps?layer=osm-carto&lat=${lat}&lon=${lon}&zoom=13`;
//     };

//     const { coordinates } = office.location;

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

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-md-7">
//                     <Card>
//                         <Card.Img variant="top" src={office.image} />
//                         <Card.Body>
//                             <Card.Title>{office.name}</Card.Title>
//                             <Card.Text>{office.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Address</Card.Title>
//                                 <Card.Text>{formatAddress(office.address)}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Amenities</Card.Title>
//                                 <div className="row">
//                                     {office.amenities.map((amenity, index) => (
//                                         <div className="col-4 col-md-3 col-lg-2 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body className="d-flex flex-column align-items-center justify-content-center">
//                                                     {amenityIcons[amenity] || null}
//                                                     <span>{amenity}</span>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Location</Card.Title>
//                                 <a href={getGeoapifyMapLink(coordinates[1], coordinates[0])} target="_blank" rel="noopener noreferrer">
//                                     <iframe
//                                         title="Office Location Map"
//                                         width="100%"
//                                         height="200"
//                                         style={{ border: 0 }}
//                                         src={getMapUrl(coordinates[1], coordinates[0])}
//                                         allowFullScreen
//                                         loading="lazy"
//                                     ></iframe>
//                                 </a>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>

//                 <div className="col-md-5">                  
//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Select Space</Card.Title>
//                                 {isLoading ? (
//                                     <div>Loading spaces...</div>
//                                 ) : error ? (
//                                     <div>Error loading spaces</div>
//                                 ) : (
//                                     <div>
//                                         {spaces.data.filter(space => space.office === id).map((space, index) => (
//                                             <div className="mb-3" key={index}>
//                                                 <Card className="h-100">
//                                                     <Card.Body>
//                                                         <Card.Title>{space.name}</Card.Title>
//                                                         <Card.Text>{space.description}</Card.Text>
//                                                     </Card.Body>
//                                                 </Card>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDesktop, FaTree, FaSwimmingPool, FaDog, FaDumbbell } from 'react-icons/fa';
// import { useSpace } from '../../contexts/SpaceContext';

// export default function OfficeBooking() {
//     const { id } = useParams();
//     const [office, setOffice] = useState(null);
//     const { spaces, isLoading, error } = useSpace();
//     const [showModal, setShowModal] = useState(false);
//     const [selectedSpace, setSelectedSpace] = useState(null);

//     useEffect(() => {
//         const fetchOffice = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/offices/${id}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setOffice(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchOffice();
//     }, [id]);

//     const handleCardClick = (space) => {
//         setSelectedSpace(space);
//         setShowModal(true);
//     };

//     const handleCloseModal = () => {
//         setShowModal(false);
//         setSelectedSpace(null);
//     };

//     if (!office) {
//         return <div>Loading...</div>;
//     }

//     const formatAddress = (address) => {
//         return `${address.houseNumber}, ${address.areaAndStreet}, ${address.locality}, ${address.city} - ${address.pinCode}, ${address.state}, ${address.country}`;
//     };

//     const getMapUrl = (lat, lon) => {
//         const apiKey = 'ab6864cc24fd4a2faad3d17ca8c7702c';
//         return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lon},${lat}&zoom=13&marker=lonlat:${lon},${lat};type:material;color:%23ff0000;icontype:awesome&apiKey=${apiKey}`;
//     };

//     const getGeoapifyMapLink = (lat, lon) => {
//         return `https://www.geoapify.com/maps?layer=osm-carto&lat=${lat}&lon=${lon}&zoom=13`;
//     };

//     const { coordinates } = office.location;

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

//     return (
//         <div className="container mt-5">
//             <div className="row">
//                 <div className="col-md-7">
//                     <Card>
//                         <Card.Img variant="top" src={office.image} />
//                         <Card.Body>
//                             <Card.Title>{office.name}</Card.Title>
//                             <Card.Text>{office.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Address</Card.Title>
//                                 <Card.Text>{formatAddress(office.address)}</Card.Text>
//                             </Card.Body>
//                         </Card>
//                     </div>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Amenities</Card.Title>
//                                 <div className="row">
//                                     {office.amenities.map((amenity, index) => (
//                                         <div className="col-4 col-md-3 col-lg-2 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body className="d-flex flex-column align-items-center justify-content-center">
//                                                     {amenityIcons[amenity] || null}
//                                                     <span>{amenity}</span>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Location</Card.Title>
//                                 <a href={getGeoapifyMapLink(coordinates[1], coordinates[0])} target="_blank" rel="noopener noreferrer">
//                                     <iframe
//                                         title="Office Location Map"
//                                         width="100%"
//                                         height="200"
//                                         style={{ border: 0 }}
//                                         src={getMapUrl(coordinates[1], coordinates[0])}
//                                         allowFullScreen
//                                         loading="lazy"
//                                     ></iframe>
//                                 </a>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>

//                 <div className="col-md-5">                  
//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Select Space</Card.Title>
//                                 {isLoading ? (
//                                     <div>Loading spaces...</div>
//                                 ) : error ? (
//                                     <div>Error loading spaces</div>
//                                 ) : (
//                                     <div>
//                                         {spaces.data.filter(space => space.office === id).map((space, index) => (
//                                             <div className="mb-3" key={index}>
//                                                 <Card className="h-100" onClick={() => handleCardClick(space)}>
//                                                     <Card.Body>
//                                                         <Card.Title>{space.name}</Card.Title>
//                                                         <Card.Text>{space.description}</Card.Text>
//                                                     </Card.Body>
//                                                 </Card>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 )}
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </div>
//             </div>

//             {selectedSpace && (
//                 <Modal show={showModal} onHide={handleCloseModal}>
//                     <Modal.Header closeButton>
//                         <Modal.Title>{selectedSpace.name}</Modal.Title>
//                     </Modal.Header>
//                     <Modal.Body>
//                         <p>{selectedSpace.description}</p>
//                         <div>
//                             <h5>Pricing:</h5>
//                             {selectedSpace.type.map((type, index) => (
//                                 <div key={index}>
//                                     {selectedSpace.name === 'meeting-room' ? (
//                                         <div>
//                                             <span>Hour: {type.hour}</span>
//                                             <span> -  {type.price}</span>
//                                         </div>
//                                     ) : (
//                                         <div>
//                                             <span>{type.day}</span>
//                                             <span> - {type.price}</span>
//                                         </div>
//                                     )}
//                                 </div>
//                             ))}
//                         </div>
//                     </Modal.Body>
//                     <Modal.Footer>
//                         <Button variant="secondary" onClick={handleCloseModal}>
//                             Close
//                         </Button>
//                     </Modal.Footer>
//                 </Modal>
//             )}
//         </div>
//     );
// }


import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { FaWifi, FaParking, FaCoffee, FaUtensils, FaBicycle, FaDesktop, FaTree, FaSwimmingPool, FaDog, FaDumbbell } from 'react-icons/fa';
import { useSpace } from '../../contexts/SpaceContext';

export default function OfficeBooking() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [office, setOffice] = useState(null);
    const [spaces, setSpaces] = useState([])
    // const { spaces, isLoading, error } = useSpace();

    useEffect(() => {
        const fetchOffice = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/api/offices/${id}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setOffice(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchOffice();
    }, [id]);

    useEffect(() => {
        (async() => {
            console.log(id)
            // spacesDispatch({ type: 'LOADING' });
            try {
                const response = await axios.get(`http://localhost:3010/api/spaces/office/${id}`)
                    
                  console.log(response.data)
                  setSpaces(response.data)
                //   spacesDispatch({ type: 'SET_SPACES', payload: response.data})
            } catch(err) {
                console.log(err)
                // spacesDispatch({ type: 'ERROR', payload: err });
            }
        })();
      }, [id])

    const handleCardClick = (space) => {
        navigate(`/spaces/${space._id}/${space.name}`);
    };

    if (!office) {
        return <div>Loading...</div>;
    }

    const formatAddress = (address) => {
        return `${address.houseNumber}, ${address.areaAndStreet}, ${address.locality}, ${address.city} - ${address.pinCode}, ${address.state}, ${address.country}`;
    };

    const getMapUrl = (lat, lon) => {
        const apiKey = 'ab6864cc24fd4a2faad3d17ca8c7702c';
        return `https://maps.geoapify.com/v1/staticmap?style=osm-carto&width=600&height=400&center=lonlat:${lon},${lat}&zoom=13&marker=lonlat:${lon},${lat};type:material;color:%23ff0000;icontype:awesome&apiKey=${apiKey}`;
    };

    const getGeoapifyMapLink = (lat, lon) => {
        return `https://www.geoapify.com/maps?layer=osm-carto&lat=${lat}&lon=${lon}&zoom=13`;
    };

    const { coordinates } = office.location;

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
        'Green Space': <FaTree />,
    };

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-7">
                    <Card>
                        <Card.Img variant="top" src={office.image} />
                        <Card.Body>
                            <Card.Title>{office.name}</Card.Title>
                            <Card.Text>{office.description}</Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Address</Card.Title>
                                <Card.Text>{formatAddress(office.address)}</Card.Text>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Amenities</Card.Title>
                                <div className="row">
                                    {office.amenities.map((amenity, index) => (
                                        <div className="col-4 col-md-3 col-lg-2 mb-3" key={index}>
                                            <Card className="h-100">
                                                <Card.Body className="d-flex flex-column align-items-center justify-content-center">
                                                    {amenityIcons[amenity] || null}
                                                    <span>{amenity}</span>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                    <div className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Location</Card.Title>
                                <a href={getGeoapifyMapLink(coordinates[1], coordinates[0])} target="_blank" rel="noopener noreferrer">
                                    <iframe
                                        title="Office Location Map"
                                        width="100%"
                                        height="200"
                                        style={{ border: 0 }}
                                        src={getMapUrl(coordinates[1], coordinates[0])}
                                        allowFullScreen
                                        loading="lazy"
                                    ></iframe>
                                </a>
                            </Card.Body>
                        </Card>
                    </div>
                </div>

                <div className="col-md-5">
                    <div className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Select Space</Card.Title>
                                {/* {isLoading ? (
                                    <div>Loading spaces...</div>
                                ) : error ? (
                                    <div>Error loading spaces</div>
                                ) : (
                                    <div>
                                        {spaces.map((space, index) => (
                                            <div className="mb-3" key={index}>
                                                <Card className="h-100" >
                                                    <Card.Body>
                                                        <Card.Title  onClick={() => handleCardClick(space)}>{space.name}</Card.Title>
                                                        <Card.Text>{space.description}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                                )} */}
                                <div>
                                        {spaces.map((space, index) => (
                                            <div className="mb-3" key={index}>
                                                <Card className="h-100" >
                                                    <Card.Body>
                                                        <Card.Title  onClick={() => handleCardClick(space)}>{space.name}</Card.Title>
                                                        <Card.Text>{space.description}</Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </div>
                                        ))}
                                    </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}
