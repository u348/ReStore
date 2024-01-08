import agent from "../../api/agent";
import LoadingComponent from "../../layouts/LoadingComponent";
import { Product } from "../../models/product";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

//destructuring properties - specifying the properties we are interested in from the Props object
export default function Catalog() {
      //useState hook is used to store and affect state of the component and its data 
  //type of Product array
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    agent.Catalog.list()
        .then(products => setProducts(products))
        .catch(error => console.log(error))
        .finally(() => setLoading(false))
  }, [])

  if (loading) return <LoadingComponent message="Loading products..."/>
 
    return (
        <>
            <ProductList products={products}/>
        </>
    )
}