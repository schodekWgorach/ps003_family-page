import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img from "../../../assets/threeContainer/img_person1.jpg";
import img2 from "../../../assets/threeContainer/img_person2.jpg";
import img3 from "../../../assets/threeContainer/img_person3.jpg";

function ThreeContainer() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body id='ancestyry'>
                    <Card.Title>Mieczysław Janik</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ostatnia aktualizacja 08.12.2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src={img2} />
                <Card.Body>
                    <Card.Title>Stanisława Schodnicki</Card.Title>
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
                <Card.Img variant="top" src={img3} />
                <Card.Body>
                    <Card.Title>Eleonowra Zborowska</Card.Title>t
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
    );
}

export default ThreeContainer;
