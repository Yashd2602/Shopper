import React from 'react'
import { Button, Card } from 'react-bootstrap'
import Rating from './Rating'
import { cartState } from '../Context/Context';

function SingleProducts({prod}) {
    const {
        state:{cart},
        dispatch,
    } = cartState();
  return (
    <div className="products">
    <Card>
        <Card.Img variant='top' className='images' src={prod.image} alt={prod.name}/>
        <Card.Body>
            <Card.Title>{prod.name}</Card.Title>
            <Card.Subtitle style={{paddingBottom: 10}}>
                <span>Price:₹{prod.price}</span>
                {prod.fastDelivery?(
                    <div>Fast Delivery</div>
                ):(
                <div>{prod.deliveryDays} Days Delivery</div>
                )}
                <Rating rating={prod.ratings} />
            </Card.Subtitle>
            {cart.some(p=>p.id===prod.id)?(
                <Button onClick={()=>{
                    dispatch({
                        type:"REMOVE_FROM_CART",
                        payload:prod,
                    });
                 }}
                  variant='danger'>Remove From Cart</Button>
            ):(
                <Button onClick={()=>{
                    dispatch({
                        type:"ADD_TO_CART",
                        payload:prod,
                    });
                }} disabled={!prod.inStock}>
                {!prod.inStock ? "Out of Stock" :"Add To Cart"}
                </Button>
            )}
            
        </Card.Body>
    </Card>
    </div>
  );
};

export default SingleProducts
