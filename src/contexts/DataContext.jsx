import React, {
  createContext,
  useContext,
  useEffect,
  useReducer,
} from "react";

export const DataContext = createContext();

const initialState = {
  products: [],
  allCategories: [],
  searchInput: "",
  sortByPrice: "",
  genreCategory: "",
  priceRange: "",
  rating: "",
  clearFilters: "",
};

const reducer = (state, { type, payload }) => {
  console.log(payload);
  switch (type) {
    case "INITIAL_DATA":
      return { ...state, products: payload };
    case "SORT_BY_PRICE":
      return { ...state, sortByPrice: payload };
    case "CLEAR_FILTERS":
      return { ...initialState, products: payload.products };
    default:
      return state;
  }
};

export function DataProvider({ children }) {
  const [productState, productDispatch] = useReducer(reducer, initialState);
  // const [products,setProducts] = useState({})

  const getProducts = async () => {
    try {
      const response = await fetch(`api/products`);
      const { products } = await response.json();
      productDispatch({ type: "INITIAL_DATA", payload: products });
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    getProducts();
  }, []);

  const filteredByPrice = productState.sortByPrice
    ? productState.products.sort((a, b) =>
        productState.sortByPrice === "HIGH_TO_LOW"
          ? Number(b.price) - Number(a.price)
          : Number(a.price) - Number(b.price)
      )
    : productState;

  // const clearAllFilters = productState.clearFilters?productState:filteredByPrice;

  return (
    <DataContext.Provider value={{ productState, productDispatch,filteredByPrice }}>
      {children}
    </DataContext.Provider>
  );
}

export const useData = () => useContext(DataContext);
