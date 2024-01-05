import { Product } from "../../models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

//destructuring properties - specifying the properties we are interested in from the Props object
export default function Catalog() {
      //useState hook is used to store and affect state of the component and its data 
  //type of Product array
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:5030/api/products')
      .then(response => response.json())
      .then(data => setProducts(data))
  }, [])
 
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}