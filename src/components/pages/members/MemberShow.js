// import axios from 'axios'
// import { useParams } from 'react-router-dom'
import { useMember } from '../../contexts/MemberContext'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import MemberDetailsForm from './MemberForm';

export default function MemberProfile() {

  const [modal, setModal] = useState(false);

    const { member } = useMember()
    // const { id } = useParams()
    console.log('Member',member)

    const toggle = () =>{ 
        setModal(!modal)
    }

    

    // const handleRemove = async() => {
    //     try {
    //         const response = await axios.delete(`http://localhost:3010/api/members/${id}`, {
    //             headers: {
    //                 Authorization: localStorage.getItem('token')
    //             }
    //         })
    //         memberDispatch({ type: 'REMOVE_MEMBER_DETAILS', payload: response.data})

    //     } catch(err) {

    //     }
    // }
    console.log(member)
    return (
        <div>
            <h2>Member Profile</h2>
           {<li>{member?.data.fullName}</li>}

            <button onClick={toggle}>Edit</button>
            {/* <button onclick={handleRemove}>Remove</button> */}
            <Button color="danger" onClick={toggle}>
                Click Me
            </Button>
            <Modal isOpen={modal} toggle={toggle} >
                <ModalHeader toggle={toggle}>Modal title</ModalHeader>
                <ModalBody>
                    <MemberDetailsForm toggle={toggle}/>
                </ModalBody>
                <ModalFooter>
                <Button color="primary" onClick={toggle}>
                    Do Something
                </Button>{' '}
                <Button color="secondary" onClick={toggle}>
                    Cancel
                </Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}
 