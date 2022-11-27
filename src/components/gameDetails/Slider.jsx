import Carousel from 'react-bootstrap/Carousel';

function Slide({ images }) {
  return (
    <Carousel controls={false} indicators={false}>
      {images?.map(x => (
        <Carousel.Item key={x.id}>
          <img className='d-block w-100' src={x.image} alt='First slide' />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Slide;
