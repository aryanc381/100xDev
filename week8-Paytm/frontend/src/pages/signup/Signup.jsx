import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [signPass, setSignPass] = useState('');
  const [signUser, setSignUser] = useState('');
  const [signName, setSignName] = useState('');
  const [signSname, setSignSname] = useState('');

  async function signupHandler() {
    console.log("Sign Up data: ", { signName, signSname, signUser, signPass });
    const response = await axios({
      url: "http://localhost:3000/v1/api/user/signup",
      method: "POST",
      data: {
        username: signUser,
        password: signPass,
        firstname: signName,
        lastname: signSname
      }
    });
    console.log(response);
  }
  return (
    <>
        <div>
            <div className="w-[20vw] rounded block center bg-gray-100 border border-gray-300 text-sm tracking-[-0.05rem] ml-110 mr-110 mt-20">
                <h1 className='text-3xl p-3 text-center'>Sign Up</h1>
                <p className='pl-[2vw]'>Name</p>
                <input value={signName} onChange={(e) => {setSignName(e.target.value)}} type="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw] '/>
                
                <p className='pl-[2vw]'>Surname</p>
                <input value={signSname} onChange={(e) => {setSignSname(e.target.value)}} type="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw]'/>
                
                <p className='pl-[2vw]'>Username</p>
                <input value={signUser} onChange={(e) => {setSignUser(e.target.value)}} type="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw]'/>
                
                <p className='pl-[2vw]'>Password</p>
                <input value={signPass} onChange={(e) => {setSignPass(e.target.value)}} ype="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw]'/>

                <p onClick={signupHandler} className='p-[1vw] rounded-b mt-[1vw] bg-gray-200 hover:bg-black hover:cursor-pointer hover:text-white transition ease-in-out duration-200 text-center'>Sing Up</p>
            </div>
        </div>
    </>
  )
}

export default Signup