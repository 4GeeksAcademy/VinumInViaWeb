import Carousel from 'react-bootstrap/Carousel';

var heroData = [
  {
    id: 1,
    image: require('../assets/images/vineyard (5).jpg'),
    title: 'Una pasión',
    description: 'Nuestro origen y esencia reside en la pasión por el vino y su universo',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('../assets/images/vineyard (3).jpg'),
    title: 'Un compromiso',
    description: 'Deseamos inspirar y conectar a través del vino, compartiendo con el mundo la riqueza y diversidad de esta tradición milenaria.',
    link: 'https://www.facebook.com'
  },
]

function AppHero() {
  return (
    <section id="home" className="hero-block">
       <Carousel>
          {
            heroData.map(hero => {
              return (
                <Carousel.Item key={hero.id}>
                  <img
                    className="d-block w-100"
                    src={hero.image}
                    alt={"slide " + hero.id}
                  />
                  <Carousel.Caption>
                    <h2>{hero.title}</h2>
                    <p>{hero.description}</p>
                  </Carousel.Caption>             
                </Carousel.Item>
              );
            })
          }
      </Carousel>
    </section>
  );
}

export default AppHero;