import { createContext, useContext, useReducer } from "react"

const initialState = {
    cartList: []
};

function cartReducer(state, action) {
    switch (action.type) {
        case "ADD_CART":
            return {
                ...state,
                cartList: [...state.cartList, action.item]
            }
        case "REMOVE_CART":
            return {
                ...state,
                cartList: state.cartList.filter(item=>item.id!==action.id)
            }
        default:
            throw new Error(`unhandled action type : ${action.type}`);
    }
}

const CartStateContext = createContext();
const CartDispatchContext = createContext();

export function CartProvider({ children }) {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartStateContext.Provider value={state}>
            <CartDispatchContext.Provider value={dispatch}>
                {children}
            </CartDispatchContext.Provider>
        </CartStateContext.Provider>
    )
}

export function useCartState() {
    const context = useContext(CartStateContext);

    if (!context) {
        throw new Error("cart state가 존재하지 않음");
    }

    return context;
}

export function useCartDispatch() {
    const context = useContext(CartDispatchContext);

    if (!context) {
        throw new Error("cart dispatch가 존재하지 않음");
    }

    return context;
}

export function getBasketTotal(cartList){
    return cartList.reduce((sum, cur)=>sum + cur, 0);
}