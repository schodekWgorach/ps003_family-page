import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function ColorSchemesExample() {
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top">
                <Container>
                    <Navbar.Brand href="#home ">

                  {/*          <img
                                src="../../../assets/carousel/logo.jpg"
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="Home logo"
                            />       */}                Strona Rodzinna


                    </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Przodkowie</Nav.Link>
                        <Nav.Link href="#features">Rodzina</Nav.Link>
                        <Nav.Link href="#pricing">Kontakt</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>

        </>
    );
}

export default ColorSchemesExample;