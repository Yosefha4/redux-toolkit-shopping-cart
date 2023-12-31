import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div style={{marginTop:'24px',height:'250px',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'space-around',backgroundColor:'navajowhite'}} >
        <h2 >Welcome To The Home Page</h2>
        <Button variant="dark" >
        <Link to='/cardList' style={{listStyle:'none',textDecoration:'none',color:'white'}}>Find Product</Link>
        </Button>

    </div>
  )
}

export default Home