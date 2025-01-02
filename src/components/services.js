import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-wine-glass',
    title: 'Catas de vinos de la tierra',
    description: 'Vinos de las denominaciones de origen Jerez-Xerez-Sherry, Manzanilla de Sanlúcar, Brandy de Jerez y la IGP Vinos de la Tierra de Cádiz.'
  },
  {
    id: 2,
    icon: 'fas fa-wine-glass-empty',
    title: 'Catas de vinos de España e internacionales',
    description: 'Vinos de denominaciones de origen Cava, Jumilla, Ribera, Rioja, Rueda, Porto, Champagne, etc.'
  },
  {
    id: 3,
    icon: 'fas fa-wine-bottle',
    title: 'Venta de vinos selectos',
    description: 'Venta de una selección de vinos únicos, cuya accesibilidad al público es muy complicada'
  },
  {
    id: 4,
    icon: 'fas fa-plane',
    title: 'Viajes vitivinícolas',
    description: 'Organizamos viajes programados a destinos con una rica tradición y cultura enológica.'
  },
  {
    id: 5,
    icon: 'fas fa-people-group',
    title: 'Asesoría',
    description: 'Vinum in via aeternum ofrece el asesoramiento empresarial de sus expertos en el universo vitivinícola.'
  },
  {
    id: 6,
    icon: 'fas fa-microphone',
    title: 'Divulgación vitivinícola',
    description: 'Las catas van acompañadas de divulgación científica e histórica impartida por expertos vitivinícolas.'
  }
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Servicios</h2>
          <div className="subtitle">Conoce nuestros servicios</div>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3>{services.title}</h3>
                  <p>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;