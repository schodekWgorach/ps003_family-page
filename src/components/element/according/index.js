import Accordion from 'react-bootstrap/Accordion';

function History() {
    return (
        <Accordion defaultActiveKey="0" >
            <Accordion.Item eventKey="0">
                <Accordion.Header id='history'>Historia</Accordion.Header>
                <Accordion.Body>
                    Legendy rodzinne:

                    Mówiło się w rodzinie od strony Schodnicki że pochodzi ze Żmudzi.
                    Po powstaniu 1864 roku jeden z jej członków został zesłany do Czernichowa, karę odbywał razem z Apollem Korzeniowskim.
                    Tam był prawdopodobnie w latach w okresie od 1864 do 1867.

                    Część rodziny była pochowana w Lanckoronie. (niestety miejsce pochówku nie zachowało się )

                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header id='habitat'>Siedliska</Accordion.Header>
                <Accordion.Body>
                    Nieżankowice -- Wychowywała się tam u wójostwa Stanisława Schodnicka.

                    Bystra Podhalańska -- jeden z nielicznych  domów murowanych we wsi poza dworem kaplicą i stacją kolejową
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header id='doc'>Dokumenty</Accordion.Header>
                <Accordion.Body>
                    Plan -- domu


                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

export default History;