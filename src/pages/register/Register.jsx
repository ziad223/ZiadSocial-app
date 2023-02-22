import './register.css';
import { Link } from 'react-router-dom';
const Register = () => {
  return (
    <div className='register'>
      <div className="card">



        <div className="right">
          <h1>Register</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="email" placeholder='Email' />
            <input type="text" placeholder='Password' />
            <input type="text" placeholder='Name' />
           <Link to ='/login'>
           <button>Login</button>
           </Link>
          </form>
        </div>
        <div className="left">
          <div className="overlay"></div>
         <h1>Ziad Social.</h1>
         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eaque ipsam voluptatum molestiae perferendis alias, vitae assumenda ad veritatis saepe laborum illum ducimus nulla.</p>
         <span>Don,t  you have an account ?</span>
         <button>Login</button>
        </div>
          
      </div>
    </div>
  )
}

export default Register