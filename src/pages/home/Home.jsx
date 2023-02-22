import './home.css';
import Storie from '../../components/stories/Storie';
import Posts from '../../components/Posts/Posts';

const Home = () => {
  return (
    <div className='home'>
<Storie/>
<Posts/>
    </div>
  )
}

export default Home