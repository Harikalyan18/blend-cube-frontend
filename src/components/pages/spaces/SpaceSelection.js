
// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();
//     }, [spaceId]);

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     const handleAddToCart = (type) => {
//         // Implement your logic for adding to cart here
//         console.log(`Added ${type.day ? `${type.day} day` : `${type.hour} hour`} option to cart.`);
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Pricing</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body>
//                                                     <Row>
//                                                     <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span>{type.day ? `${type.day}` : `${type.hour}`}</span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span>₹{type.price}/-</span>
//                                                         </Col>
//                                                         <Col className="d-flex justify-content-end">
//                                                             <Button variant="primary" onClick={() => handleAddToCart(type)}>
//                                                                 Add
//                                                             </Button>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();
//     }, [spaceId]);

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     const handleAddToCart = (type) => {
//         console.log(`Added ${type.day ? `${type.day} day` : `${type.hour} hour`} option to cart.`);
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Pricing</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span className="fw-bold bg-light p-1">
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span className="fw-bold bg-light p-1">
//                                                                 ₹{type.price}/-
//                                                             </span>
//                                                         </Col>
//                                                         <Col className="d-flex justify-content-end">
//                                                             <Button variant="primary" onClick={() => handleAddToCart(type)}>
//                                                                 Add
//                                                             </Button>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     const handleAddToCart = (type) => {
//         console.log(`Added ${type.day ? `${type.day} day` : `${type.hour} hour`} option to cart.`);
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body>
//                                                     <Row>
                                                        
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
                                                        
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                         <Col className="d-flex justify-content-end">
//                                                             <Button variant="primary" onClick={() => handleAddToCart(type)}>
//                                                                 Add
//                                                             </Button>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }



// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100">
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }

// import { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Accordion from 'react-bootstrap/Accordion';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [selectedDate, setSelectedDate] = useState(new Date());

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <Accordion>
//                                     {space.type.map((type, index) => (
//                                         <Accordion.Item eventKey={index.toString()} key={index}>
//                                             <Accordion.Header>
//                                                 <div className="d-flex justify-content-between w-100">
//                                                     <span style={{...customFontStyle, marginRight: 'auto'}}>
//                                                         {type.day ? `${type.day}` : `${type.hour}`}
//                                                     </span>
//                                                     <span style={{...customFontStyle, marginLeft: 'auto'}}>
//                                                         ₹{type.price}
//                                                     </span>
//                                                 </div>
//                                             </Accordion.Header>
//                                             <Accordion.Body>
//                                                 <Row>
//                                                     <Col className="d-flex align-items-center">
//                                                         <DatePicker
//                                                             selected={selectedDate}
//                                                             onChange={(date) => setSelectedDate(date)}
//                                                             inline
//                                                         />
//                                                     </Col>
//                                                 </Row>
//                                             </Accordion.Body>
//                                         </Accordion.Item>
//                                     ))}
//                                 </Accordion>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1); // Default to 1

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const handleCardClick = (day) => {
//         const dayValue = parseInt(day.replace('day', ''), 10);
//         setMaxSelectableDates(dayValue);
//         setSelectedDates([]); // Reset selected dates when a new card is clicked
//         setShowModal(true);
//     };

//     const handleDateChange = (dates) => {
//         if (Array.isArray(dates)) {
//             if (dates.length <= maxSelectableDates) {
//                 setSelectedDates(dates);
//             } else {
//                 setSelectedDates(dates.slice(0, maxSelectableDates));
//             }
//         } else {
//             setSelectedDates([dates]);
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Select Dates</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Calendar
//                         selectRange={false}
//                         selectMultiple={true}
//                         onChange={handleDateChange}
//                         value={selectedDates}
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         console.log(selectedDates);
//                         setShowModal(false);
//                     }}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1); // Default to 1
//     const [currentDaySelection, setCurrentDaySelection] = useState('');

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (Array.isArray(date)) {
//             const uniqueDates = [...new Set([...selectedDates, ...date])];
//             setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//         } else {
//             if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                 setSelectedDates([...selectedDates, date]);
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'highlighted-date' : null;
//         }
//         return null;
//     };

//     const tileDisabled = ({ date }) => {
//         if (selectedDates.length >= maxSelectableDates) {
//             return !selectedDates.some(d => d.toDateString() === date.toDateString());
//         }
//         return selectedDates.some(d => d.toDateString() === date.toDateString());
//     };

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Select Dates ({currentDaySelection})</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="mb-3">
//                         <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                     </div>
//                     <Calendar
//                         selectRange={false}
//                         selectMultiple={true}
//                         onChange={handleDateChange}
//                         value={selectedDates}
//                         tileClassName={tileClassName}
//                         tileDisabled={tileDisabled}
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         console.log(selectedDates);
//                         setShowModal(false);
//                     }}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1); // Default to 1
//     const [currentDaySelection, setCurrentDaySelection] = useState('');

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (Array.isArray(date)) {
//             const uniqueDates = [...new Set([...selectedDates, ...date])];
//             setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//         } else {
//             if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                 setSelectedDates([...selectedDates, date]);
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'highlighted-date' : null;
//         }
//         return null;
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false; // Only apply for month view
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date < today) return true; // Disable past dates
//         if (date.getDay() === 0) return true; // Disable Sundays
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true; // Disable already selected dates
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true; // Disable if max dates reached and not in selected dates
//         }

//         return false;
//     };

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Select Dates ({currentDaySelection})</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <div className="mb-3">
//                         <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                     </div>
//                     <Calendar
//                         selectRange={false}
//                         selectMultiple={true}
//                         onChange={handleDateChange}
//                         value={selectedDates}
//                         tileClassName={tileClassName}
//                         tileDisabled={tileDisabled}
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         console.log(selectedDates);
//                         setShowModal(false);
//                     }}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1); // Default to 1
//     const [currentDaySelection, setCurrentDaySelection] = useState('');

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]); // Reset selected dates when opening the modal
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (Array.isArray(date)) {
//             const uniqueDates = [...new Set([...selectedDates, ...date])];
//             setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//         } else {
//             if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                 setSelectedDates([...selectedDates, date]);
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'highlighted-date' : null;
//         }
//         return null;
//     };

//     const tileContent = ({ date, view }) => {
//         const dateStr = date.toISOString().split('T')[0];
//         if (view === 'month' && selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) {
//             return (
//                 <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f39c12', color: 'white', borderRadius: '50%', width: '100%', height: '100%' }}>
//                     {date.getDate()}
//                 </div>
//             );
//         }
//         return null;
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false; // Only apply for month view
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date < today) return true; // Disable past dates
//         if (date.getDay() === 0) return true; // Disable Sundays
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true; // Disable already selected dates
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true; // Disable if max dates reached and not in selected dates
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const startDate = selectedDates.length > 0 ? getFormattedDate(selectedDates[0]) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(selectedDates[selectedDates.length - 1]) : 'N/A';

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Select Dates ({currentDaySelection})</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Row className="mb-3">
//                         <Col><strong>Start Date:</strong> {startDate}</Col>
//                         <Col><strong>End Date:</strong> {endDate}</Col>
//                     </Row>
//                     <div className="mb-3">
//                         <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                     </div>
//                     <Calendar
//                         selectRange={false}
//                         selectMultiple={true}
//                         onChange={handleDateChange}
//                         value={selectedDates}
//                         tileClassName={tileClassName}
//                         tileContent={tileContent}
//                         tileDisabled={tileDisabled}
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         console.log(selectedDates);
//                         setShowModal(false);
//                     }}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';

// export default function SpaceSelection() {
//     const { spaceId } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1); // Default to 1
//     const [currentDaySelection, setCurrentDaySelection] = useState('');

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]); // Reset selected dates when opening the modal
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (Array.isArray(date)) {
//             const uniqueDates = [...new Set([...selectedDates, ...date])];
//             setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//         } else {
//             if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                 setSelectedDates(prevDates => {
//                     const newDates = [...prevDates, date];
//                     return newDates.slice(0, maxSelectableDates);
//                 });
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'highlighted-date' : null;
//         }
//         return null;
//     };

//     const tileContent = ({ date, view }) => {
//         const dateStr = date.toISOString().split('T')[0];
//         if (view === 'month' && selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) {
//             return (
//                 <div className="d-flex justify-content-center align-items-center" style={{ backgroundColor: '#f39c12', color: 'white', borderRadius: '50%', width: '100%', height: '100%' }}>
//                     {date.getDate()}
//                 </div>
//             );
//         }
//         return null;
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false; // Only apply for month view
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date < today) return true; // Disable past dates
//         if (date.getDay() === 0) return true; // Disable Sundays
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true; // Disable already selected dates
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true; // Disable if max dates reached and not in selected dates
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const startDate = selectedDates.length > 0 ? getFormattedDate(selectedDates[0]) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>Select Dates ({currentDaySelection})</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     <Row className="mb-3">
//                         <Col><strong>Start Date:</strong> {startDate}</Col>
//                         <Col><strong>End Date:</strong> {endDate}</Col>
//                     </Row>
//                     <div className="mb-3">
//                         <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                     </div>
//                     <Calendar
//                         selectRange={false}
//                         selectMultiple={true}
//                         onChange={handleDateChange}
//                         value={selectedDates}
//                         tileClassName={tileClassName}
//                         tileContent={tileContent}
//                         tileDisabled={tileDisabled}
//                     />
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => {
//                         console.log(selectedDates);
//                         setShowModal(false);
//                     }}>
//                         Save Changes
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }



// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SpaceSelection() {
//     const { spaceId, name } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [startTime, setStartTime] = useState(null);
//     const [endTime, setEndTime] = useState(null);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1);
//     const [currentDaySelection, setCurrentDaySelection] = useState('');

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]);
//         setSelectedDate(null);
//         setStartTime(null);
//         setEndTime(null);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (name === 'meeting-room') {
//             setSelectedDate(date);
//         } else {
//             if (Array.isArray(date)) {
//                 const uniqueDates = [...new Set([...selectedDates, ...date])];
//                 setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//             } else {
//                 if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                     setSelectedDates(prevDates => {
//                         const newDates = [...prevDates, date];
//                         return newDates.slice(0, maxSelectableDates);
//                     });
//                 }
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'bg-primary text-white' : '';
//         }
//         return '';
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date < today) return true;
//         if (date.getDay() === 0) return true;
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true;
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true;
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const getFormattedTime = (date) => {
//         if (!date) return '';
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     const startDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.min(...selectedDates.map(date => date.getTime())))) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

//     const modalTitle = name === 'meeting-room' ? 'Select a Date and Time' : `Select Dates (${currentDaySelection})`;

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalTitle}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {name === 'meeting-room' ? (
//                         <>
//                             <DatePicker
//                                 selected={selectedDate}
//                                 onChange={date => handleDateChange(date)}
//                                 inline
//                                 showTimeSelect
//                                 dateFormat="MMMM d, yyyy h:mm aa"
//                                 filterDate={date => {
//                                     const today = new Date();
//                                     today.setHours(0, 0, 0, 0);
//                                     return date >= today && date.getDay() !== 0;
//                                 }}
//                             />
//                             <div className="mb-3">
//                                 <strong>Start Time:</strong>{                            <DatePicker
//                                 selected={startTime}
//                                 onChange={time => setStartTime(time)}
//                                 showTimeSelect
//                                 showTimeSelectOnly
//                                 timeIntervals={30}
//                                 timeCaption="Start Time"
//                                 dateFormat="h:mm aa"
//                                 className="mb-3"
//                             />}
//                             <col></col>
//                                 <strong>End Time:</strong>{
//                             <DatePicker
//                                 selected={endTime}
//                                 onChange={time => setEndTime(time)}
//                                 showTimeSelect
//                                 showTimeSelectOnly
//                                 timeIntervals={30}
//                                 timeCaption="End Time"
//                                 dateFormat="h:mm aa"
//                             />
//                                 }
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <Row className="mb-3">
//                                 <Col><strong>Start Date:</strong> {startDate}</Col>
//                                 <Col><strong>End Date:</strong> {endDate}</Col>
//                             </Row>
//                             <div className="mb-3">
//                                 <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                             </div>
//                             <Calendar
//                                 selectRange={false}
//                                 selectMultiple={true}
//                                 onChange={handleDateChange}
//                                 value={selectedDates}
//                                 tileClassName={tileClassName}
//                                 tileDisabled={tileDisabled}
//                             />
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => setShowModal(false)}>
//                         Book
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SpaceSelection() {
//     const { spaceId, name } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [startTime, setStartTime] = useState(null);
//     const [endTime, setEndTime] = useState(null);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1);
//     const [currentDaySelection, setCurrentDaySelection] = useState('');
//     const [duration, setDuration] = useState(1); // Default to 1 hour
//     const [pricePerHour, setPricePerHour] = useState(0); // Price per hour

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]);
//         setSelectedDate(null);
//         setStartTime(null);
//         setEndTime(null);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (name === 'meeting-room') {
//             setSelectedDate(date);
//         } else {
//             if (Array.isArray(date)) {
//                 const uniqueDates = [...new Set([...selectedDates, ...date])];
//                 setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//             } else {
//                 if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                     setSelectedDates(prevDates => {
//                         const newDates = [...prevDates, date];
//                         return newDates.slice(0, maxSelectableDates);
//                     });
//                 }
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'bg-primary text-white' : '';
//         }
//         return '';
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date <= today) return true;
//         if (date.getDay() === 0) return true;
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true;
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true;
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const getFormattedTime = (date) => {
//         if (!date) return '';
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     const calculatePrice = () => {
//         if (space && space.type) {
//             const type = space.type.find(t => t.day === currentDaySelection || t.hour);
//             if (type) {
//                 return type.price * duration;
//             }
//         }
//         return 0;
//     };

//     const handleDurationChange = (e) => {
//         const newDuration = parseInt(e.target.value, 10);
//         setDuration(newDuration);
//     };

//     useEffect(() => {
//         if (startTime) {
//             const end = new Date(startTime.getTime());
//             end.setHours(startTime.getHours() + duration);
//             end.setMinutes(startTime.getMinutes());
//             setEndTime(end);
//         }
//     }, [startTime, duration]);

//     const startDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.min(...selectedDates.map(date => date.getTime())))) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

//     const modalTitle = name === 'meeting-room' ? 'Select Date & Time :' : `Select Dates (${currentDaySelection})`;

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalTitle}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {name === 'meeting-room' ? (

//                         <>
//                             <div className="mb-3">
//                                 <strong>Duration (hours):</strong>
//                                 <input
//                                     type="number"
//                                     value={duration}
//                                     min="1"
//                                     max="10"
//                                     onChange={handleDurationChange}
//                                     className="form-control"
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>Total Price: ₹{calculatePrice()}</strong>
//                             </div>
//                             <DatePicker
//                                 selected={selectedDate}
//                                 onChange={date => handleDateChange(date)}
//                                 inline
//                                 dateFormat="MMMM d, yyyy"
//                                 filterDate={date => {
//                                     const today = new Date();
//                                     today.setHours(0, 0, 0, 0);
//                                     return date >= today && date.getDay() !== 0;
//                                 }}
//                             />
//                             <div className="mb-3">
//                                 <strong>Start Time:</strong>
//                                 <DatePicker
//                                     selected={startTime}
//                                     onChange={time => setStartTime(time)}
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="Start Time"
//                                     dateFormat="h:mm aa"
//                                     className="mb-3"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 8 && selectedTime.getHours() < 17;
//                                     }}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>End Time:</strong>
//                                 <DatePicker
//                                     selected={endTime}
//                                     onChange={time => setEndTime(time)}
//                                     readOnly
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="End Time"
//                                     dateFormat="h:mm aa"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 9 && selectedTime.getHours() <= 18;
//                                     }}
//                                 />
//                             </div>
//                         </>
//                     ) : (

//                         <>
//                             <Row className="mb-3">
//                                 <Col><strong>Start Date:</strong> {startDate}</Col>
//                                 <Col><strong>End Date:</strong> {endDate}</Col>
//                             </Row>
//                             <div className="mb-3">
//                                 <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                             </div>
//                             <Calendar
//                                 selectRange={false}
//                                 selectMultiple={true}
//                                 onChange={handleDateChange}
//                                 value={selectedDates}
//                                 tileClassName={tileClassName}
//                                 tileDisabled={tileDisabled}
//                             />
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => setShowModal(false)}>
//                         Book
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SpaceSelection() {
//     const { spaceId, name } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [startTime, setStartTime] = useState(null);
//     const [endTime, setEndTime] = useState(null);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1);
//     const [currentDaySelection, setCurrentDaySelection] = useState('');
//     const [duration, setDuration] = useState(1); // Default to 1 hour
//     const [pricePerHour, setPricePerHour] = useState(0); // Price per hour

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]);
//         setSelectedDate(null);
//         setStartTime(null);
//         setEndTime(null);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (name === 'meeting-room') {
//             setSelectedDate(date);
//         } else {
//             if (Array.isArray(date)) {
//                 const uniqueDates = [...new Set([...selectedDates, ...date])];
//                 setSelectedDates(uniqueDates.slice(0, maxSelectableDates));
//             } else {
//                 if (selectedDates.length < maxSelectableDates && !selectedDates.includes(date)) {
//                     setSelectedDates(prevDates => {
//                         const newDates = [...prevDates, date];
//                         return newDates.slice(0, maxSelectableDates);
//                     });
//                 }
//             }
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'bg-primary text-white' : '';
//         }
//         return '';
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date <= today) return true;
//         if (date.getDay() === 0) return true;
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true;
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true;
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const getFormattedTime = (date) => {
//         if (!date) return '';
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     const calculatePrice = () => {
//         if (space && space.type) {
//             const type = space.type.find(t => t.day === currentDaySelection || t.hour);
//             if (type) {
//                 return type.price * duration;
//             }
//         }
//         return 0;
//     };

//     const handleDurationChange = (e) => {
//         const newDuration = parseInt(e.target.value, 10);
//         setDuration(newDuration);
//     };

//     useEffect(() => {
//         if (startTime) {
//             const end = new Date(startTime.getTime());
//             end.setHours(startTime.getHours() + duration);
//             end.setMinutes(startTime.getMinutes());
//             setEndTime(end);
//         }
//     }, [startTime, duration]);

//     const startDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.min(...selectedDates.map(date => date.getTime())))) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

//     const modalTitle = name === 'meeting-room' ? 'Select Date & Time :' : `Select Dates (${currentDaySelection})`;

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalTitle}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {name === 'meeting-room' ? (
//                         <>
//                             <div className="mb-3">
//                                 <strong>Duration (hours):</strong>
//                                 <input
//                                     type="number"
//                                     value={duration}
//                                     min="1"
//                                     max="10"
//                                     onChange={handleDurationChange}
//                                     className="form-control"
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>Total Price: ₹{calculatePrice()}</strong>
//                             </div>
//                             <div className="d-flex justify-content-center mb-3">
//                                 <DatePicker
//                                     selected={selectedDate}
//                                     onChange={date => handleDateChange(date)}
//                                     inline
//                                     dateFormat="MMMM d, yyyy"
//                                     filterDate={date => {
//                                         const today = new Date();
//                                         today.setHours(0, 0, 0, 0);
//                                         return date >= today && date.getDay() !== 0;
//                                     }}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>Start Time :</strong>
//                                 <col></col>
//                                 <DatePicker
//                                     selected={startTime}
//                                     onChange={time => setStartTime(time)}
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="Start Time"
//                                     dateFormat="h:mm aa"
//                                     className="form-control"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 8 && selectedTime.getHours() < 17;
//                                     }}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>End Time :</strong>
//                                 <col></col>
//                                 <DatePicker
//                                     selected={endTime}
//                                     onChange={time => setEndTime(time)}
//                                     readOnly
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="End Time"
//                                     dateFormat="h:mm aa"
//                                     className="form-control"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 9 && selectedTime.getHours() <= 18;
//                                     }}
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <Row className="mb-3">
//                                 <Col><strong>Start Date:</strong> {startDate}</Col>
//                                 <Col><strong>End Date:</strong> {endDate}</Col>
//                             </Row>
//                             <div className="mb-3">
//                                 <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                             </div>
//                             <div className="d-flex justify-content-center">
//                                 <Calendar
//                                     selectRange={false}
//                                     selectMultiple={true}
//                                     onChange={handleDateChange}
//                                     value={selectedDates}
//                                     tileClassName={tileClassName}
//                                     tileDisabled={tileDisabled}
//                                 />
//                             </div>
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => setShowModal(false)}>
//                         Book
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }


// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Modal from 'react-bootstrap/Modal';
// import Button from 'react-bootstrap/Button';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
// import DatePicker from 'react-datepicker';
// import 'react-datepicker/dist/react-datepicker.css';

// export default function SpaceSelection() {
//     const { spaceId, name } = useParams();
//     const [space, setSpace] = useState(null);
//     const [showModal, setShowModal] = useState(false);
//     const [selectedDates, setSelectedDates] = useState([]);
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [startTime, setStartTime] = useState(null);
//     const [endTime, setEndTime] = useState(null);
//     const [maxSelectableDates, setMaxSelectableDates] = useState(1);
//     const [currentDaySelection, setCurrentDaySelection] = useState('');
//     const [duration, setDuration] = useState(1); // Default to 1 hour
//     const [pricePerHour, setPricePerHour] = useState(0); // Price per hour

//     useEffect(() => {
//         const fetchSpace = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
//                     headers: {
//                         'Authorization': localStorage.getItem('token')
//                     }
//                 });
//                 setSpace(response.data);
//             } catch (err) {
//                 console.error(err);
//             }
//         };

//         fetchSpace();

//         const link = document.createElement('link');
//         link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
//         link.rel = 'stylesheet';
//         document.head.appendChild(link);
//     }, [spaceId]);

//     const dayOptions = {
//         '1day': 1,
//         '5day': 5,
//         '10day': 10
//     };

//     const handleCardClick = (day) => {
//         const dayValue = dayOptions[day];
//         setMaxSelectableDates(dayValue);
//         setCurrentDaySelection(day);
//         setSelectedDates([]);
//         setSelectedDate(null);
//         setStartTime(null);
//         setEndTime(null);
//         setShowModal(true);
//     };

//     const handleDateChange = (date) => {
//         if (name === 'meeting-room') {
//             setSelectedDate(date);
//         } else {
//             const dates = [];
//             let currentDate = new Date(date);
//             while (dates.length < maxSelectableDates) {
//                 if (currentDate.getDay() !== 0) { // Exclude Sundays
//                     dates.push(new Date(currentDate));
//                 }
//                 currentDate.setDate(currentDate.getDate() + 1);
//             }
//             setSelectedDates(dates);
//         }
//     };

//     const customFontStyle = {
//         fontFamily: 'Roboto, sans-serif',
//         fontWeight: '700',
//         backgroundColor: '#f8f9fa',
//         padding: '0.25em'
//     };

//     const tileClassName = ({ date, view }) => {
//         if (view === 'month') {
//             const dateStr = date.toISOString().split('T')[0];
//             return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'selected-date' : '';
//         }
//         return '';
//     };

//     const tileDisabled = ({ date, view }) => {
//         if (view !== 'month') return false;
//         const today = new Date();
//         today.setHours(0, 0, 0, 0);
//         const dateStr = date.toISOString().split('T')[0];

//         if (date <= today) return true;
//         if (date.getDay() === 0) return true;
//         if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true;
//         if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
//             return true;
//         }

//         return false;
//     };

//     const getFormattedDate = (date) => {
//         if (!date) return '';
//         return date.toLocaleDateString();
//     };

//     const getFormattedTime = (date) => {
//         if (!date) return '';
//         return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
//     };

//     const calculatePrice = () => {
//         if (space && space.type) {
//             const type = space.type.find(t => t.day === currentDaySelection || t.hour);
//             if (type) {
//                 return type.price * duration;
//             }
//         }
//         return 0;
//     };

//     const handleDurationChange = (e) => {
//         const newDuration = parseInt(e.target.value, 10);
//         setDuration(newDuration);
//     };

//     useEffect(() => {
//         if (startTime) {
//             const end = new Date(startTime.getTime());
//             end.setHours(startTime.getHours() + duration);
//             end.setMinutes(startTime.getMinutes());
//             setEndTime(end);
//         }
//     }, [startTime, duration]);

//     const startDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.min(...selectedDates.map(date => date.getTime())))) : 'N/A';
//     const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

//     const modalTitle = name === 'meeting-room' ? 'Select Date & Time :' : `Select Dates (${currentDaySelection})`;

//     if (!space) {
//         return <div>Loading...</div>;
//     }

//     return (
//         <Container className="mt-5">
//             <Row className="justify-content-center">
//                 <Col md={8}>
//                     <Card>
//                         <Card.Img variant="top" src={space.image} />
//                         <Card.Body>
//                             <Card.Title>{space.name}</Card.Title>
//                             <Card.Text>{space.description}</Card.Text>
//                         </Card.Body>
//                     </Card>

//                     <div className="mt-3">
//                         <Card>
//                             <Card.Body>
//                                 <Card.Title>Price Details :</Card.Title>
//                                 <div className="row">
//                                     {space.type.map((type, index) => (
//                                         <div className="col-md-12 mb-3" key={index}>
//                                             <Card className="h-100" onClick={() => handleCardClick(type.day)} style={{ cursor: 'pointer' }}>
//                                                 <Card.Body>
//                                                     <Row>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 {type.day ? `${type.day}` : `${type.hour}`}
//                                                             </span>
//                                                         </Col>
//                                                         <Col></Col>
//                                                         <Col className="d-flex align-items-center">
//                                                             <span style={customFontStyle}>
//                                                                 ₹{type.price}
//                                                             </span>
//                                                         </Col>
//                                                     </Row>
//                                                 </Card.Body>
//                                             </Card>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </Card.Body>
//                         </Card>
//                     </div>
//                 </Col>
//             </Row>

//             <Modal show={showModal} onHide={() => setShowModal(false)}>
//                 <Modal.Header closeButton>
//                     <Modal.Title>{modalTitle}</Modal.Title>
//                 </Modal.Header>
//                 <Modal.Body>
//                     {name === 'meeting-room' ? (
//                         <>
//                             <div className="mb-3">
//                                 <strong>Duration (hours):</strong>
//                                 <input
//                                     type="number"
//                                     value={duration}
//                                     min="1"
//                                     max="10"
//                                     onChange={handleDurationChange}
//                                     className="form-control"
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>Total Price: ₹{calculatePrice()}</strong>
//                             </div>
//                             <div className="d-flex justify-content-center mb-3">
//                                 <DatePicker
//                                     selected={selectedDate}
//                                     onChange={date => handleDateChange(date)}
//                                     inline
//                                     dateFormat="MMMM d, yyyy"
//                                     filterDate={date => {
//                                         const today = new Date();
//                                         today.setHours(0, 0, 0, 0);
//                                         return date >= today && date.getDay() !== 0;
//                                     }}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>Start Time :</strong>
//                                 <col></col>
//                                 <DatePicker
//                                     selected={startTime}
//                                     onChange={time => setStartTime(time)}
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="Start Time"
//                                     dateFormat="h:mm aa"
//                                     className="form-control"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 8 && selectedTime.getHours() < 17;
//                                     }}
//                                 />
//                             </div>
//                             <div className="mb-3">
//                                 <strong>End Time :</strong>
//                                 <col></col>
//                                 <DatePicker
//                                     selected={endTime}
//                                     onChange={time => setEndTime(time)}
//                                     readOnly
//                                     showTimeSelect
//                                     showTimeSelectOnly
//                                     timeIntervals={30}
//                                     timeCaption="End Time"
//                                     dateFormat="h:mm aa"
//                                     className="form-control"
//                                     filterTime={time => {
//                                         const currentDate = selectedDate || new Date();
//                                         currentDate.setHours(0, 0, 0, 0);
//                                         const selectedTime = new Date(time);
//                                         selectedTime.setSeconds(0, 0);
//                                         return selectedTime.getHours() >= 9 && selectedTime.getHours() <= 18;
//                                     }}
//                                 />
//                             </div>
//                         </>
//                     ) : (
//                         <>
//                             <Row className="mb-3">
//                                 <Col><strong>Start Date:</strong> {startDate}</Col>
//                                 <Col><strong>End Date:</strong> {endDate}</Col>
//                             </Row>
//                             <div className="mb-3">
//                                 <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
//                             </div>
//                             <div className="d-flex justify-content-center">
//                                 <Calendar
//                                     selectRange={false}
//                                     selectMultiple={true}
//                                     onChange={handleDateChange}
//                                     value={selectedDates}
//                                     tileClassName={tileClassName}
//                                     tileDisabled={tileDisabled}
//                                     tileContent={({ date, view }) => {
//                                         const dateStr = date.toISOString().split('T')[0];
//                                         if (view === 'month' && selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) {
//                                             return (
//                                                 <div className="highlight" style={{ position: 'relative', display: 'inline-block' }}>
//                                                     <div style={{
//                                                         width: '100%',
//                                                         height: '100%',
//                                                         backgroundColor: 'rgba(0, 123, 255, 0.25)',
//                                                         borderRadius: '50%'
//                                                     }}>
//                                                     </div>
//                                                 </div>
//                                             );
//                                         }
//                                         return null;
//                                     }}
//                                 />
//                             </div>
//                         </>
//                     )}
//                 </Modal.Body>
//                 <Modal.Footer>
//                     <Button variant="secondary" onClick={() => setShowModal(false)}>
//                         Close
//                     </Button>
//                     <Button variant="primary" onClick={() => setShowModal(false)}>
//                         Book
//                     </Button>
//                 </Modal.Footer>
//             </Modal>
//         </Container>
//     );
// }



import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export default function SpaceSelection() {
    const { spaceId, name } = useParams();
    const navigate = useNavigate();
    const [space, setSpace] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [selectedDates, setSelectedDates] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
    const [startTime, setStartTime] = useState(null);
    const [endTime, setEndTime] = useState(null);
    const [maxSelectableDates, setMaxSelectableDates] = useState(1);
    const [currentDaySelection, setCurrentDaySelection] = useState('');
    const [duration, setDuration] = useState(1); // Default to 1 hour
    const [pricePerHour, setPricePerHour] = useState(0); // Price per hour
    const [spaceType, setSpaceType] = useState(null);

    console.log(currentDaySelection, 'day')

    useEffect(() => {
        const fetchSpace = async () => {
            try {
                const response = await axios.get(`http://localhost:3010/api/spaces/${spaceId}`, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
                setSpace(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSpace();

        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Roboto:wght@700&display=swap';
        link.rel = 'stylesheet';
        document.head.appendChild(link);
    }, [spaceId]);

    const dayOptions = {
        '1day': 1,
        '5day': 5,
        '10day': 10
    };

    const handleCardClick = (type) => {
        const dayValue = dayOptions[type.day];
        setMaxSelectableDates(dayValue);
        setCurrentDaySelection(type.day);
        setSpaceType(type._id)
        setSelectedDates([]);
        setSelectedDate(null);
        setStartTime(null);
        setEndTime(null);
        setShowModal(true);
    };

    const handleDateChange = (date) => {
        if (name === 'meeting-room') {
            setSelectedDate(date);
        } else {
            const dates = [];
            let currentDate = new Date(date);
            while (dates.length < maxSelectableDates) {
                if (currentDate.getDay() !== 0) { // Exclude Sundays
                    dates.push(new Date(currentDate));
                }
                currentDate.setDate(currentDate.getDate() + 1);
            }
            setSelectedDates(dates);
        }
    };

    const customFontStyle = {
        fontFamily: 'Roboto, sans-serif',
        fontWeight: '700',
        backgroundColor: '#f8f9fa',
        padding: '0.25em'
    };

    const tileClassName = ({ date, view }) => {
        if (view === 'month') {
            const dateStr = date.toISOString().split('T')[0];
            return selectedDates.some(d => d.toISOString().split('T')[0] === dateStr) ? 'selected-date' : '';
        }
        return '';
    };

    const tileDisabled = ({ date, view }) => {
        if (view !== 'month') return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const dateStr = date.toISOString().split('T')[0];

        if (date <= today) return true;
        if (date.getDay() === 0) return true;
        if (selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) return true;
        if (selectedDates.length >= maxSelectableDates && !selectedDates.some(d => d.toDateString() === date.toDateString())) {
            return true;
        }

        return false;
    };

    const getFormattedDate = (date) => {
        if (!date) return '';
        return date.toLocaleDateString();
    };

    const getFormattedTime = (date) => {
        if (!date) return '';
        return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const calculatePrice = () => {
        if (space && space.type) {
            const type = space.type.find(t => t.day === currentDaySelection || t.hour);
            if (type) {
                return type.price * duration;
            }
        }
        return 0;
    };

    const handleDurationChange = (e) => {
        const newDuration = parseInt(e.target.value, 10);
        setDuration(newDuration);
    };

    useEffect(() => {
        if (startTime) {
            const end = new Date(startTime.getTime());
            end.setHours(startTime.getHours() + duration);
            end.setMinutes(startTime.getMinutes());
            setEndTime(end);
        }
    }, [startTime, duration]);

    const startDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.min(...selectedDates.map(date => date.getTime())))) : 'N/A';
    const endDate = selectedDates.length > 0 ? getFormattedDate(new Date(Math.max(...selectedDates.map(date => date.getTime())))) : 'N/A';

    const modalTitle = name === 'meeting-room' ? 'Select Date & Time :' : `Select Dates (${currentDaySelection})`;

    const handleBooking = async() => {
        const formData = {
            space: spaceId,
            office: space.office._id,
            currentDaySelection,
            spaceType,
            duration,
            totalAmount: calculatePrice()
        }
        try{
            const response = await axios.post('http://localhost:3010/api/booking', formData, {
                    headers: {
                        'Authorization': localStorage.getItem('token')
                    }
                });
            console.log(response.data)

            const bookingId = response.data._id

            navigate(`/booking/${bookingId}`, { 
                state: {
                    space,
                    selectedDates,
                    selectedDate,
                    startTime,
                    endTime,
                    duration,
                    totalPrice: calculatePrice()
                }
            });
        } catch(err) {
            console.log(err)
        }
    };

    if (!space) {
        return <div>Loading...</div>;
    }

    return (
        <Container className="mt-5">
            <Row className="justify-content-center">
                <Col md={8}>
                    <Card>
                        <Card.Img variant="top" src={space.image} />
                        <Card.Body>
                            <Card.Title>{space.name}</Card.Title>
                            <Card.Text>{space.description}</Card.Text>
                        </Card.Body>
                    </Card>

                    <div className="mt-3">
                        <Card>
                            <Card.Body>
                                <Card.Title>Price Details :</Card.Title>
                                <div className="row">
                                    {space.type.map((type, index) => (
                                        <div className="col-md-12 mb-3" key={index}>
                                            <Card className="h-100" onClick={() => handleCardClick(type)} style={{ cursor: 'pointer' }}>
                                                <Card.Body>
                                                    <Row>
                                                        <Col className="d-flex align-items-center">
                                                            <span style={customFontStyle}>
                                                                {type.day ? `${type.day}` : `${type.hour}`}
                                                            </span>
                                                        </Col>
                                                        <Col></Col>
                                                        <Col className="d-flex align-items-center">
                                                            <span style={customFontStyle}>
                                                                ₹{type.price}
                                                            </span>
                                                        </Col>
                                                    </Row>
                                                </Card.Body>
                                            </Card>
                                        </div>
                                    ))}
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>

            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>{modalTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {name === 'meeting-room' ? (
                        <>
                            <div className="mb-3">
                                <strong>Duration (hours):</strong>
                                <input
                                    type="number"
                                    value={duration}
                                    min="1"
                                    max="10"
                                    onChange={handleDurationChange}
                                    className="form-control"
                                />
                            </div>
                            <div className="mb-3">
                                <strong>Total Price: ₹{calculatePrice()}</strong>
                            </div>
                            <div className="d-flex justify-content-center mb-3">
                                <DatePicker
                                    selected={selectedDate}
                                    onChange={date => handleDateChange(date)}
                                    inline
                                    dateFormat="MMMM d, yyyy"
                                    filterDate={date => {
                                        const today = new Date();
                                        today.setHours(0, 0, 0, 0);
                                        return date >= today && date.getDay() !== 0;
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <strong>Start Time :</strong>
                                <col></col>
                                <DatePicker
                                    selected={startTime}
                                    onChange={time => setStartTime(time)}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="Start Time"
                                    dateFormat="h:mm aa"
                                    className="form-control"
                                    filterTime={time => {
                                        const currentDate = selectedDate || new Date();
                                        currentDate.setHours(0, 0, 0, 0);
                                        const selectedTime = new Date(time);
                                        selectedTime.setSeconds(0, 0);
                                        return selectedTime.getHours() >= 8 && selectedTime.getHours() < 17;
                                    }}
                                />
                            </div>
                            <div className="mb-3">
                                <strong>End Time :</strong>
                                <col></col>
                                <DatePicker
                                    selected={endTime}
                                    onChange={time => setEndTime(time)}
                                    readOnly
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={30}
                                    timeCaption="End Time"
                                    dateFormat="h:mm aa"
                                    className="form-control"
                                    filterTime={time => {
                                        const currentDate = selectedDate || new Date();
                                        currentDate.setHours(0, 0, 0, 0);
                                        const selectedTime = new Date(time);
                                        selectedTime.setSeconds(0, 0);
                                        return selectedTime.getHours() >= 9 && selectedTime.getHours() <= 18;
                                    }}
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <Row className="mb-3">
                                <Col><strong>Start Date:</strong> {startDate}</Col>
                                <Col><strong>End Date:</strong> {endDate}</Col>
                            </Row>
                            <div className="mb-3">
                                <strong>Selected Dates: {selectedDates.length}/{maxSelectableDates}</strong>
                            </div>
                            <div className="d-flex justify-content-center">
                                <Calendar
                                    selectRange={false}
                                    selectMultiple={true}
                                    onChange={handleDateChange}
                                    value={selectedDates}
                                    tileClassName={tileClassName}
                                    tileDisabled={tileDisabled}
                                    tileContent={({ date, view }) => {
                                        const dateStr = date.toISOString().split('T')[0];
                                        if (view === 'month' && selectedDates.some(d => d.toISOString().split('T')[0] === dateStr)) {
                                            return (
                                                <div className="highlight" style={{ position: 'relative', display: 'inline-block' }}>
                                                    <div style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        backgroundColor: 'rgba(0, 123, 255, 0.25)',
                                                        borderRadius: '50%'
                                                    }}>
                                                    </div>
                                                </div>
                                            );
                                        }
                                        return null;
                                    }}
                                />
                            </div>
                        </>
                    )}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleBooking}>
                        Book
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container>
    );
}
