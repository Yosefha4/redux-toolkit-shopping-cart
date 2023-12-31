import { Button, Table, Container, Image } from "react-bootstrap";
import { useSelector,useDispatch } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {


  //Use Redux
  const cartProducts = useSelector(state => state.cart)
    const dispatch = useDispatch();


  const handleDelete = (id) => {
    dispatch(remove(id))
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Image</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cartProducts.map((item,index) => (
            <tr key={item.id}>
              <td>{index +1 }</td>
              <td>
                <Image src={item.image} style={{width:'60px',height:'80px'}}/>
                </td>
              <td>{item.title}</td>
              <td>{item.price}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

    
    </Container>
  );
};

export default Cart;
