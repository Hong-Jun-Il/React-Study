import { useStore } from '@/store/store';
import { useEffect } from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

type Props = {
    productId: string,
}

const ChangeQtyBtn = ({ productId }: Props) => {
    const { getProductById, decQty, incQty, setTotal } = useStore(useShallow((state) => ({
        getProductById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty,
        setTotal: state.setTotal
    })));

    const product = getProductById(productId);

    useEffect(() => {
        const unSub = useStore.subscribe((state) => state.products, (products) => {
            setTotal(products.reduce((acc, cur) => (
                acc + cur.price * cur.qty
            ), 0))
        }, { fireImmediately: true });

        return unSub;
    }, [setTotal]);

    return (
        <>
            {product && (
                <div className='flex gap-2 items-center'>
                    <Button size="icon" >
                        <Minus onClick={() => decQty(productId)} />
                    </Button>
                    <span>{product.qty}</span>
                    <Button size="icon" >
                        <Plus onClick={() => incQty(productId)} />
                    </Button>
                </div>
            )}
        </>
    );
};

export default ChangeQtyBtn;