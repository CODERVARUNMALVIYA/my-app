const RestaurantLogin=()=>{
    return(
        <>
        <div className="">
       <h3> Login Component</h3>
        <div >
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email id" className="input-field"/>
        </div>
      
        <div className="input-wrapper">
            <input type="text" placeholder="Enter password" className="input-field"/>
        </div>

        <div className="input-wrapper">
           <button className="button">Login</button >
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantLogin;