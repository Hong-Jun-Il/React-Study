import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { calcTotals, clearCart, decrease, getCartItems, increase, removeItem } from '../features/cart/cartSlice';
import Modal from 'react-modal';

const customStyles = {
    overlay: {
        backgroundColor: " rgba(0, 0, 0, 0.4)",
        width: "100%",
        height: "100vh",
        zIndex: "99999999",
        position: "fixed",
        top: "0",
        left: "0",
    },
    content: {
        position: "absolute",
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "800px",
        height: "300px",
        backgroundColor: "#EEEDEB",
        borderRadious: "10px"
    },
};

const CartContainer = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { cartItems, amount, total, isLoading } = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(calcTotals());
    }, [cartItems]);

    useEffect(() => {
        dispatch(getCartItems());
    }, [])


    return (
        <StyledCartContainer>
            {isLoading && (
                <>
                    <header>
                        <h2>your bag</h2>
                    </header>
                    <div>Loading...</div>
                </>
            )}

            {!isLoading && amount < 1 && (
                <header className='cart-is-empty'>
                    <h2>your bag</h2>
                    <h4>is currently empty</h4>
                </header>
            )}

            {!isLoading && amount >= 1 && (
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
                                    <button className="remove-btn" onClick={() => {
                                        dispatch(removeItem(item.id));
                                    }}>
                                        remove
                                    </button>
                                </div>
                                <div className="set-amount">
                                    <button onClick={() => {
                                        dispatch(increase(item))
                                    }}>+1</button>
                                    <span>{item.amount}</span>
                                    <button onClick={() => {
                                        if (item.amount === 1) {
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
                        <button className='clear-btn' onClick={() => {
                            setIsOpen(true);
                        }}>
                            clear cart
                        </button>
                    </footer>

                    <CustomModal
                        isOpen={isOpen}
                        onRequestClose={() => setIsOpen(false)}
                        style={customStyles}
                        contentLabel="Example Modal"
                        shouldCloseOnOverlayClick={true}
                    >
                        <div className='clear-message'>
                            장바구니의 모든 아이템들을 삭제하시겠습니까?
                        </div>
                        <div className="modal-btns">
                            <button className='delete' onClick={() => {
                                dispatch(clearCart());
                                setIsOpen(false);
                            }}>삭제</button>
                            <button className='cancel' onClick={() => setIsOpen(false)}>취소</button>
                        </div>
                    </CustomModal>
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

const CustomModal = styled(Modal)`
    .clear-message{
        font-size: 3rem;
        margin-bottom: 8rem;
    }

    .modal-btns{
        display: flex;
        justify-content: space-between;
        width: 80%;

        button{
            border-radius: 6px;
            font-size: 1.6rem;
            font-weight: 800;
            width: 40%;
            transition: box-shadow .2s,-ms-transform .1s,-webkit-transform .1s,transform .1s;
            outline: none;
            cursor: pointer;
            text-align: center;
            padding: .8rem 0;
        }

        button:focus-visible{
            box-shadow: #222222 0 0 0 2px, rgba(255, 255, 255, 0.8) 0 0 0 4px;
            transition: box-shadow .2s;
        }

        button:active{
            transform: scale(.96);
        }

        .delete{
            background: #FF4742;
            border: 1px solid #FF4742;
            color: #fff;
        }

        .cancle{
            background-color: #FFFFFF;
            border: 1px solid #222222;
        }
        
        .cancle:active{
            background-color: #F7F7F7;
            border-color: #000000;
        }

    }
`

export default CartContainer;