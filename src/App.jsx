import './App.css'
import { Routes,Route } from "react-router-dom"
import Layout from './components/Layout'
import CardList from './components/CardList'
import Cart from './components/Cart'
import Home from './components/Home'



function App() {

  return (
    <Routes>
      <Route path="/"  element={<Layout />} >
      <Route index element={<Home />}/>
      <Route path="/cardList"  element={<CardList />}/>
      <Route path="/cart"  element={<Cart />}/>
      </Route>
    </Routes>
  )
}

export default App
