'use client'
import { useRouter } from "next/navigation";
import { useState } from "react";

const RestaurantSignUp=()=>{
  const [email, setemail]=useState('');
  const [password, setpassword]=useState('');
  const [ConformPassword, setConformPassword]=useState('');
  const [restauranName, setrestauranName]=useState('');
  const [city, setcity]=useState('');
  const [address, setaddress]=useState('');
  const [Mobile, setMobile]=useState('');
  const router = useRouter();
  const [error,seterror]= useState(false);
  const [passwordError, setpasswordError]= useState(false);

  const handleSignUp= async()=>{
    if( password!== ConformPassword){
      setpasswordError(true);
      return false;
    }
    else{
      setpasswordError(false);
    }
    if(!email|| !password|| !ConformPassword|| !restauranName|| !city|| !address|| !Mobile){
      seterror(true);
       return false;
    }
    else{
      seterror(false)
    }
   
    console.log(email,password,ConformPassword,restauranName,city,address,Mobile);
    let response= await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,restauranName,city,address,Mobile})
   })
   response =await response.json();
  if(response.success){
    console.log(response);
    const {result} =response
    delete result.password
    localStorage.setItem("restaurantUser",JSON.stringify(result));
    router.push("/restarunt/dashboard")
  }    
  }
    return(
        <>
        <div className="container">
       <h3> SignUp Component</h3>
         <div >
        <div className="input-wrapper">
            <input type="email" placeholder="Enter Email id" className="input-field"
             value={email} onChange={(e)=>setemail(e.target.value)}/>
             {
             error && !email&& <span className="input-error"> flied are empty</span>
            }
        </div>
      
        <div className="input-wrapper">
            <input type="password" placeholder="Enter password" className="input-field"
            value={password} onChange={(e)=>setpassword(e.target.value)}/>
            {
              passwordError && <span className="input-error">password and ConformPassword not matched</span>
            }
            {
             error && !password&& <span className="input-error"> flied are empty</span>
            }
        </div>

        <div className="input-wrapper">
            <input type="password" placeholder="Conform password" className="input-field"
            value={ConformPassword} onChange={(e)=>setConformPassword(e.target.value)}/>
            {
              passwordError && <span className="input-error">password and ConformPassword not matched</span>
            }
            {
             error && !ConformPassword&& <span className="input-error"> flied are empty</span>
            }
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Restaurant Name" className="input-field"
            value={restauranName} onChange={(e)=>setrestauranName(e.target.value)}/>
            {
             error && !restauranName&& <span className="input-error"> flied are empty</span>
            }
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter city" className="input-field"
            value={city} onChange={(e)=>setcity(e.target.value)}/>
            {
             error && !city&& <span className="input-error"> flied are empty</span>
            }
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter full Address" className="input-field"
            value={address} onChange={(e)=>setaddress(e.target.value)}/>
            {
             error && !address&& <span className="input-error"> flied are empty</span>
            }
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Mobile Number" className="input-field"
            value={Mobile} onChange={(e)=>setMobile(e.target.value)}/>
            {
             error && !Mobile&& <span className="input-error"> flied are empty</span>
            }
        </div>
        <div className="input-wrapper">
           <button className="button" onClick={handleSignUp}>SignUP</button >
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantSignUp;