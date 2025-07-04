import React,{useState,useEffect} from 'react';
import { cartState } from '../Context/Context';
import { Button, Col, Form, ListGroup, Row,Image } from 'react-bootstrap';
import Rating from './Rating';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Cart() {
  const {state:{cart},dispatch} = cartState();
  const [total ,setTotal] = useState();
  useEffect(()=>{
    setTotal(cart.reduce((acc,curr)=> acc +Number(curr.price)*curr.qty,0))},[cart])

  return (
    <div className='home'>
      <div className="cartPageContainer">
        <ListGroup >
          <Link to="/"><button className='bth'> Back to HomePage </button></Link>
          {cart.map((prod)=>(
            <ListGroup.Item key={prod.id}>
            <Row>
              <Col md={2}>
              <Image className='images' src={prod.image} alt={prod.name} fluid rounded/></Col>
              <Col md={2}>
              <span>{prod.name}</span>
              </Col>
              <Col md={2}>
              ₹ {prod.price}
              </Col>
              <Col md={2}>
              <Rating rating={prod.ratings} />
              </Col>
              <Col md={2}>
              <Form.Control as="select" value={prod.qty}
              onChange={(e) =>
                dispatch({
                  type:"CHANGE_CART_QTY",
                  payload: {
                    id: prod.id,
                    qty: e.target.value,
                  },
                })
              }
              >
                {[...Array(prod.inStock).keys()].map((x)=>(
                  <option key={x + 1}>{x + 1}</option>
                ))}
              </Form.Control>
              </Col>
              <Col md={2}>
              <Button
              type='button' variant='light' onClick={() =>
                dispatch({
                  type:"REMOVE_FROM_CART",
                  payload:prod,
                })
              }>
                <AiFillDelete fontSize="20px" />
              </Button>
              </Col>
            </Row>
            </ListGroup.Item>
          ))}
        </ListGroup>
      </div>
      <div className="filters summary">
  <span className="title">SubTotal ({cart.length}) Items</span>
  <span className="summaryTotal" style={{ fontWeight: 700, fontSize: 20 }}>
    Total: ₹{total}
  </span>

  <Link to={cart.length > 0 ? "/thanks" : "#"}>
    <Button type="button" disabled={cart.length === 0}>
      Proceed to Checkout
    </Button>
  </Link>
</div>
    </div>
  )
}

export default Cart
