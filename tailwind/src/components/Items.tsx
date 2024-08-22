import { useShallow } from "zustand/react/shallow";
import { useGetItems } from "../hooks/queries";
import { useStore } from "../store/store";

const Items = () => {
    const itemsQuery = useGetItems();
    const { cartProducts, incQty, decQty, addProduct } = useStore(useShallow((state) => ({
        cartProducts: state.cartProducts,
        incQty: state.incQty,
        decQty: state.decQty,
        addProduct: state.addProduct
    })))

    return (
        <section className="flex flex-col items-center">
            <ul className="w-screen grid grid-cols-2 gap-1">
                {itemsQuery.data?.pages?.flat(2).map((item) => (
                    <li key={item?.id} className="
                    flex flex-col items-center justify-center  
                    border border-green-400
                    ">
                        <h2 className="font-semibold text-2xl">{item?.name}</h2>
                        <p className="
                        w-full 
                        text-center
                        text-base">{item?.description}</p>
                        <span>{item?.price}원</span>
                        {cartProducts.find((product) => product.id === item?.id) ? (
                            "담겨있음"
                        ) : (
                            <button className="bg-emerald-400"
                                onClick={() => {
                                    addProduct(item)
                                }}>담기</button>
                        )}
                    </li>
                ))}
            </ul>
            <button
                className="bg-neutral-600 w-fit
                disabled:bg-red-500"
                onClick={() => itemsQuery.fetchNextPage()}
                disabled={!itemsQuery.hasNextPage || itemsQuery.isPending}>
                {itemsQuery.hasNextPage ? "계속 불러오기" : "page end"}
            </button>
        </section>
    );
};

export default Items;