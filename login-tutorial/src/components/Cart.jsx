import React from 'react';
import { useCartDispatch, useCartState } from '../contexts/CartContext';

const Cart = () => {
    const {cartList} = useCartState();
    const dispatch = useCartDispatch();

    const onRemove = (id) => {
        dispatch({
            type: "REMOVE_CART",
            id
        })
    }

    return (
        <ul>
            {cartList.map(item=>{
                return <li onClick={()=>onRemove(item.id)} key={item.id}>
                    <span>{item.name}</span>
                </li>
            })}
        </ul>
    );
};

export default Cart;