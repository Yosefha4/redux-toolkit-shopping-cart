import { useEffect } from "react";
import CardItem from "./CardItem";
import { useDispatch, useSelector } from "react-redux";
// import { getProducts } from "../store/productSlice";
import { fetchProductsAsync } from "../store/productSlice";

const CardList = () => {
  const dispatch = useDispatch();
  const { data: products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(fetchProductsAsync("https://fakestoreapi.com/products"));
    // fetch('https://fakestoreapi.com/products')
    //         .then(res=>res.json())
    //         .then(result => setProducts(result))
  }, [dispatch]);

  {products && console.log(products)}
  const cards =  products.map((product) => (
    <CardItem key={product.id} product={product} />
  ));

  return (
    <>
      <h1>Card List</h1>
      {/* {products && JSON.stringify(products)} */}

      <div className="row">{cards}</div>
    </>
  );
};

export default CardList;
