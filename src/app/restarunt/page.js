'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/restaurantLogin";
import RestaurantSignUp from "../_components/restaurantSignUp";

const Restaurant=()=>{
    const [Login, setLogin]=useState(true)
    return(
        <>
        <div  className="container">

   
       <h1> Restaurant  Login / Signup Page</h1>
       {
        Login? <RestaurantLogin/> :  <RestaurantSignUp/>
       }
       
     
     <div>
          <button className="button-link" onClick={()=>setLogin(!Login)}>
        {Login ?"do not have Account? SignUP" : "Already have Account ? Login" } 
         </button>
     </div>
          </div>
        </>
    )
}

export default Restaurant;