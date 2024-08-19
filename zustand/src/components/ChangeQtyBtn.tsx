import { useStore } from '@/store/store';
import React from 'react';
import { useShallow } from 'zustand/react/shallow';
import { Button } from './ui/button';
import { Minus, Plus } from 'lucide-react';

type Props = {
    productId: string,
}

const ChangeQtyBtn = ({ productId }: Props) => {
    const { getProductById, decQty, incQty } = useStore(useShallow((state) => ({
        getProductById: state.getProductById,
        decQty: state.decQty,
        incQty: state.incQty
    })));

    const product = getProductById(productId);

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