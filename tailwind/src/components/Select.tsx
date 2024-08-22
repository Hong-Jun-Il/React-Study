import { useState } from "react";
import Cart from "./Cart";

const Select = () => {
    const [isOpen, setIsOpen] = useState({
        myPage: false,
        cart: false,
    })

    return (
        <ul className="flex justify-around w-full">
            <li className="cursor-pointer text-5xl my-4 bg-lime-500">My</li>
            <li className="cursor-pointer text-5xl my-4 bg-lime-500 relative"
                onClick={() => {
                    setIsOpen(prev => ({
                        ...prev,
                        cart: !prev.cart
                    }))
                }}>
                Cart
                {isOpen.cart && <Cart />}
            </li>
        </ul>
    );
};

export default Select;