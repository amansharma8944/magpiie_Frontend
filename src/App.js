import AfterSignup from './components/AfterSignup';
import Clone1 from './components/Clone1';
import SignUpPage from "./components/SignUppage"
import "./components/aftersignup.css"
import { BrowserRouter,Route,Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Clone1/>}/>
   
    <Route path='/Register' element={<SignUpPage/>}/>
    <Route path='/SignUpDone' element={<AfterSignup/>}/>

  </Routes>
  
  
  
  </BrowserRouter>

  </>
  );
}

export default App;
