'use client'
import { useState } from "react";
import RestaurantLogin from "../_components/RestaurantLogin";
import RestaurantSignUp from "../_components/RestaurantSignUp";
import RestaurantHeader from "../_components/RestaurantHeader";
import './style.css'
import RestaurantFooter from "../_components/RestaurantFooter";

const Restaurant=()=>{
    const [Login, setLogin]=useState(true)
    return(
        <>
        <div  className="container">
        <RestaurantHeader/>
   
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
          <RestaurantFooter/>
        </>
    )
}

export default Restaurant;