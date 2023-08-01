import React, {useState} from "react"
import { Button, Card, Modal } from "react-bootstrap"

export interface IUser {
    id: number
    name: string
    email: string
    username: string
    address: any
}

export interface IUserProperties {
    user: IUser
}

const User: React.FC<IUserProperties> = ({user}:IUserProperties) => {
    const [show, setShow] = useState<boolean>(false)

    const toggleModal = () => {
        setShow(!show)
    } 
    
    return (
        <>
            <Card className="p-5" onClick={toggleModal}>
                <Card.Title> Username: { user.username } </Card.Title>
                <Card.Body> 
                    <p>Email: { user.email }</p>
                    <p>Name: { user.name }</p>
                </Card.Body>
                <Button>Go to Profile</Button>
            </Card>
            <br />
            <Modal show={show} onHide={toggleModal}>
                <Modal.Header>
                    <Modal.Title>
                        Username: {user.username}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Email: { user.email }</p>
                    <p>Name: { user.name }</p>
                    <p>Address</p>
                    <p>Street: {user.address.street}</p>
                    <p>City: {user.address.city}</p>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={toggleModal} variant="secondary">
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default User