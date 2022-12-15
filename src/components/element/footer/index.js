import React, { useState } from 'react';
import './_footer.scss';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="footer_box">
            <div className="footer_box myForm">
                <Button variant="primary" onClick={handleShow}>
                    Adres kontaktowy
                </Button>

                <Offcanvas className="footer-ofcan" show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title>Adres kontaktowy</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body className="footer-ofcan">
                        Szymon Schodnicki
                        ul.Czysta 8/2
                        43-300 Bielsko-Biała
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </div>

    );
}

export default Example;
