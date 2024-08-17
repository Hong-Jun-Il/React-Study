import styled from "styled-components";
import { useProduct, useProducts } from "../hooks/queries"
import { Fragment } from "react/jsx-runtime";
import { useState } from "react";

export default function Products() {
    const [selectedProductId, setSelectedProductId] = useState<number | null>(null);

    const productsQuery = useProducts();
    const productQuery = useProduct(selectedProductId);

    return (
        <StyledProductsSection>
            <ul>
                {productsQuery.data?.pages.map((group, i) => (
                    <Fragment key={i}>
                        {group.map((product) => (
                            <li key={product.id} onClick={() => setSelectedProductId(product.id)}>
                                <button>
                                    {product.name}
                                </button>
                            </li>
                        ))}
                    </Fragment>
                ))}
            </ul>

            <button onClick={() => productsQuery.fetchNextPage()} disabled={!productsQuery.hasNextPage || productsQuery.isFetchingNextPage} >
                {productsQuery.isFetchingNextPage ? "Loading more..." : (productsQuery.hasNextPage ? "Load More" : "Nothing more to load")}
            </button>

            <div>Selected Product: </div>
            {JSON.stringify(productQuery.data)}
        </StyledProductsSection>
    )
}

const StyledProductsSection = styled.section`
    display: flex;
    flex-direction: column;

    ul{
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;
        min-height: 100vh;
    }
`