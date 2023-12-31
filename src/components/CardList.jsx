import { useState ,useEffect} from "react"
import CardItem from "./CardItem";

const CardList = () => {
  const [products,setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(result => setProducts(result))
  },[])

  {products && console.log(products)}
  const cards = products.map((product => (
    <CardItem key={product.id} product={product} />
  )))

  return (
    <>
      <h1>Card List</h1>
      {/* {products && JSON.stringify(products)} */}
      
      <div className="row">
        {cards}
      </div>
      
    </>
  )
}

export default CardList