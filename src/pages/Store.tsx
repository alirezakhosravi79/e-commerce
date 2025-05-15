import { Link } from "react-router-dom";
import ProductItem from "../components/ProductItem";
import { useEffect, useState } from "react";
import { getProducts } from "../services/api";
import { ProductTypes } from "../types/servise";

function Store() {
  //Product State
  const [products, setProducts] = useState<ProductTypes[]>([]);

  //fetch products from API
  useEffect(() => {
    getProducts().then((res) => {
      setProducts(res);
    });
  }, []);
  
  return (
    <div className="container mx-auto text-white">
      <div className="mx-4 my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-4">
        {products.map((item) => {
          return (
            <Link key={item.id} to={`/product/${item.id}`}>
              <ProductItem  {...item}/>
            </Link>
          );
        })}
          {/*  bray inke bkhaim az dade mahsolat dakhel productitem estfade knim be onvan prop
          mifrestimeshon    typesh ro ham be usestate midim   bray productitem bayad type
          moshakhas knim */}
      </div>
    </div>
  );
}

export default Store;
