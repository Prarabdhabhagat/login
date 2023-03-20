import React, { useState } from "react";

function Login(){
    const[user,setuser]=useState("")
    const[password,setPassword]=useState("")
    const[userErr,setUserErr]=useState(false)
    const[passwordErr,setPasswordErr]=useState(false)

   function loginHandler(e){
    e.preventDefault()
    if(user.length<3 || password.length<3){
        alert('Enter a correct value')
    }
    else{
        alert("All Good")
    }
    console.log(user)
    console.log(password)
   }

   function userHandler(e){
    let item = e.target.value
    if(item.length<4){
        setUserErr(true)
    }
    else{
        setUserErr(false)
    }
        setuser(item)

   }

   function passwordHandler(e){
    let item = e.target.value
    if(item.length<4){
        setPasswordErr(true)
    }else{
        setPasswordErr(false)
    }
    setPassword(item)
   }
   

    return(
        <div>
            <h1>Login Form</h1>
            <form onSubmit={loginHandler}>
                Name:<input type="text" placeholder="Enter a value" onChange={userHandler}></input>{userErr?<span>Enter a correct Name</span>:""}<br></br>
                <br></br>
                Password:<input type="text" placeholder="Enter a Password" onChange={passwordHandler}></input>{passwordErr?<span>Enter a correct password</span>:""}<br></br>
                <br></br>
                <button type="submit">Login</button>
            </form>

        </div>
    )
}

export default Login