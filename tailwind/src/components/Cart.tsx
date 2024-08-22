import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";

const Cart = () => {
    const { cartProducts, incQty, decQty, removeProduct, total } = useStore(useShallow((state) => ({
        cartProducts: state.cartProducts,
        incQty: state.incQty,
        decQty: state.decQty,
        removeProduct: state.removeProduct,
        total: state.total
    })));

    return (
        <ul className='absolute border border-red-500 top-full left-1/2 transform -translate-x-1/2 text-center w-max'>
           {cartProducts.map((product)=>{
            return <li key={product.id}>
                {product.name}
            </li>
           })}
        </ul>
    );
};

export default Cart;