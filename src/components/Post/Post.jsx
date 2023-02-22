import './Post.css';
import { Link } from 'react-router-dom';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';


const Post = ({post}) => {
    const liked = false;
  return (
    <div className='post'>
        <div className="container">
     <div className="user">
     <div className="userInfo">
        <img src={post.profilePic} alt="" />
        <div className="details">
            <Link to = {`/`} style = {{textDecoration : 'none' , color : 'inherit'}}>
                <span className='name'>{post.name}</span>
            </Link>
            <span className='date' >1 min ago</span>

        </div>

     </div>
     <MoreHorizIcon/>
     </div>
     <div className="content">
        <p>{post.desc}</p>
        <img src={post.img} alt="" />
     </div>
     <div className="info">
        <div className="item">

            <div className="link">
      {liked ? <FavoriteOutlinedIcon style={{cursor : 'pointer'}}/> :  <FavoriteBorderOutlinedIcon style={{cursor : 'pointer'}}/>}   
            12 Likes      
            </div>

            <div className="link"  >
               
         <TextsmsOutlinedIcon style={{cursor : 'pointer'}}/>
            12 Comments   
            </div>

            <div className="link">
                <ShareOutlinedIcon style={{cursor : 'pointer'}}/>
               Share
            </div>
            
        </div>
     </div>
     <div>

     </div>
    </div>
    </div>
  )
}

export default Post