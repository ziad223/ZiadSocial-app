import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
  <div className='login'>
      <div className="card">

        <div className="left">
          <div className="overlay"></div>
         <h1>Hello World.</h1>

         <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium eaque ipsam voluptatum molestiae perferendis alias, vitae assumenda ad veritatis saepe laborum illum ducimus nulla.</p>
        </div>



        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' />
            <input type="text" placeholder='Password' />
            <button>Login</button>
         <span>Don,t  you have an account ?</span>
        <Link to='/register'><button>Register</button></Link>
          </form>
        </div>
          
      </div>
    </div>
  )
}

export default Login