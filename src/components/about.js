import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

import img1 from '../assets/images/vino (1).jpg';
import img2 from '../assets/images/foto (6).jpg';

function AppAbout() {

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Sobre nosotros</h2>
          <div className="subtitle">Una forma de vida</div>
        </div>
        <Row>
          <Col sm={3}>
            <Image style={{ height: '360px' }}
              src={img1} />
          </Col>
          <Col sm={3}>
            <Image style={{ height: '360px' }}
              src={img2} />
          </Col>
          <Col sm={6}>
            <p><strong>Vinum in via aeternum</strong> se especializa en la elaboración, crianza y comercialización de vinos y productos derivados de la uva, así como en la integración de frutas y plantas aromáticas en nuestras creaciones, combinando tradición e innovación. Nuestra misión va más allá del producto: buscamos ser embajadores de la cultura del vino, creando experiencias únicas a través de catas, cursos enológicos y eventos que invitan a descubrir la magia que encierra cada copa. Además, diseñamos y gestionamos viajes enológicos y gastronómicos, tanto dentro como fuera de nuestras fronteras, acercando a los amantes del vino a destinos inolvidables.</p>
            <p>Por si fuera poco, ofrecemos servicios de asesoramiento y consultoría en enología y vitivinicultura. Nuestro equipo de expertos acompaña a bodegas y productores, brindando asistencia técnica y formación especializada para perfeccionar la producción y comercialización de vinos y otros productos afines.</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;