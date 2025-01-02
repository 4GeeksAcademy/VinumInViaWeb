import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const teamsData = [
  {
    id: 1,
    image: require('../assets/images/MlaGuita.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Manzanilla la Guita',
    designation: 'DO Manzanilla de Sanlúcar',
    description: 'Aromas únicos de manzanas secas, flor de limón, almendras y crema. Notas de algas marinas. De cuerpo completo, pero concentrado y firme, con una acidez vivaz y un final bellamente compuesto de fruta y sabor. Tapa de rosca.'
  },
  {
    id: 2,
    image: require('../assets/images/Ynocente.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Fino Ynocente',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'Persistente, manzanas secas, notas de romero, sal y crema, que dan paso a un cuerpo medio, una textura cremosa y un final sabroso. Regusto sutil pero complejo.'
  },
  {
    id: 3,
    image: require('../assets/images/leonor.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Palo Cortado Leonor',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'En nariz, muy agradable y pronunciada, se aprecian notas de caramelo, manzanas secas, higos y ciruelas pasas, nueces y avellanas. Muy bien definido y con capas, con gran cuerpo y largo.'
  },
  {
    id: 4,
    image: require('../assets/images/canasta.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Cream Canasta',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'Aromas a frutos secos, nuez y ligero recuerdo a pasas y azúcar tostado. Al paladar es suave, aterciopelado, muy cálido por su contenido alcohólico y con una retronasal persistente.'
  },
  {
    id: 1,
    image: require('../assets/images/MlaGuita.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Manzanilla la Guita',
    designation: 'DO Manzanilla de Sanlúcar',
    description: 'Aromas únicos de manzanas secas, flor de limón, almendras y crema. Notas de algas marinas. De cuerpo completo, pero concentrado y firme, con una acidez vivaz y un final bellamente compuesto de fruta y sabor. Tapa de rosca.'
  },
  {
    id: 2,
    image: require('../assets/images/Ynocente.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Fino Ynocente',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'Persistente, manzanas secas, notas de romero, sal y crema, que dan paso a un cuerpo medio, una textura cremosa y un final sabroso. Regusto sutil pero complejo.'
  },
  {
    id: 3,
    image: require('../assets/images/leonor.jpg'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Palo Cortado Leonor',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'En nariz, muy agradable y pronunciada, se aprecian notas de caramelo, manzanas secas, higos y ciruelas pasas, nueces y avellanas. Muy bien definido y con capas, con gran cuerpo y largo.'
  },
  {
    id: 4,
    image: require('../assets/images/canasta.png'),
    fbLink: 'https://www.facebook.com',
    twitterLink: 'https://www.twitter.com',
    linkedinLink: 'https://www.linkedin.com',
    name: 'Cream Canasta',
    designation: 'DO Jerez-Xeres-Sherry',
    description: 'Aromas a frutos secos, nuez y ligero recuerdo a pasas y azúcar tostado. Al paladar es suave, aterciopelado, muy cálido por su contenido alcohólico y con una retronasal persistente.'
  }
]

function AppTeams() {
  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>Vinos</h2>
          <div className="subtitle">Nuestra selección de vinos</div>
        </div>
        <Row>
          {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;