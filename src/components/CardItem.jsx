/* eslint-disable react/prop-types */
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


const CardItem = ({product}) => {
  return (
    <div className='col-md-3 mb-3'>
    <Card style={{ width: '18rem' }} className='h-100'>
        <div className="text-center">
    <Card.Img variant="top" src={product.image} style={{width:"100px", height:"130px"}} />
    </div>
    <Card.Body>
      <Card.Title>{product.title}</Card.Title>
      <Card.Text>
      $ {product.price}
      </Card.Text>
      {/* <Button variant="primary">Go somewhere</Button> */}
    </Card.Body>
    <Card.Footer>
    <Button variant="primary">Add To Cart</Button>

    </Card.Footer>
  </Card>
  </div>
  )
}

export default CardItem