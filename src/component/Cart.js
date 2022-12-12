import React, { useEffect } from "react";
import { createStyles, Grid, makeStyles, Paper } 
    from '@mui/material';


const Cart = ({cart, setIndex, cartValue, setCartValue, quentity, setQuentity}) => {
    useEffect(() => {

    },[cartValue])

    const handleBack = () => {
        setIndex(1)
    }
    const handleDelete = (e) => {
        console.log(e.target.value)
        let temp = [...cartValue]
        temp.splice(e.target.value, 1)
        setCartValue(temp)
    }

    return(
        <div>
            <h1>Cart</h1>
            <button onClick = {handleBack} style = {{paddingBottom:"10px"}}>Back</button>
<Grid container spacing = {3}>
         {cartValue.map((value,index) => {
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
                                <li className="list-group-item">Quentity:  {value.quentity} </li>
                            </ul>
                            <div className="card-body">
                            <button onClick = {handleDelete} value = {index}>Delete</button> 
                            </div>
                            </div>
                        </Grid>
                   
                )
            })}
            </Grid>
        </div>
    )
}

export default Cart