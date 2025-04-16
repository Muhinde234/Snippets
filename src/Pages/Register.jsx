import { useState } from "react"
import Button from '../components/UI/Button'
import Input from '../components/UI/Input'


const Register = () => {
 const[firstname,setFirstName] =useState('')
 const[lastname,setLastName] =useState('')
 const[email,setEmail]=useState('')
 const[password,setPassword]=useState("")
 const[confirmPassword,setConfirmPassword]=useState("")
 const[isSubmitted,setisSubmitted]=useState(false)

 const handleSubmit = (e) => {
    e.preventDefault();

    if (!firstname || !lastname || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      setisSubmitted(false);
      return;
    }

    else if (password !== confirmPassword) {
      alert("Passwords don't match.");
      return;
    } else{
        alert(`Thanks for registering, ${firstname}!`);
        setisSubmitted(true)
    }

 
  };



  return (
    <div className="container mx-auto flex justify-center items-center min-h-screen ">
        <form onSubmit={handleSubmit} 
        className=" bg-gray-300 rounded-lg 
        shadow-xl p-8
        " 
        >
            <h1 className="text-center text-2xl font-bold mb-6">register Form</h1>
            <div className=" flex flex-col lg:flex-row justify-between gap-3">
                <Input
                label="First name"
                type="text"
                value={firstname}
                onChange={(e)=>setFirstName(e.target.value)}
                placeholder="enter your first name please"
                id="firstname"
                required
                />
                <Input
                label="Last name"
                type="text"
                value={lastname}
                onChange={(e)=>setLastName(e.target.value)}
                placeholder="enter your last name"
               
                id="lastname"
                required
                />
            </div>
            <div>
                <Input
                label="Email"
                type="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="Enter a valid email"
                id="email"
                required
                />
                <Input
                label="Password"
                type="password"
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                placeholder="enter a password"
                id="password"
                required
                />
                <Input
                label="Confirm Password"
                type="password"
                value={confirmPassword}
                onChange={(e)=>setConfirmPassword(e.target.value)}
                id="confirmPassword"
                required
                />
            </div>
            <div className="text-center bg-blue-300 mt-6 rounded-full p-3 hover:bg-white cursor-pointer duration-500 ">
              <Button
              type="submit"
               className=" text-xl"
               
             

              >
                Register
                </Button> 
            </div>
          
        </form>
        

    </div>
  )
}

export default Register