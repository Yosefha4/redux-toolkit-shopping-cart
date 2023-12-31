import { useState } from "react";
import { Button, Table, Container, Modal, Form } from "react-bootstrap";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [item, setItem] = useState({});

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = { ...item, id: cart.length + 1 };
    setCart([...cart, newItem]);
    setShow(false);
  };

  const handleDelete = (id) => {
    const filteredCart = cart.filter((item) => item.id !== id);
    setCart(filteredCart);
  };
  return (
    <Container>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Quantity</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {cart.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quantity}</td>
              <td>
                <Button variant="danger" onClick={() => handleDelete(item.id)}>
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Button variant="primary" onClick={handleShow}>
        Add Item
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="name">
              <Form.Label>Item Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter item name"
                onChange={(e) => setItem({ ...item, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group controlId="quantity">
              <Form.Label>Quantity</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter quantity"
                onChange={(e) => setItem({ ...item, quantity: e.target.value })}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Add to Cart
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Cart;
