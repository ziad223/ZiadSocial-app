import './navbar.css';
import { Link } from 'react-router-dom';
import profile from '../../image/profile.jpeg';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import { useContext } from 'react';
import { DarkContext } from '../context/DarkContext';
import WbSunnyOutlinedIcon from '@mui/icons-material/WbSunnyOutlined';


const Navbar = () => {
  const {dark , darkMode} = useContext(DarkContext);
  
  return (
    <div className='navbar'>
    <div className="left">
      <Link to = '/' style={{textDecoration : 'none'}}> 
      <span>Ziad Social</span>
      </Link>
      <HomeOutlinedIcon/>
      <div onClick={() => darkMode(!dark)}>
         {dark ? <WbSunnyOutlinedIcon className='sun' style={{cursor : 'pointer'}} /> : <DarkModeOutlinedIcon style={{cursor : 'pointer'}} /> }  
        </div>
      <GridViewOutlinedIcon/>
      <div className="search">
        <SearchOutlinedIcon/> 
        <input type="text" placeholder='Search... ' />
      </div>
    </div>


    <div className="right">
      <PersonOutlineOutlinedIcon />
      <EmailOutlinedIcon/>
      <NotificationsOutlinedIcon/>
      <div className="user">
        <img src={profile} alt="img" />
        <span>Ziad Abdalla</span>
      </div>
    </div>
    </div>
  )
}

export default Navbar