const RestaurantSignUp=()=>{
    return(
        <>
        <div className="container">
       <h3> SignUp Component</h3>
         <div >
        <div className="input-wrapper">
            <input type="text" placeholder="Enter Email id" className="input-field"/>
        </div>
      
        <div className="input-wrapper">
            <input type="text" placeholder="Enter password" className="input-field"/>
        </div>

        <div className="input-wrapper">
            <input type="text" placeholder="Conform password" className="input-field"/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Restaurant Name" className="input-field"/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter city" className="input-field"/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter full Address" className="input-field"/>
        </div>

          <div className="input-wrapper">
            <input type="text" placeholder="Enter Mobile Number" className="input-field"/>
        </div>
        <div className="input-wrapper">
           <button className="button">SignUP</button >
        </div>
        </div>
        </div>
        </>
    )
}
export default RestaurantSignUp;