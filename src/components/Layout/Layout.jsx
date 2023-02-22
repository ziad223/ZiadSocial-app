import './Layout.css';
import Navbar from '../navbar/Navbar';
import Leftbar from '../leftbar/Leftbar';
import Rightbar from '../Rightbar/Rightbar';
import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <>
     <Navbar/>
     <div style={{display : 'flex'}}>
       <Leftbar/>
       <div style={{flex : 6}}>
       <Outlet/>
       </div>
       <Rightbar/>
     </div>
    </>
  )
}

export default Layout