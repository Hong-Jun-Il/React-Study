import Cart from "./Cart";

const Select = () => {


    return (
        <ul className="flex justify-around w-full"> 
            <li className="cursor-pointer text-5xl my-4 bg-lime-500">My</li>
            <li className="cursor-pointer text-5xl my-4 bg-lime-500 relative">
                Cart
                <Cart />
            </li>
        </ul>
    );
};

export default Select;