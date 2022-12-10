import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import img from "../../../assets/carousel/1.jpg";

function ThreeContainer() {
    return (
        <CardGroup>
            <Card>

                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title>Mieczysław Janik</Card.Title>
                    <Card.Text>

                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Ostatnia aktualizacja 08.12.2022</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600" />
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
                <Card.Img variant="top" src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
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
