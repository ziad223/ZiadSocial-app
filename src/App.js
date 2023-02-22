import './App.css';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import { Routes , Route} from 'react-router-dom';
import Layout from './components/Layout/Layout';
import Home from './pages/home/Home';
import { useContext } from 'react';
import  { DarkContext} from './components/context/DarkContext';

const App = () => {

  const {dark } = useContext(DarkContext);

  return (
    <div  className={dark ? 'theme-dark' : 'app'}>
   
    <Routes>
      <Route path='/' element = {<Layout/>}>
      <Route path='/' element = {<Home/>}/>
      
      </Route>
      <Route path='/login'    element = {<Login/>} />
      <Route path='/register' element = {<Register/>} />
    </Routes> 
    </div>
  )
}


export default App