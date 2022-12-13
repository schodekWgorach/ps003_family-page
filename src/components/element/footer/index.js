/*
import React from 'react';
import './_footer.scss';

const Index = () => {
    return (
        <div className="footer_box" >

        </div>
    );
};

export default Index;

*/


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
            <Button variant="primary" onClick={handleShow}>
                Launch
            </Button>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Adres kontaktowy</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Szymon Schodnicki
                    ul.Czysta 8/2
                    43-300 Bielsko-Biała

                </Offcanvas.Body>
            </Offcanvas>
        </div>

    );
}

export default Example;
