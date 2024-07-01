import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { useCartDispatch } from '../contexts/CartContext';

const ItemList = () => {
    const [items, setItems] = useState([
        {
            id: 1,
            name: "aaa",
            price: 100,
            isCarted: false
        },
        {
            id: 2,
            name: "bbb",
            price: 200,
            isCarted: false
        },
        {
            id: 3,
            name: "ccc",
            price: 300,
            isCarted: false
        },
        {
            id: 4,
            name: "ddd",
            price: 400,
            isCarted: false
        },
        {
            id: 5,
            name: "eee",
            price: 500,
            isCarted: false
        },
        {
            id: 6,
            name: "fff",
            price: 600,
            isCarted: false
        },
        {
            id: 7,
            name: "ggg",
            price: 700,
            isCarted: false
        },
        {
            id: 8,
            name: "hhh",
            price: 800,
            isCarted: false
        },
        {
            id: 9,
            name: "iii",
            price: 900,
            isCarted: false
        },
        {
            id: 10,
            name: "jjj",
            price: 1000,
            isCarted: false
        }
    ]);
    
    const dispatch = useCartDispatch();
    const navigate = useNavigate();

    const onCart = (item) => {
        setItems(prev=>prev.map(e=>{
            if(e.id === item.id){
                return {
                    ...e,
                    isCarted: !e.isCarted
                }
            }
            return e;
        }))

        dispatch({
            type: "ADD_CART",
            item
        })

        console.log(item)   
    }

    return (
        <StyledItemList>
            <button onClick={()=>{
                navigate("/cartlist");
            }}>장바구니 보기</button>
            <br />
            <ul>
                {items.map(item=>{
                    return <li key={item.id}>
                        <span>{item.name}</span>
                        <span>{item.price}원</span>
                        <button onClick={()=>onCart(item)}>장바구니 담기</button>
                        {item.isCarted && (
                            <p>카트에 실림</p>
                        )}
                    </li>
                })}
            </ul>
        </StyledItemList>
    );
};

const StyledItemList = styled.section`
    width: 100%;
    min-height: 100vh;
    font-size: 5rem;
    
    ul{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        width: 80%;
        margin: 0 auto;

        li{
            border: 1px solid;
            display: flex;
            flex-direction: column;
        }

        button{
            width: 500px;
            height: 3rem;
        }
    }
`;

export default ItemList;