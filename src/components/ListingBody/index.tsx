import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import Header from "../Header";
import * as productService from "../../services/product-service";
import { ContextProductCount } from "../../utils/context-product";

export default function ListingBody() {
  
  const [product, setProduct] = useState<ProductDTO[]>([]);

  const { setContextProductCount } = useContext(ContextProductCount);

  const [minFilter, setMinFilter] = useState<number>(0);
  const [maxFilter, setMaxFilter] = useState<number>(Number.MAX_VALUE);

  useEffect(() => {
    setProduct(productService.findByPrice(minFilter, maxFilter));
    setContextProductCount(productService.findByPrice(minFilter, maxFilter).length);
  }, [minFilter, maxFilter]);

  function handleFilter(min: number, max: number) {
    setMinFilter(min);
    setMaxFilter(max);
  }

  return (
    <>
      <Header />
      <main className="mgT20">
        <section className="dsf-container">
          <CardFilter onFilter={handleFilter} />
          <div className="dsf-cardListing-container">
            {product.map((product) => (
              <CardListing key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}