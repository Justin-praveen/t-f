import React from 'react'
import { useState } from 'react'
import Admin from './admin'
import Data from './Data'


const Merge = () => {

    const [val ,setval] = useState("")
  return (
    <>
    <Admin set = {setval}/>
    <Data v = {val}/>
    
    </>
  )
}

export default Merge