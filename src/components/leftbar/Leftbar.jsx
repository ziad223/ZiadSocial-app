import './leftbar.css';
import profile from '../../image/profile.jpeg';
import Friends from "../../image/1.png";
import Groups from "../../image/2.png";
import Market from "../../image/3.png";
import Watch from "../../image/4.png";
import Memories from "../../image/5.png";
import Events from "../../image/6.png";
import Gaming from "../../image/7.png";
import Gallery from "../../image/8.png";
import Videos from "../../image/9.png";
import Messages from "../../image/10.png";
import Tutorials from "../../image/11.png";
import Courses from "../../image/12.png";
import Fund from "../../image/13.png";

const Leftbar = () => {
  return (
    <div className='leftBar'>
    <div className="container">
      <div className="menu">

        <div className="user">
        <img src={profile} alt="img" />
        <span>Ziad Abdalla</span>
        </div>

        <div className="item">
         <img src={Friends} alt="" />
         <span>Friends</span>
        </div>

        <div className="item">
         <img src={Groups} alt="" />
         <span>Groups</span>
        </div>

        <div className="item">
         <img src={Market} alt="" />
         <span>MarketPlace</span>
        </div>

        <div className="item">
         <img src={Watch} alt="" />
         <span>Watch</span>
        </div>

        <div className="item">
         <img src={Memories} alt="" />
         <span>Memories</span>
        </div>
      </div>
      <hr/>
      
     <div className="menu">
      <span>Your Shortcuts</span>

     <div className="item">
         <img src={Events} alt="" />
         <span>Events</span>
        </div>

        <div className="item">
         <img src={Gaming} alt="" />
         <span>Gaming</span>
        </div>

        <div className="item">
         <img src={Gallery} alt="" />
         <span>Gallery</span>
        </div>

        <div className="item">
         <img src={Videos} alt="" />
         <span>Events</span>
        </div>

        <div className="item">
         <img src={Messages} alt="" />
         <span>Messages</span>
        </div>
    </div>
        <hr />

        <div className="menu">
          <span>Others</span>

          <div className="item">
          <img src={Fund} alt="" />
         <span>Fundraiser</span>  
          </div>

          <div className="item">
          <img src={Tutorials} alt="" />
         <span>Tutorials</span>  
          </div>

          <div className="item">
          <img src={Courses} alt="" />
         <span>Courses</span>  
          </div>

        </div>
    </div>
    </div>
  )
}

export default Leftbar