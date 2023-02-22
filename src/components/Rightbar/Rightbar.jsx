import './Rightbar.css';

const Rightbar = () => {
  return (
    <div className='rightbar'>
      <div className="container">

        <div className="item">
          <span>Suggestions For You</span>
          <div className="user">
            <div className="userInfo">
              <img src="https://www.mexatk.com/wp-content/uploads/2022/01/%D8%B5%D9%88%D8%B1-%D8%B1%D9%85%D8%B2%D9%8A%D8%A7%D8%AA-%D8%B4%D8%A8%D8%A7%D8%A8-3.jpg" alt="" />
              <span>Mohamed Samy</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZsQ0W4GPFPoh2WfLe4qy5vO3G6BZkZOlXDw&usqp=CAU" alt="" />
              <span>Shady Hassan</span>
            </div>
            <div className="buttons">
              <button>follow</button>
              <button>dismiss</button>
            </div>
          </div>
          
        </div>

        <div className="item">
          <span>Last Activities</span>
        <div className="user">
            <div className="userInfo">
              <img src="https://2.bp.blogspot.com/-UCN2WBqTq5E/WcPMdi7vhUI/AAAAAAAARr4/4ooRRk_B3JwcniGP6pQWZK7dghpgKNlywCLcBGAs/s1600/91c2819a18afd1bfec9220ac65cc4528.jpg" alt="" />
            <p>
              <span  style={{fontSize : '15px' , marginRight : '3px'}}> Samy</span>
              changed their cover picture
              </p>
            </div>
          <span style={{fontSize : '12px'}}>1 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrNsp_V6_By4ZFA2Slo75w-i8g67kiPOqoAw&usqp=CAU" alt="" />
            <p>
              <span  style={{fontSize : '14px' , marginRight : '3px'}}>Hamed</span>
              changed their cover picture
              </p>
            </div>
          <span style={{fontSize : '12px'}}>2 hours ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-F9GWncJMxqAALMix40tk0-TWZyAlRftkFw&usqp=CAU" alt="" />
            <p>
              <span  style={{fontSize : '14px' , marginRight : '3px'}}>Mohamed</span>
              changed their cover picture
              </p>
            </div>
          <span style={{fontSize : '12px'}}> 3 min ago</span>
          </div>
          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWVQVUgFwy4h9x7d_X6Q2F-eQPHaC9aqFG9g&usqp=CAU" alt="" />
            <p>
              <span style={{fontSize : '14px' , marginRight : '3px'}}>Kareem</span>
              changed their cover picture
              </p>
            </div>
          <span style={{fontSize : '12px'}}>1 min ago</span>
          </div>
      </div>

      <div className="item">
        <span>Online Friends</span>

        <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_fzkqu22SRiLjtRRI_A4lVvIFRgpwmCc-KA&usqp=CAU" alt="" />
              <div className="online"></div>
              <span  className='s' style={{fontSize : '15px' , marginRight : '3px'}}> Ibrahim Nader</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://www.ha22.com/fashion/wp-content/uploads/2022/05/%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%A7%D8%AA-%D8%A7%D8%AC%D8%A7%D9%86%D8%A8.jpg" alt="" />
              <div className="online"></div>
              <span  style={{fontSize : '15px' , marginRight : '3px'}}> Sara Ahmed</span>
            </div>
          </div>

          <div className="user">
            <div className="userInfo">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS57FUiVW6QlBmzt-trrwQiM4czr_TXZSEpfw&usqp=CAU" alt="" />
              <div className="online"></div>
              <span  style={{fontSize : '15px' , marginRight : '3px'}}> Ahmed Karam</span>
            </div>
          </div>  
          
      </div>
      </div>
    </div>
  )
}

export default Rightbar