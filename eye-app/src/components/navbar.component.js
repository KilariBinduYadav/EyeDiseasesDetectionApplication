import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const ReactNavbar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg='primary' variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="about">About</Nav.Link>
                    <Nav.Link href="implementation">Implementation</Nav.Link>
                    <Nav.Link href="Team">Team</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>  
    );
}

export default ReactNavbar;