import React, { useState } from 'react'
import { Button, Form } from "react-bootstrap";
import { cartState } from '../Context/Context';
import Rating from "./Rating";
function Filters() {
    const{productState:{byStock,byFastDelivery,sort,byRating},productDispatch} = cartState()
    console.log(byStock,byFastDelivery,sort,byRating);
  return  (
    <div className="filters">
        <span className='title'>Filter Products</span>
        <span>
            <Form.Check
            inline 
            label="Price:Low to High"
            name='group1'
            type='radio'
            id={'inline-1'}
            onChange={()=>
                productDispatch({
                    type: "SORT",
                    payload: "lowToHigh",
                })
            }
            checked={sort === "lowToHigh" ?true : false}
            />
        </span>
        <span>
            <Form.Check
            inline 
            label="Price:High to Low"
            name='group1'
            type='radio'
            id={'inline-2'}
            onChange={()=>
                productDispatch({
                    type: "SORT",
                    payload: "highToLow",
                })
            }
            checked={sort === "highToLow" ?true : false}
            />
            </span>
            <span>
            <Form.Check
            inline 
            label="Include Out of Stock"
            name='group1'
            type='checkbox'
            id={'inline-3'}
            onChange={()=>
                productDispatch({
                    type: "FILTER_BY_STOCK",
                })
            }
            checked={byStock}
            />
        </span>
        <span>
            <Form.Check
            inline 
            label="Fast Delivery Only"
            name='group1'
            type='checkbox'
            id={'inline-4'}
            onChange={()=>
                productDispatch({
                    type: "FILTER_BY_FAST_DELIVERY",
                })
            }
            checked={byFastDelivery}
            />
        </span>
        <span>
            <label style={{ paddingRight:10}}>Rating:</label>
            <Rating rating={byRating} onClick={(i)=>
                productDispatch({
                    type: "FILTER_BY_RATING",
                    payload: i+1,
                })
            } style={{cursor: "pointer"}}/>
        </span>
        <Button variant='light' onClick={()=>
                productDispatch({
                    type: "CLEAR_FILTERS",
                })
            }>Clear Filters</Button>
  </div>
  );
}

export default Filters
