import { useState } from "react";
import { useNavigate } from "react-router-dom";

const MyProducts=()=>{
    const [buttonText,setButtonText]=useState("Buy Construct");
    const [buttonBgColor,setButtonBgColor]=useState("bg-red-600");
    const navigate=useNavigate();

    const handleButtonClick=()=>{
        if(buttonText==="Buy Construct"){
            setButtonText("Access Construct");
            setButtonBgColor("bg-green-600");
        }else{
            navigate("/categories")
        }
    }
    return (
      <div className="p-2">
        <h1 className=" border rounded p-2 bg-slate-200">My Products</h1>
        <button className={`${buttonBgColor} mt-6 rounded text-white p-2`} onClick={handleButtonClick} type="button">
          {buttonText}
        </button>
      </div>
    );
}
export default MyProducts;