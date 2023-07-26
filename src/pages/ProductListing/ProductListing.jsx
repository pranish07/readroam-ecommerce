import { useContext, useEffect } from "react";

import { DataContext, useData } from "../../contexts/DataContext";
import { Filter } from "../../components/Filter/Filter";
import { ProductCard } from "../../components/ProductCard/ProductCard";
import "./productListing.css";
import { Navbar } from "../../components/Navbar/Navbar";
export const ProductListing = () => {
  const {
    state: { products, filters },
    setLoading,
  } = useData();
  const {
    searchValue,
    sort,
    selectedCategories,
    rating,
    price,
   
  } = filters;
  const transformData = () => {
    let filteredData = [...products];
    if (searchValue) {
      filteredData = filteredData.filter((product) =>
        product.title.toLowerCase().includes(searchValue.toLowerCase())
      );
    }
  
    // if (price) {
    //   filteredData = filteredData.filter(
    //     (product) => Number(product.price) <= price
    //   );
    // }
    if (sort) {
      filteredData = filteredData.sort((a, b) =>
        sort === "LOW_TO_HIGH"
          ? Number(a.price) - Number(b.price)
          : Number(b.price) - Number(a.price)
      );
    }
    if (selectedCategories.length > 0) {
      filteredData = filteredData.filter((prod) =>
        selectedCategories.some((category) => category === prod.categoryName)
      );
    }

    if (rating) {
      filteredData = filteredData.filter((prod) => prod.rating >= rating);
    }
    return filteredData;
  };
console.log(transformData())
  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      <Navbar />
      {/* <div className="products-container">
        <div className="filters-container">
          <Filter />
   
        </div>
        <div className="product-listing-container">
        

          {productState?.products.map((product, idx) => (
            <div key={idx}>
              <ProductCard keyid={product.id} product={product} />
            </div>
          ))}
        </div>
      </div> */}
  <Filter />
      <div className="products-container flex justify-center align-start wrap">
        <div className="productlisting-header">
          <p className="all-products-heading  ">
            {searchValue ? "Search Results for" : "Showing All Products"}{" "}
          </p>
          <p className="products-count">
            {searchValue ? (
              <strong>{searchValue}</strong>
            ) : (
              `(${transformData().length} products)`
            )}
          </p>
        </div>
        <>
          {transformData().length === 0 && (
            <div>
              <img
                src="https://t4.ftcdn.net/jpg/04/75/01/23/360_F_475012363_aNqXx8CrsoTfJP5KCf1rERd6G50K0hXw.jpg"
                alt="empty_product"
                height={200}
                width={200}
              />
              <h2>Product not found ☹️</h2>
            </div>
          )}
        </>
        {transformData()?.map((product) => (
          <ProductCard product={product} key={product._id} />
        ))}
      </div>
    </div>
  );
};
