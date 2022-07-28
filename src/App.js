
import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import S2 from './col/login';
import Reg from './col/Register';

import Home from './col/Home';

import Merge from "./col/Merge"


function App() {


 
  return (
<>
<BrowserRouter>
<Routes>
  <Route index path='/' element={<S2/>}>
  </Route> 
  <Route path='reg' element={<Reg/>}>
    
    </Route>
    <Route path='/admin' element={<Merge/>}>
    
    </Route>
    <Route path='/Home' element={<Home/>}>

    </Route>
    
</Routes>

</BrowserRouter>


{/* {
      ad === 1 ? (<Merge/>) : ad === 0 ?(
      <BrowserRouter>
      <Routes>
       
        <Route path="/" element={<Home/>}/>
        
      </Routes>
      </BrowserRouter>



    ):(<BrowserRouter>
    <Routes>
      <Route exact path="/" element={<S2/>}/>
      <Route path="reg" element={<Reg/>}/>
   
    </Routes>
    </BrowserRouter>
   )
    } */}


</>
  );
}

export default App;
