import { useState } from "react";

const AddFoodIteam=()=>{
    const [name, setname] = useState("");
    const [Price, setPrice] = useState("");
    const [path, setpath] = useState("");
    const [description, setdescription] = useState("");

    const handleFoodIteam=()=>{
        console.log(name,description,path,Price);
    } 
    return(
    <div className="container">
        <h1>Add Food Iteam</h1>
        <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Food Name"
            value={name} onChange={(e)=>setname(e.target.value)}/>
        </div>
            <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter Price"
            value={Price} onChange={(e)=>setPrice(e.target.value)}/>
        </div>
            <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter path Name"
            value={path} onChange={(e)=>setpath(e.target.value)}/>
        </div>
            <div className="input-wrapper">
            <input type="text" className="input-field" placeholder="Enter description"
            value={description} onChange={(e)=>setdescription(e.target.value)}/>
        </div>
             <div className="input-wrapper">
          <button  onClick={handleFoodIteam} className="button">Add Food Iteam</button>
        </div>
        
    </div>
 )
}

export default AddFoodIteam;