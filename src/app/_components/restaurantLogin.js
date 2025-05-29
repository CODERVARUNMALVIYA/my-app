import { useState } from "react";

const RestaurantLogin=()=>{
    const [email,setemail]=useState();
    const [password,setpassword]=useState();
    const [error, seterror]= useState(false);
    const handleLogin=()=>{
        if(!email|| !password){
            seterror(true);
            return false;
        }
        else{
            seterror(false);
        }
    }

    return(
        <>
        <div className="">
       <h3> Login Component</h3>
        <div >
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email id" className="input-field"
            value={email} onChange={(e)=>setemail(e.target.value)}
            />
            {
             error && !email&& <span className="input-error"> Enter Valid Email</span>
            }
        </div>
      
        <div className="input-wrapper">
            <input type="text" placeholder="Enter password" className="input-field"
            value={password} onChange={(e)=>setpassword(e.target.value)}
            />
            {
             error && !password&& <span className="input-error"> Enter Valid Password</span>
            }
        </div>

        <div className="input-wrapper">
           <button onClick={handleLogin} className="button">Login</button >
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantLogin;