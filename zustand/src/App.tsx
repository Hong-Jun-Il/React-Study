import { useShallow } from "zustand/react/shallow";
import { useStore } from "./store/store"
import { PRODUCTS_DATA } from "./lib/mockData";
import { Card, CardContent, CardFooter, CardHeader } from "./components/ui/card";
import { Button } from "./components/ui/button";
import ChangeQtyBtn from "./components/ChangeQtyBtn";
import Cart from "./components/Cart";

function App() {
  const addProduct = useStore((state) => state.addProduct);
  const cartProducts = useStore((state) => state.products);

  return (
    <main className="space-y-2 dark h-screen bg-background max-w-sm mx-auto mt-2">
      <div>
        <Cart />
      </div>
      <div className="text-2xl">Products:</div>
      <div className="space-y-2">
        {PRODUCTS_DATA.map((product) => (
          <Card key={product.id}>
            <CardHeader>{product.title}</CardHeader>
            <CardContent>{product.price}$</CardContent>
            <CardFooter>
              {cartProducts.find((item) => item.id === product.id) ? (
                <ChangeQtyBtn productId={product.id} />
              ): (
                  <Button onClick = { ()=> addProduct(product) }>Add to Cart</Button>
              )}
          </CardFooter>
          </Card>
        ))}
    </div>
    </main >
  )
}

export default App
