import React from 'react';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

function ThreeContainer() {
    return (
        <CardGroup>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1914984/pexels-photo-1914984.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This content is a little bit longer.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/2026960/pexels-photo-2026960.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                        This card has supporting text below as a natural lead-in to
                        additional content.{' '}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
            <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1655329/pexels-photo-1655329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                <Card.Body>
                    <Card.Title>Card title</Card.Title>t
                    <Card.Text>
                        This is a wider card with supporting text below as a natural lead-in
                        to additional content. This card has even longer content than the
                        first to show that equal height action.
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <small className="text-muted">Last updated 3 mins ago</small>
                </Card.Footer>
            </Card>
        </CardGroup>
    );
}

export default ThreeContainer;
