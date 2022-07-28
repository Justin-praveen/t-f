import React, { useState } from 'react'
import Tilt from 'react-parallax-tilt';
import axios from "axios";


const Data = ({v}) => {

    const [email,setemail] = useState(null)
    const [password,setpass] = useState(null)
    const [names,setname] = useState(null)
    const [designation,setdes] = useState(null);


    if(v!==null){
        console.log(v)
    }
      const Submit = async(e)=>{
        e.preventDefault()

        const data = {
            email : email,
            pasword : password,
            names : names,
            designation : designation,
            id : v.id
        }

       const value = await axios.post("http://localhost:4000/update",data)
       console.log(value)

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
                <form className='f'  onSubmit={Submit} encType="multipart/from-data" autoComplete='off'>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='name' value={v.names} type="text" className="validate" onChange={(e)=>setname(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                           
                             <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='email'  value={v.email} type="text" className="validate" onChange={(e)=>setemail(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                             <div className='input-field col s8  offset-s2'>
                            <input id="email" placeholder='password' type="text" value={v.password} className="validate" onChange={(e)=>setpass(e.target.value)}  />  
                        <label htmlFor="email"></label>
                            </div>
                           
                            <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='designation' value={v.designation}type="text" className="validate" onChange={(e)=>setdes(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                        
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center' type='submit'  >
                                update
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

export default Data

