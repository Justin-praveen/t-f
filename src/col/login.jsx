import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import axios from "axios";
import { useNavigate } from 'react-router-dom';



const S2 = () => {
   
  
    const [email,setemail] = useState(null)
    const [pass,setpass] = useState(null)

    const navi = useNavigate()

      const submit = async(e)=>{
        e.preventDefault()

        const data = {
            email : email,
            password : pass
        }

       const value = await axios.post("http://localhost:4000/login",data)
       console.log(value)

       const val = value.data.data
       console.log(val.admin)

       if(val.admin === "false"){
        navi("/Home")
        alert("done")

       }

       else if(val.admin === "true"){
        navi("/admin")
       }
       else{
        alert("nothing...!")
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
                <form className='f'  onSubmit={submit}>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='email' required type="text" className="validate" onChange={(e)=>setemail(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                            <div className='input-field col s8  offset-s2'>
                            
                            <input id="email" placeholder='password' required type="text" className="validate" onChange={(e)=>setpass(e.target.value)}  />  
                        <label htmlFor="email"></label>
                            </div>
                         
                        
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center' type='submit'  >
                                login
                            </button>
                            </div>


                           
                        </div>
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center' onClick={()=>navi("/reg")} >
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

export default S2