// import { useOffice } from "../../contexts/OfficeContext"

// export default function OfficeList() {
//     const { offices }  = useOffice()
//     return (
//         <div>
//             <h2>Office List - {offices.data.length}</h2>
//             <ul>
//                 { offices.data.map((ele) => {
//                     return <li key={ele._id}>{ele.name}</li>
//                 })}
//             </ul>
//         </div>
//     )
// }


import React from "react";
import { useOffice } from "../../contexts/OfficeContext";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

export default function OfficeList() {
    const { offices } = useOffice();
    const navigate = useNavigate()
    const formatAddress = (address) => {
        return `${address.houseNumber}, ${address.areaAndStreet}, ${address.locality}, ${address.city} - ${address.pinCode}`;
    };

    const handleCardClick = (id) => {
        navigate(`/office/details/${id}`)
    }

    return (
        <div>
            <h2>Office List - {offices.data.length}</h2>
            <Row className="g-3">
                {offices.data.map((office) => (
                    <Col key={office._id} xs={12} sm={6} md={4} lg={2}>
                        <Card className="h-100" style={{ height: '200px' }} onClick={()=> {
                            handleCardClick(office._id)
                        }}>
                            <Card.Img 
                                variant="top" 
                                src={office.image} 
                                style={{ objectFit: 'cover', height: '150px' }} 
                            />
                            <Card.Body className="d-flex flex-column" style={{ padding: '10px' }}>
                                <Card.Title style={{ fontSize: '1rem', marginBottom: '0.5rem' }}>{office.name}</Card.Title>
                                <Card.Text style={{ fontSize: '0.875rem' }}>
                                    Address: {formatAddress(office.address)}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
