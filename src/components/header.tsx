import React from "react"
import { Navbar, Container, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#react">
                        React
                    </Navbar.Brand>

                    <Nav className="">
                        <Nav.Link href="home">
                            Home
                        </Nav.Link>

                        <Nav.Link href="home">
                            About
                        </Nav.Link>

                        <Nav.Link href="home">
                            Contact
                        </Nav.Link>

                        <Nav.Link href="home">
                            Profiles
                        </Nav.Link>

                    </Nav>


                </Container>
            </Navbar>
        </>
    )
}

export default Header