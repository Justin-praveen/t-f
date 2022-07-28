import React, {  useEffect } from 'react'
import { useState } from 'react';
import axios from "axios"

const Home = ({set}) => {


    const [data,setdata]= useState(null);


    useEffect(()=>{
       get()

    },[])

    const get = async()=>{
        const ju = await axios.get("http://localhost:4000/users")
        console.log(ju)
        setdata(ju.data)
    }

    if(data !== null){
        console.log(data)
    }


  return (


    <>
    <div className='container'>
{/* {data === null ? (<h1>Loading...1</h1>) : (
    
    
    data.map((da)=>{

    return(
        <div>
 <table className='striped center'>
        <thead>
            <tr>
                <th>id</th>
                <th>email</th>
                <th>names</th>
                <th>update</th>
                <th>delete</th>
            </tr>
        </thead>

        <tbody>
            <tr>
                <td>{da.id}</td>
                <td>{da.email}</td>
                <td>{da.names}</td>
                <td><button className='btn' onClick={()=>{
                    set(da)
                }}>update</button></td>
                <td><button className='btn red' onClick={async()=>{
                    const i = await {
                        id : da.id

                    }
                    const a = await axios.post(`http://localhost:4000/del`,i)
                    if(a){
                        get()
                    }

                }}> delete</button></td>
            </tr>
          
        </tbody>
    </table>
        </div>

    )
   
}))} */}

{data === null ? (<h1>lodading....!</h1>) : (<div>

    <table>
        <thead>
            <tr>
                <th>
                    id
                </th>
                <th>
                    name
                </th>
                <th>
                    email
                </th>
             
                <th>
                    designation
                </th>
             
            </tr>
        </thead>

        <tbody>
            {
                data.map((da)=>{

                    return (
                         <tr>
                        <td>{da.id}</td>
                        <td>{da.names}</td>
                        <td>{da.email}</td>
                       
                        <td>{da.designation}</td>
                    </tr>
                    )

                   
                })
            }
        </tbody>
    </table>

</div>)}


</div>


    </>)
}

export default Home