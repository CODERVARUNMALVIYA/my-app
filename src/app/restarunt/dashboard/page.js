'use client'
import RestaurantHeader from "@/app/_components/RestaurantHeader";
import "./../style.css"
import AddFoodIteam from "@/app/_components/AddFoodIteam";
import { useState } from "react";

const dashboard=()=>{
    const [AddIteam, setAddIteam]= useState(false);
    return(
        <div>
            <RestaurantHeader/>
            <button onClick={()=>setAddIteam(true)}>Add Food</button>
            <button onClick={()=>setAddIteam(false)}>DashBoard</button>
            {
                AddIteam?<AddFoodIteam/>:<h1>Welcome to DashBoard</h1>
            }

        </div>
    )
}
export default dashboard;