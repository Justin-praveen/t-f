import React, { useEffect, useState } from 'react'
import Tilt from 'react-parallax-tilt';
import axios from "axios";


const Data = ({v,ki,set}) => {


    const [email,setemail] = useState("")
    const [password,setpass] = useState("")
    const [names,setname] = useState("")
    const [designation,setdes] = useState("");
    const [admin,setadmin] = useState("")
    

  

useEffect(()=>{
      if(v!==null){
  
  

        setname(v.names)
        setemail(v.email)
        setdes(v.designation)
        setpass(v.password)
        setadmin(v.admin)
        console.log(email)
    }
    else{
        console.log("empty")
    }
},[v])
  
      const Submit = async(e)=>{
        e.preventDefault()

        const h = {[e.target.name] : e.target.value}

      
        console.log(h)

        console.log(email)
        console.log(names)
        console.log(password)
        console.log(designation)
        console.log(v.id)

     

        const ki = {
            email,
            names,
            designation,
            password,
            admin,
            id : v.id
        }

       const value = await axios.post("http://localhost:4000/update",ki)
       console.log(value)



       if(value){
        ki()
        set(null)
        
       }

       


      }
      
  return (
    <>

    {v === null ? (<div></div>) : (    <div className="container uy flex">
            <div className='full'>

                <Tilt>
                    <div className='card ju'>
                    <div className='row'>
                    <div className='col s8 offset-s5 po '> <i class="large material-icons" >account_circle</i></div>
                </div>  
                <form className='f' encType="multipart/from-data" autoComplete='off'>
                    <div className='row'>
                        <div >
                        <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='name' name='names' value={names} type="text" className="validate" onChange={(e)=>setname(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                           
                             <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='email' name='email' value={email} type="text" className="validate" onChange={(e)=>setemail(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                             <div className='input-field col s8  offset-s2'>
                            <input id="email" placeholder='password'name='password' type="text" value={password} className="validate" onChange={(e)=>setpass(e.target.value)}  />  
                        <label htmlFor="email"></label>
                            </div>
                           
                            <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='designation' name='designation' value={designation}type="text" className="validate" onChange={(e)=>setdes(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>

                            <div className='input-field fff col s8  offset-s2'>
                            
                            <input id="Uname" placeholder='admin' name='admin' value={admin}type="text" className="validate" onChange={(e)=>setadmin(e.target.value)} />  
                        <label htmlFor="Uname"></label>
                            </div>
                        
                        <div className='row'>
                            <div className='col s4 offset-s5'>
                                 <button className='btn center'  onClick={Submit} type='submit'  >
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
        </div>)}
    
        </>
  )
}

export default Data
