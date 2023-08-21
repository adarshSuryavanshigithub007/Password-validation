import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';


import validator from "validator";
function App() {
  const [password, setPassword] = useState('')
  const validation = (value) => {
    if (validator.isStrongPassword(password, { minLength: 8, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 })) {
      toast.success(`Is Strong Password`)

    } else {
      toast.error(`Is Not Strong Password`)
    }
  }
  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }
  return (
    <div  >
      <ToastContainer style={{ position: toast.POSITION.BOTTOM_RIGHT }} />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <h2>Check Password Strength in react</h2>

      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <span>Enter Password</span><input type="text" onChange={handleChangePassword} />

        <button onClick={validation}>submit</button>


      </div>

    </div>
  );
}

export default App;
