import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Signin() {
  const [signPass, setSignPass] = useState('');
  const [signUser, setSignUser] = useState('');
  let status = 0;
  const navigate = useNavigate();

  async function signInHandler() {
    console.log("Sign Up data: ", { signUser, signPass });
    const response = await axios({
      url: "http://localhost:3000/v1/api/user/signin",
      method: "POST",
      data: {
        username: signUser,
        password: signPass
      }
    });
    status = response.status;

    if(status === 200) {
      navigate('/dash');
    }
    
    console.log(response);
  }
  return (
    <>
        <div>
            <div className="w-[20vw] rounded block center bg-gray-100 border border-gray-300 text-sm tracking-[-0.05rem] ml-110 mr-110 mt-20">
                <h1 className='text-3xl p-3 text-center'>Sign In</h1>

                <p className='pl-[2vw]'>Username</p>
                <input value={signUser} onChange={(e) => {setSignUser(e.target.value)}} type="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw]'/>
                
                <p className='pl-[2vw]'>Password</p>
                <input value={signPass} onChange={(e) => {setSignPass(e.target.value)}} ype="text" className='border rounded mb-[1vw] border-gray-400 ml-[2vw]'/>

                <p onClick={signInHandler} className='p-[1vw] rounded-b mt-[1vw] bg-gray-200 hover:bg-black hover:cursor-pointer hover:text-white transition ease-in-out duration-200 text-center'>Sign In</p>
            </div>
        </div>
    </>
  )
}

export default Signin