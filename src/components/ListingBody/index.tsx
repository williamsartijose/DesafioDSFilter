import './styles.css';
import { useContext, useEffect, useState } from "react";
import { ProductDTO } from "../../models/product";
import CardFilter from "../CardFilter";
import CardListing from "../CardListing";
import Header from "../Header";
import * as productService from "../../services/product-service";
import { ContextProductCount } from "../../utils/context-product";

type MinMax = {
  min: number;
  max: number;
}

export default function ListingBody() {
  
  const [product, setProduct] = useState<ProductDTO[]>([]);

  const { setContextProductCount } = useContext(ContextProductCount);

  const [minMaxFilter, setMinMaxFilter] = useState<MinMax>({
    min: 0,
    max: Number.MAX_VALUE
  });

  useEffect(() => {
    setProduct(productService.findByPrice(minMaxFilter.min, minMaxFilter.max));
    setContextProductCount(productService.findByPrice(minMaxFilter.min, minMaxFilter.max).length);
  }, [minMaxFilter]);

  function handleFilter(min: number, max: number) {
    setMinMaxFilter({...minMaxFilter, min: min, max: max});
  }

  return (
    <>
      <Header />
      <main className="mgT20">
        <section className="dsf-container">
          <CardFilter onFilter={handleFilter} />
          <div className="dsf-ListingBody-container ">
            {product.map((product) => (
              <CardListing key={product.id} product={product} />
            ))}
          </div>
        </section>
      </main>
    </>
  );
}