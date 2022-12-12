import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img from "../../../assets/threeContainer/img_person1.jpg";
import img2 from "../../../assets/threeContainer/img_person2.jpg";
import img3 from "../../../assets/threeContainer/img_person3.jpg";

function ThreeContainer() {
    return (
        <div>
        <CardGroup >
            <Card>
                <Card.Img variant="top" src={img} alt="Zygmunt Solecki"/>
                <Card.Body id='ancestyry' >
                    <Card.Title>Zygmunt Solecki</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ostatnia aktualizacja 02.12.2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={img2} alt="Kazimierz Barczyk"/>
                <Card.Body>
                    <Card.Title>Kazimierz Barczyk</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ostatnia aktualizacja 08.12.2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={img3} alt="Emil Zborowski"/>
                <Card.Body>
                    <Card.Title>Emil Zborowski</Card.Title>t
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ostatnia aktualizacja 08.12.2022</small>
                </Card.Footer>
            </Card>
        </CardGroup>
        </div>
    );
}

export default ThreeContainer;
