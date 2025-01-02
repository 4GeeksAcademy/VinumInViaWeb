import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AppContact() {
  return (
    <section id="contact" className="block contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Contáctanos</h2>
          <div className="subtitle">Estaremos encantados de recibir tu mensaje</div>
        </div>
        <Form className='contact-form'>
          <Row>
            <Col sm={4}>
              <Form.Control type="text" placeholder="Nombre completo" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="email" placeholder="Dirección e-mail" required />
            </Col>
            <Col sm={4}>
              <Form.Control type="tel" placeholder="Número de teléfono" required />
            </Col>
          </Row>
          <Row>
            <Col sm={12}>
              <Form.Control as="textarea" placeholder="Escribe tu mensaje" required />
            </Col>
          </Row>
          <div className='btn-holder'>
            <Button type="submit">Enviar</Button>
          </div>
        </Form>
      </Container>
      <div className='google-map'>
        <iframe title="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5791.321521976661!2d-6.143054824702729!3d36.6790858745183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd0dc69040a7debb%3A0x4f8023d55c46c8c4!2sPl.%20Silos%2C%207%2C%2011403%20Jerez%20de%20la%20Frontera%2C%20C%C3%A1diz!5e1!3m2!1ses!2ses!4v1735771900101!5m2!1ses!2ses"></iframe>
      </div>
      <Container fluid>
        <div className='contact-info'>
          <ul>
            <li>
              <i className="fas fa-envelope"></i>
              info@sociedadjerezanadelvino.org
            </li>
            <li>
              <i className="fas fa-phone"></i>
              +34 646 517 327
            </li>
            <li>
              <i className="fas fa-map-marker-alt"></i>
              Jerez de la frontera, Cádiz
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}

export default AppContact;