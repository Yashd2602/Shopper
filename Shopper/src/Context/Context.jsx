import React,{createContext, useContext, useReducer, } from 'react'
import { faker } from '@faker-js/faker';
import { cartReducer, productReducer } from './Reducers';

const cartContext = createContext();
faker.seed(99);
function Context({children}) {
const products = [...Array(40)].map(()=>({
    id:faker.string.uuid(),
    name:faker.commerce.productName(),
    price:faker.commerce.price({ min: 100, max: 10000, dec: 0 }),
    image:faker.image.urlPicsumPhotos({ category: 'product' }),
    inStock: faker.helpers.arrayElement([0,3,5,6,7]),
    fastDelivery: faker.datatype.boolean(),
    ratings: faker.helpers.arrayElement([1, 2, 3, 4, 5]),
    deliveryDays: faker.helpers.arrayElement([3,5,6,7]),
}))

const [state,dispatch] = useReducer(cartReducer,{
    products:products,
    cart:[],
})

const [productState,productDispatch] = useReducer(productReducer,{
    byStock:false,
    byFastDelivery: false,
    byRating: 0,
    searchQuery: "",
});

  return (
    <cartContext.Provider value={{state,dispatch,productState,productDispatch}}>
        {children}
    </cartContext.Provider>
  )
}

export default Context

export const cartState=() =>{
    return useContext(cartContext);
}
