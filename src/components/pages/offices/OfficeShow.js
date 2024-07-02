import axios from 'axios'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useState } from 'react'
import OfficeForm from './OfficeForm';
import { useOffice } from '../../contexts/OfficeContext';
import { useNavigate } from 'react-router-dom';

export default function OfficeShow() {

    const [editId, setEditId] = useState('')
    const [modal, setModal] = useState(false)

    const navigate = useNavigate()

    const { offices, officesDispatch } = useOffice()

    const toggle = () => {
        setModal(!modal);
    };

        const handleEdit = (id) => {
            setEditId(id)
            toggle()
        }

        const handleRemove = async(id) => {
            try {
                const response = await axios.delete(`http://localhost:3010/api/offices/${id}`, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                })
                console.log(response.data)
                officesDispatch({ type: 'DELETE_OFFICE', payload: response.data})
            } catch(err) {
                console.log('Removing offices', err)
            }
        }

        const handleAddspace = (id)=>{
            navigate(`/office/${id}/add-space`)
        }
        
    return (
        <div>
            <div>
                <h3> office details </h3>
                <ul>
                    {offices.data?.map((ele) => {
                        return <li key={ele._id}> {ele.name} 
                        <button onClick={() => {
                            handleEdit(ele._id)
                        }}>Edit</button>
                        <button onClick={() => {
                            handleRemove(ele._id)
                        }}>X</button>
                        <button onClick={()=>{
                            handleAddspace(ele._id)
                        }}>
                            Add Space
                        </button>
                        </li>
                    })}
                </ul>

            </div>

            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> Edit Office </ModalHeader>
            <ModalBody>
                <OfficeForm editId={editId} toggle={toggle} />
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