'use client'
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const RestaurantHeader=()=>{
    const [details, setdetails]=useState('');
    const router=useRouter();
    const pathName=usePathname();
    useEffect(()=>{
        let data =localStorage.getItem("restaurantUser");
        if(!data && pathName=="/restarunt/dashboard"){
         router.push("/restarunt")
        }
        else if(data && pathName=="/restarunt"){
            router.push("/restarunt/dashboard")
        }
        else{
            setdetails(JSON.parse(data));
        }
    }, [])
    const Logout=()=>{
        localStorage.removeItem("restaurantUser")
        router.push("/restarunt")
    }
    return(
        <div className="Header-wrapper">
            <div className="Logo">
                <img style={{width:100}} src="data:image/png;base64,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"/>

            </div>
            <ul>
                <li>
                    <Link href="/">Home</Link>
                </li>
                {
                    details && details.name?
                <li>
                    <Link href="/">Login/SignUp</Link>
                </li>
                :
               <>
               
                <li>
                    <Link href="/">Profile</Link>
                </li>
                <li>
                <button onClick={Logout}>Logout</button>
               </li></>
                
                }
                
            
            </ul>
        </div>
    )
}
export default RestaurantHeader;