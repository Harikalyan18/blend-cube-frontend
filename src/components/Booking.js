
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import Card from 'react-bootstrap/Card';
// import Container from 'react-bootstrap/Container';
// import Row from 'react-bootstrap/Row';
// import Col from 'react-bootstrap/Col';
// import Spinner from 'react-bootstrap/Spinner';

// const BookingDetails = () => {
//   const { bookingId } = useParams();
//   const [booking, setBooking] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchBooking = async () => {
//       try {
//         const response = await axios.get(`http://localhost:3010/api/booking/${bookingId}`, {
//           headers: {
//             'Authorization': localStorage.getItem('token')
//           }
//         });
//         setBooking(response.data);
//         console.log(response.data);
//         setLoading(false);
//       } catch (err) {
//         console.error(err);
//         setLoading(false);
//       }
//     };

//     fetchBooking();
//   }, [bookingId]);

//   if (loading) {
//     return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
//   }

//   if (!booking) {
//     return <div>No booking details found.</div>;
//   }

//   let displaySpaceType = 'N/A';


//     if (booking.space.name === 'meeting room'||booking.space.name === 'meeting-room') {
//       displaySpaceType = `${booking.duration} hours`;
//     } else if (booking.space.name === 'single seat' || booking.space.name === 'single-seat' || booking.space.name === 'private cabin'|| booking.space.name === 'private-cabin') {
//       displaySpaceType = `${booking.currentDaySelection}`;
//     }

//   return (
//     <Container className="mt-5">
//       <Row className="justify-content-center">
//         <Col md={8}>
//           <Card>
//             <Card.Body>
//               <Card.Title>Booking Details :-</Card.Title>
//               <Card.Text>
//                 <strong>Office Name:</strong> {booking.office.name}<br />
//                 <strong>Space Name:</strong> {booking.space.name}<br />
//                 <strong>Time:</strong>{displaySpaceType}<br />
//                 <strong>Total Amount:</strong> ₹{booking.totalAmount}/-<br />
//                 <strong>Office Location:</strong> {`${booking.office.address.houseNumber}, ${booking.office.address.areaAndStreet}, ${booking.office.address.locality}, ${booking.office.address.city}, ${booking.office.address.state}, ${booking.office.address.country}`}<br />
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       </Row>
//     </Container>
//   );
// };

// export default BookingDetails;


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
// import { loadStripe } from '@stripe/stripe-js';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from 'react-bootstrap/Spinner';
import Button from 'react-bootstrap/Button';

// const stripePromise = loadStripe('pk_test_51PSw8v09f9SFGllzSQrgdlnu7EQ3EBKHXoMXwtzEK9MZTnMGKrPTkPQtADgOMpmmIqNBzgxegLx4ps2zqCO1uToj00dST586Xl');

const BookingDetails = () => {
  const { bookingId } = useParams();
  const [booking, setBooking] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooking = async () => {
      try {
        const response = await axios.get(`http://localhost:3010/api/booking/${bookingId}`, {
          headers: {
            'Authorization': localStorage.getItem('token')
          }
        });
        setBooking(response.data);
        console.log(response.data);
        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchBooking();
  }, [bookingId]);

  const handlePayment = async () => {
    try {
      const response = await axios.post('http://localhost:3010/api/payment/create-checkout-session', {
        bookingId,
        user: booking.user._id,
        amount: booking.totalAmount
      }, {
        headers: {
          Authorization : localStorage.getItem('token')
        }
      })
      
    //Store the transaction id in local storage
    localStorage.setItem('stripeId', response.data.id)
        
    //Redirecting the user to the chekout page of stripe
    window.location = response.data.url; 

      // const stripe = await stripePromise;
      // await stripe.redirectToCheckout({ sessionId: data.sessionId });
    } catch (err) {
      console.error(err);
    }
  };

  if (loading) {
    return <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>;
  }

  if (!booking) {
    return <div>No booking details found.</div>;
  }

  let displaySpaceType = 'N/A';

  if (booking.space.name === 'meeting room' || booking.space.name === 'meeting-room') {
    displaySpaceType = `${booking.duration} hours`;
  } else if (booking.space.name === 'single seat' || booking.space.name === 'single-seat' || booking.space.name === 'private cabin' || booking.space.name === 'private-cabin') {
    displaySpaceType = `${booking.currentDaySelection}`;
  }

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col md={8}>
          <Card>
            <Card.Body>
              <Card.Title>Booking Details</Card.Title>
              <Card.Text>
                <strong>Office Name:</strong> {booking.office.name}<br />
                <strong>Office Location:</strong> {`${booking.office.address.houseNumber}, ${booking.office.address.areaAndStreet}, ${booking.office.address.locality}, ${booking.office.address.city}, ${booking.office.address.state}, ${booking.office.address.country}`}<br />
                <strong>Space Name:</strong> {booking.space.name}<br />
                <strong>Time:</strong> {displaySpaceType}<br />
                <strong>Total Amount:</strong> ₹{booking.totalAmount}/-<br />
              </Card.Text>
              <Button variant="primary" onClick={handlePayment}>Pay</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BookingDetails;
