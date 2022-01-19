import { Card } from 'react-bootstrap';




function Product({title, price, img, addToCart}) {

  console.log(price);

  
  return (
    <Card style={{ width: '18rem' }}>

  <Card.Img variant="top" src={img}/>

  <Card.Body>

    <Card.Title>{title}</Card.Title>

    <Card.Text>

    {price}$
    </Card.Text>

        
  </Card.Body>


  <button onClick={() => {addToCart({"title": title, "price": price});}}>
    Add to Cart
  </button>



</Card>
  );
}



export default Product;