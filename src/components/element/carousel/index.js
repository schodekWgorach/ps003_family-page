import React from 'react';
import {Carousel} from "react-bootstrap";
import img from "../../../assets/carousel/1_family.jpg";
import img1 from "../../../assets/carousel/2_school.jpg";
import img2 from "../../../assets/carousel/3_field.jpg";



function IndividualIntervalsExample() {
    return (
        <Carousel>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src={img}
                    alt="Rodzina"
                />
                <Carousel.Caption>
                    <h3>Roman i Stanisława</h3>
                    <p>Przed wybuchem I wojny światowej rodzina się świetnie rozwijała, nikt nie wiedział że przyjdzie wojna i Hiszpanka</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src={img1}
                    alt="Szkoła"
                />
                <Carousel.Caption>
                    <h3>Szkoła na wschodzie</h3>
                    <p>Klasy na wsiach były bardzo małe, chodziły do nich dzieci w różnym wieku.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={10000}>
                <img
                    className="d-block w-100"
                    src={img2}
                    alt="Na polu"
                />
                <Carousel.Caption>
                    <h3>Stasia w polu na wschodzie</h3>
                    <p>
                        Wiosna kobiety chodziły w wiankach na głowie zwłaszcza na wschodzie.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default IndividualIntervalsExample;