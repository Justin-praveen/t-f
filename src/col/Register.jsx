import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import axios from "axios";
import { useNavigate } from 'react-router-dom';

const Reg = () => {

    const [email,setemail] = useState(null)
    const [password,setpass] = useState(null)
    const [names,setname] = useState(null)
    const [designation,setdes] = useState(null);
    const [profile,setpro] = useState(null)
    
    let admin = "false"

    
    const na = useNavigate()

      const Submit = async(e)=>{
        e.preventDefault()

        // const data = {
        //     email : email,
        //     password : password,
        //     names : names,
        //     designation : designation,
        //     admin : admin
        // }


        const formData = await new FormData();

        formData.append('email', email)
        formData.append('password', password);
        formData.append('names', names);
        formData.append('designation', designation);
        formData.append('profile', profile);
        formData.append('admin', admin);
        console.log(formData);

       const value = await axios.post("http://localhost:4000/register",formData)
       console.log(value)

       if(value.data.reg){
        alert("DATA added....!")
na("/")

       }
       else{
        alert(value.data)
       }
      }
      
  return (
    <>
        <div className="container uy flex">
            <div className='full'>

                <Tilt>
                    <div className='card ju'>
                    <div className='row'>
                    <div className='col s8 offset-s5 po '> <i class="large material-icons" >account_circle</i></div>
                </div>  
                <form className='f'  onSubmit={Submit}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='name' required type="text" className="validate" onChange={(e)=>setname(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                           
                             <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='email' required type="text" className="validate" onChange={(e)=>setemail(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                             <div className='input-field col s8  offset-s2'>
                            <input id="email" placeholder='password' type="text"  required className="validate" onChange={(e)=>setpass(e.target.value)}  />  
                        <label htmlFor="email"></label>
                            </div>

                            <div className='input-field col s8  offset-s2'>
                            <input id="email" placeholder='file' type="file"  required className="validate" onChange={(e)=>setpro(e.target.files[0])}  />  
                        <label htmlFor="email"></label>
                            </div>
                           

                            <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='designation' type="text" required className="validate" onChange={(e)=>setdes(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>


                        
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center' type='submit'  >
                                Signup
                            </button>
                            </div>
                           
                        </div>
                            
                        
                        </div>
                    </div>
                </form>

               
                    </div>
                </Tilt>
              
            </div>
        </div>
        </>
  )
}

export default Reg