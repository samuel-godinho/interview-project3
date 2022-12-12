import React, { useEffect, useState } from "react";
import Page from "./component/Page";
import Cart from "./component/Cart";


const App = () => {
  const [index, setIndex] = useState(1)
  const [data, setData] = useState([])
  
  const [cartValue, setCartValue] = useState([])
  const [quentity, setQuentity] = useState("")

  const [search, setSearch] = useState("")
  const [displaySearch, setDisplaySearch] = useState([])
  
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((res) => {
      setData(res)
    })
  },[])


  const handleCart = (e) => {
    e.preventDefault();
    setIndex(2)
  }

  const handleSearch = (e) => {
    e.preventDefault();
    setDisplaySearch([])
    const tempDisplaySearch = []
    data.map((value,index) => {
       for(const key in value){
           let resu = `${value[key]}`.toLowerCase().includes(search.toLowerCase())
           if(resu == true){
            tempDisplaySearch.push(value)
           }
        setDisplaySearch(tempDisplaySearch) 
       }   
    })
}
  return(
    <>
    <div>
        <nav className="navbar bg-light">
    <div className="container-fluid">
      <a className="navbar-brand">Amazone</a>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success" type="submit" onClick = {handleCart} >Cart</button>
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"  value = {search} onChange = {(e) => {setSearch(e.target.value)}}/>
        <button className="btn btn-outline-success" type="submit" onClick = {handleSearch} >Search</button>
      </form>
    </div>
  </nav>
      {index == 1 && <Page  cartValue = {cartValue} setCartValue = {setCartValue} quentity = {quentity} setQuentity = {setQuentity} search = {search} setSearch = {setSearch} displaySearch = {displaySearch} setDisplaySearch = {setDisplaySearch}/>}
      {index == 2 && <Cart index = {index} setIndex = {setIndex} cartValue = {cartValue} setCartValue = {setCartValue} quentity = {quentity} setQuentity = {setQuentity}/>}
    </div>
    </>
    
  )
}
export default App