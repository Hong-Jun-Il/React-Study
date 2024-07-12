import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { clearCart, decrease, increase, removeItem } from '../features/cart/cartSlice';

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    return (
        <StyledCartContainer>
            {amount < 1 && (
                <header className='cart-is-empty'>
                    <h2>your bag</h2>
                    <h4>is currently empty</h4>
                </header>
            )}

            {amount >= 1 && (
                <>
                    <header>
                        <h2>your bag</h2>
                    </header>
                    <ul>
                        {cartItems.map(item => {
                            return <li key={item.id}>
                                <div className="img-wrapper">
                                    <img src={item.img} alt="" />
                                </div>
                                <div className="item-info">
                                    <h2 className="title">
                                        {item.title}
                                    </h2>
                                    <span className="price">
                                        ${item.price}
                                    </span>
                                    <button className="remove-btn" onClick={()=>{
                                        dispatch(removeItem(item.id));
                                    }}>
                                        remove
                                    </button>
                                </div>
                                <div className="set-amount">
                                    <button onClick={()=>{
                                        dispatch(increase(item))
                                    }}>+1</button>
                                    <span>{item.amount}</span>
                                    <button onClick={()=>{
                                        if(item.amount === 1){
                                            dispatch(removeItem(item.id));
                                            return;
                                        }

                                        dispatch(decrease(item));
                                    }}>-1</button>
                                </div>
                            </li>
                        })}
                    </ul>
                    <footer>
                        <hr />
                        <div className="cart-total">
                            <h4>
                                total <span>${total}</span>
                            </h4>
                        </div>
                        <button className='clear-btn' onClick={()=>{
                            dispatch(clearCart());
                        }}>
                            clear cart
                        </button>
                    </footer>
                </>
            )}
        </StyledCartContainer>
    );
};

const StyledCartContainer = styled.section`
    width: 90vw;
    font-size: 3rem;
    margin: 0 auto;
    margin-top: 100px;
    min-height: calc(100vh - 100px);
    display: flex;
    align-items: center;
    flex-direction: column;

    header{
        margin-top: 8rem;
        text-align: center;
    }

    h2{
        text-transform: uppercase;
        margin-bottom: 4rem;
    }

    ul{
        display: flex;
        flex-direction: column;
        width: 100%;
        min-height: calc(100vh - 450px);
        
        li{
            margin-bottom: 10px;
            display: flex;
            align-items: center;
            height: 200px;

            .img-wrapper{
                width: 13%;
                height: 100%;
                margin-right: 5rem;
                min-width: 150px;
            }

            .item-info{
                display: flex;
                flex-direction: column;
                width: 80%;

                .remove-btn{
                    font-size: 2rem;
                    width: 150px;
                    border: 1px solid red;
                    background-color: transparent;
                    color: red;
                    cursor: pointer;
                    margin-top: 10px;
                }
            }

            .set-amount{
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 100%;

                span{
                    margin: 20px 0;
                }

                button{
                    font-size: 2rem;
                }
            }
        }
    }

    footer{
        margin-top: 4rem;
        width: 100%;
        text-align: center;

        h4{
            display: flex;
            justify-content: space-between;
        }

        button{
            background: transparent;
            padding: 0.5rem 1rem;
            cursor: pointer;
            border: 1px solid #af1c1c;
            color: #b13636;
            font-size: 3rem;
            border-radius: 8px;
            margin-top: 2rem;
        }
    }

    .cart-is-empty{
        h4{
            text-transform: uppercase;
        }
    }


`;

export default CartContainer;