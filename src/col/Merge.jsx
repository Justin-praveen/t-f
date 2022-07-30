import React from 'react'
import { useState } from 'react'
import Admin from './admin'
import Data from './Data'


const Merge = () => {

    const [val ,setval] = useState(null)
    let ji;
  return (
    <>
    <Admin set = {setval} lt = {ji}/>
    <Data v = {val} ki={ji} set={setval}/>
    </>
  )
}

export default Merge