import { border } from "@mui/system";
import React, { useEffect, useState } from "react";
import { createStyles, Grid, makeStyles, Paper } 
    from '@mui/material';

const Page = ({search,setSearch,displaySearch,setDisplaySearch, cartValue, setCartValue, quentity, setQuentity}) => {
    
    const [data, setData] = useState([])
    const [error, setError] = useState("")
    
    const results = []

    useEffect(() => {
        fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((res) => {
            setData(res)
            const prod = res.reduce((products, currentProduct) => {
                return [...products, {...currentProduct, quentity: 0 }] ;
            }, [])  
            setData(prod)
        },[displaySearch])
        
        //setData(new_products)
    },[])
    

    const hanldeAddToCart = (value) => {
        console.log(value.quentity)
        if(value.quentity == 0){
            setError("Please Enter the Quentity")
        }else{
            let temp = [...cartValue, value]
            setCartValue(temp)
            setError("")
        }
    }
    console.log(error)


    const handleQuentity = (e) => {
        console.log("id")
        console.log(e.target.id)
        console.log(e.target.value)
        const new_products = data.reduce((products, currentProduct) => {
            return currentProduct.id == e.target.id ? [...products, {...currentProduct, quentity: e.target.value }] : [...products, currentProduct];
        }, [])
        console.log(new_products)
        setData(new_products)
    }
    return(
        <div>
            <h1 style = {{color: "red"}}>{error}</h1>
             <div>
            <Grid container spacing = {3}>
         {displaySearch.map((value,index) => {
                return(
                        <Grid item lg = {3} >
                                <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src = {value.image} alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: {value.price}</li>
                                <li className="list-group-item">Rating: {value.rating.rate}({value.rating.count}) </li>
                                <li className="list-group-item">Quentity: <input type = "text" value = {value.quantity} id = {value.id} onChange = {(e) => handleQuentity(e)}></input></li>
                            </ul>
                            <div className="card-body">
                                <button onClick = {() => {hanldeAddToCart(value)}}>Add to Cart</button> 
                            </div>
                            </div>
                        </Grid>
                )
            })}
            </Grid>
        </div>
            <div>
            <Grid container spacing = {3}>
         {data.map((value,index) => {
                return(
                        <Grid item lg = {3} >
                                <div className="card" style={{width: "18rem"}}>
                                <img className="card-img-top" src = {value.image}   alt=""/>
                            <div className="card-body">
                                <h5 className="card-title">{value.title}</h5>
                                <p className="card-text">{value.description}</p>
                            </div>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item">Price: {value.price}</li>
                                <li className="list-group-item">Rating: {value.rating.rate}({value.rating.count}) </li>
                                <li className="list-group-item">Quentity: <input type = "text" value = {value.quantity} id = {value.id} onChange = {(e) => handleQuentity(e)}></input></li>
                            </ul>
                            <div className="card-body">
                                <button onClick = {() => {hanldeAddToCart(value)}}>Add to Cart</button> 
                            </div>
                            </div>
                        </Grid>
                )
            })}
            </Grid>
        </div>
        
        </div>
    )
}
export default Page