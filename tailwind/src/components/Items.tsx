import { useGetItems } from "../hooks/queries";

const Items = () => {
    const itemsQuery = useGetItems();
    console.log(itemsQuery.data)

    return (    
        <section>
            {/* <ul className="w-screen min-h-screen grid grid-cols-2 gap-1">
                {itemsQuery.data?.pages.map((item) => (
                    <li key={item?.id} className="
                    flex flex-col items-center  
                    border border-green-400
                    cursor-pointer
                    ">
                        <h2 className="font-semibold text-2xl">{item?.name}</h2>
                        <p className="
                        w-full 
                        text-center
                        text-base">{item?.description}</p>
                        <span>{item?.price}원</span>
                    </li>
                ))}
            </ul> */}
        </section>
    );
};

export default Items;