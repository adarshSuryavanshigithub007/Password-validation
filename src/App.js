import React, { useState } from "react";
import validator from "validator";
function App() {
  const[errorMessage,setErrorMessage]=useState('')
  const validation=(value)=>{
if(validator.isStrongPassword(value,{minLength:8,minLowercase:1,minUppercase:1,minNumbers:1,minSymbols:1})){
  setErrorMessage(`Is Strong Password`)

}else{
setErrorMessage(`Is Not Strong Password`)
}
  }
  return (
    <div >
      <h2>Check Password Strength in react</h2>
      <div style={{display:'flex',justifyContent:'center'}}>
      <span>Enter Password</span><input type="text" onChange={(e)=>validation(e.target.value)}/>
      <br/>
      {errorMessage===''?null:<span style={{fontWeight:'bold',color:'red'}}>{errorMessage}</span>}
      </div>
     
    </div>
  );
}

export default App;
