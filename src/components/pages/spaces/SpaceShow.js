// import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { useSpace } from '../../contexts/SpaceContext'
import SpaceForm from './spaceForm'

export default function SpaceDetails() {

    // const { id } = useParams()
    const { spaces, spacesDispatch } = useSpace()

    const [editId, setEditId] = useState('')
    const [modal, setModal] = useState(false)

    const toggle = () => {
        setModal(!modal)
    }
    const handleEdit = (id) => {
        setEditId(id)
        toggle()
    }
    const handleRemove = async(id) => {
        try {
            const response = await axios.delete(`http://localhost:3010/api/spaces/${id}`, {
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        console.log(response.data)
        spacesDispatch({ type: 'DELETE_SPACE', payload: response.data })

        }catch(err) {
            console.error('Error deleting space:', err)
        }
    }

    return (

        <div>
            <h3>Space Details</h3>
            <ul>
                { spaces.data?.map((ele) => {
                    return <li key={ele._id}>{ ele.name }
                        <button onClick={() => {
                            handleEdit(ele._id)
                        }}>Edit</button>
                        <button onClick={() => {
                            handleRemove(ele._id)
                        }}>X</button>
                    </li>
                })}
            </ul>
            <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}> Edit Space </ModalHeader>
            <ModalBody>
                <SpaceForm editId={editId} toggle={toggle} />
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