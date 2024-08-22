import { useShallow } from "zustand/react/shallow";
import { useStore } from "../store/store";
import { useEffect } from "react";

const Cart = () => {
    const { cartProducts, incQty, decQty, removeProduct, total, reset, setTotal } = useStore(useShallow((state) => ({
        cartProducts: state.cartProducts,
        incQty: state.incQty,
        decQty: state.decQty,
        removeProduct: state.removeProduct,
        total: state.total,
        reset: state.reset,
        setTotal: state.setTotal
    })));

    useEffect(() => {
        const unSub = useStore.subscribe(
            (state) => state.cartProducts,
            () => setTotal(),
            { fireImmediately: true }
        );

        return unSub;
    }, [setTotal]);

    return (
        <ul
            className='absolute top-full left-1/2 transform -translate-x-1/2 text-center w-max bg-amber-400 text-3xl cursor-default
            flex flex-col'
            onClick={(e) => {
                e.stopPropagation();
            }}>
            {cartProducts.map((product) => {
                return <li
                    key={product.id}
                    className="
                    z-10 
                    flex justify-between
                    text-3xl">
                    <h2>{product.name}</h2>
                    <button className="bg-orange-700" onClick={() => decQty(product.id)}>감소</button>
                    <span>{product.qty}개</span>
                    <button className="bg-orange-500" onClick={() => incQty(product.id)}>증가</button>
                    <button className="bg-yellow-100" onClick={() => removeProduct(product.id)}>삭제</button>
                </li>
            })}
            <button onClick={reset}>비우기</button>
            <span>total: {total}원</span>
        </ul>
    );
};

export default Cart;