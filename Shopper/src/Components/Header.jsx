import {
    Badge,
    Container,
    FormControl,
    Nav,
    Button,
    Navbar,
    Dropdown,
} from 'react-bootstrap';
import {FaShoppingCart} from 'react-icons/fa'
import {Link} from "react-router-dom"
import { cartState } from '../Context/Context';
import { AiFillDelete } from "react-icons/ai";

function Header() {
  const {state:{cart},dispatch,productDispatch}=cartState();
    return (
      <Navbar bg='dark' variant='dark' style={{height:80}}>
        <Container>
            <Navbar.Brand>
                <Link to="/"><img className='bi' src="./img/pngegg.png" alt="Thrift Shop" /></Link>
            </Navbar.Brand>
            <Navbar.Text className='search'>
                <FormControl
                style={{width:500}}
                placeholder='Search a Product'
                className='m-auto'
                onChange={(e)=> {
                productDispatch({
                    type: "FILTER_BY_SEARCH",
                    payload: e.target.value.toLowerCase(),
                })
                }}

                />
            </Navbar.Text>
            <Nav>
                <Dropdown align="end">
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{ minWidth:370 }}>
                        {cart.length>0 ?(<>
                        {cart.map((prod) =>(
                             <span className="cartitem" key={prod.id}>
                      <img
                        src={prod.image}
                        className="cartItemImg"
                        alt={prod.name}
                      />
                      <div className="cartItemDetail">
                        <span>{prod.name}</span>
                        <span>₹ {prod.price}</span>
                      </div>
                      <AiFillDelete
                        fontSize="20px"
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          dispatch({
                            type: "REMOVE_FROM_CART",
                            payload: prod,
                          })
                        }
                      />
                    </span>
                        ))}
                        <Link to="/cart">
                    <Button style={{ width: "95%", margin: "0 10px" }}>
                      Go To Cart
                    </Button>
                  </Link>
                        </>):(<span style={{padding:10}}>Cart is Empty!</span>)}
                        
                    </Dropdown.Menu>
                </Dropdown>
            </Nav>
        </Container>
    </Navbar>
  )
}

export default Header
