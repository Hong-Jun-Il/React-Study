import { Popover } from '@radix-ui/react-popover';
import { PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { CircleX, ShoppingCart, Trash2 } from 'lucide-react';
import { useStore } from '@/store/store';
import { useShallow } from 'zustand/react/shallow';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import ChangeQtyBtn from './ChangeQtyBtn';

const Cart = () => {

    const { reset, products, removeProduct, total, address } = useStore(useShallow((state) => ({
        reset: state.reset,
        products: state.products,
        removeProduct: state.removeProduct,
        total: state.total,
        address: state.address
    })))

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="secondary" size="icon">
                    <ShoppingCart />
                </Button>
            </PopoverTrigger>
            <PopoverContent className='overflow-y-auto space-y-2 w-96'>
                <div className="flex gap-2 text-lg items-center">
                    <h1>Cart:</h1>
                    <Button onClick={reset} variant="destructive" size="icon">
                        <CircleX />
                    </Button>
                </div>
                <div className="space-y-2">
                    {products.map((product) => (
                        <Card className='flex flex-col' key={product.id}>
                            <CardHeader className='flex flex-row items-center gap-2'>
                                <CardTitle>
                                    {product.title}
                                </CardTitle>
                                <Button onClick={() => removeProduct(product.id)} size="icon" variant="destructive">
                                    <Trash2 />
                                </Button>
                            </CardHeader>
                            <CardContent>{product.price}$</CardContent>
                            <CardFooter>
                                <ChangeQtyBtn productId={product.id} />
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <p>Total: {total}</p>
                <p>Address: {address}</p>
            </PopoverContent>
        </Popover>
    );
};

export default Cart;