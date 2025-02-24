import React, { useState } from 'react';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler =(e)=>{
    e.preventDefault()
    console.log("email is" + email);
    console.log("password is :"+password)
    setEmail("")
    setPassword("")
  }
  return (
    <div className="flex h-screen w-screen justify-center items-center bg-gray-900">
      <div className="border-2 h-1/2 w-1/3 border-emerald-600 rounded-xl "style={{padding:"20px"}}>
        <form onSubmit={(e)=>{
          submitHandler(e)
        }} className="flex flex-col justify-center items-center h-full space-y-4">
          <input
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
          required
          style={{ padding: '10px' }}
            className="border-2 bg-transparent border-emerald-600 outline-none text-white placeholder:text-gray-400 text-xl rounded-full px-4 py-2 w-full"
            type="email"
            placeholder="Enter your email"
          />
          <input
          value={password}
          onChange={(e)=>{
            setPassword(e.target.value)
          }}
          required
          style={{ padding: '10px', marginTop:"10px" }}
            className="border-2 bg-transparent border-emerald-600 outline-none text-white placeholder:text-gray-400 text-xl rounded-full px-4 py-2 w-full"
            type="password"
            placeholder="Enter your password"
          />
          <button  style={{ paddingLeft: '20px', paddingRight: '20px', paddingTop: '10px' ,paddingBottom: '10px',marginTop:'10PX' }} className="border-2 bg-emerald-600 outline-none text-white text-xl rounded-full px-10 py-2 hover:bg-emerald-700 transition-all">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
