import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

const CartContainer = () => {
    const { cartItems, amount, total } = useSelector(store => store.cart);

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
                                dd
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
                        <button className='clear-btn'>
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
    /* border: 1px solid red; */
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
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
        width: 100%;
        min-height: calc(100vh - 450px);
        
        li{
            border: 1px solid red;
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