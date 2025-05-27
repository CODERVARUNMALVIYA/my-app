import { useState } from "react";

const RestaurantSignUp=()=>{
  const [email, setemail]=useState('');
  const [password, setpassword]=useState('');
  const [ConformPassword, setConformPassword]=useState('');
  const [restauranName, setrestauranName]=useState('');
  const [city, setcity]=useState('');
  const [address, setaddress]=useState('');
  const [Mobile, setMobile]=useState('');

  const handleSignUp= async()=>{
    console.log(email,password,ConformPassword,restauranName,city,address,Mobile);
    let result= await fetch("http://localhost:3000/api/restaurant",{
      method:"POST",
      body:JSON.stringify({email,password,restauranName,city,address,Mobile})
   })
   result =await result.json();
  if(result.success){
    alert("Restaurant Resistered successfully")
  }    
  }
    return(
        <>
        <div className="container">
       <h3> SignUp Component</h3>
         <div >
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email id" className="input-field"
             value={email} onChange={(e)=>setemail(e.target.value)}/>
        </div>
      
        <div className="input-wrapper">
            <input type="text" placeholder="Enter password" className="input-field"
            value={password} onChange={(e)=>setpassword(e.target.value)}/>
        </div>

        <div className="input-wrapper">
            <input type="text" placeholder="Conform password" className="input-field"
            value={ConformPassword} onChange={(e)=>setConformPassword(e.target.value)}/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Restaurant Name" className="input-field"
            value={restauranName} onChange={(e)=>setrestauranName(e.target.value)}/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter city" className="input-field"
            value={city} onChange={(e)=>setcity(e.target.value)}/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter full Address" className="input-field"
            value={address} onChange={(e)=>setaddress(e.target.value)}/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Mobile Number" className="input-field"
            value={Mobile} onChange={(e)=>setMobile(e.target.value)}/>
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