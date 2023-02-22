import Post from '../Post/Post';
import './Posts.css';

const Posts = () => {

  const posts = [
    {
      id : 1 ,
      name : "Sohaila Emad",
      userId : 1,
      img : 'https://www.cairo24.com/Upload/libfiles/79/6/905.jpg',
      profilePic : 'https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_750,h_420/https://www.world111.com/wp-content/uploads/2022/04/%D8%A3%D8%AD%D8%AF%D8%AB-%D8%B5%D9%88%D8%B1-%D8%AE%D9%84%D9%81%D9%8A%D8%A9-%D9%84%D8%A8%D9%86%D8%A7%D8%AA-%D9%85%D8%AD%D8%AC%D8%A8%D8%A7%D8%AA-750x420.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
    {
      id : 2 ,
      name : "Kareem Arafa",
      userId : 2,
      profilePic : 'https://i0.wp.com/www.newphotodownload.info/wp-content/uploads/2019/06/%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%B4%D8%A8%D8%A7%D8%A8-2.jpg?ssl=1',
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVmQSTkQDz0S0uUf0p3gY_xQPhmFxLmhvbzg&usqp=CAU',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },

    {
      id : 3 ,
      name : "Ahmed Mansour",
      userId : 3,
      img : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8lF9d15ALBqF7xQ8JiTWXBXVf1jLqGhmwDQ&usqp=CAU',
      profilePic : 'https://i.pinimg.com/736x/7d/c9/e5/7dc9e5e1a9d4539f9d3959b57b39a8be.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },

    {
      id : 4 ,
      name : "Ziad Abdalla",
      userId : 4,
      img : 'https://1.bp.blogspot.com/-ZoqfjLRERJM/YT5_NxdAF4I/AAAAAAAAYhk/Obh3f2LphEwa2sQFHwbEfwn604oDBXJ4wCLcBGAsYHQ/s612/%25D8%25B5%25D9%2588%25D8%25B1-%25D8%25B4%25D8%25A8%25D8%25A7%25D8%25A8-%25D8%25B1%25D8%25A7%25D8%25A6%25D8%25B9%25D9%258A%25D9%2586.jpg',
      profilePic : 'https://m.elsaanews.com/wp-content/uploads/2022/02/%D8%B5%D9%88%D8%B1-%D8%AC%D9%85%D9%8A%D9%84%D8%A9-%D8%A3%D8%AC%D9%85%D9%84-%D8%A7%D9%84%D8%B5%D9%88%D8%B1.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },

    {
      id : 5 ,
      name : "Noura Ahmed",
      userId : 5,
      img : 'https://i.pinimg.com/736x/86/5f/e6/865fe627b85c1378e018f6c90f705f06.jpg',
      profilePic : 'https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjnOvsd67H5kNv8rbmkuQtefD004n_fhS-uaYzaS8BBxYeN9kyFqDwaQjJeDkr5r6TCSb1T1NXtJk7m4gAFbTq1E3629JChAd9xVOwAfcMiz0_p-RI8ZsQD2roFqOqrMi-QgdFS0zAx_RX6ovMeFclALuFV12jiXkOcwwtmeivx7EumGDLmg6JGodPI/s867/%D8%A7%D8%AC%D9%85%D9%84-%D8%B5%D9%88%D8%B1-%D8%A8%D9%86%D8%A7%D8%AA-%D9%81%D8%B1%D9%86%D8%B4.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },

    {
      id : 6 ,
      name : "Ali Samy",
      userId : 6,
      img : 'https://3.bp.blogspot.com/-6IFDxgz-ORM/VynBAeMdkXI/AAAAAAAAVJo/fuPC0SGGwN8EGI9eGgf3KSDiRDCCXGDfQCLcB/s1600/%25D9%2583%25D9%2584%25D8%25A7%25D9%2585%2B%25D9%2584%25D9%2584%25D9%2581%25D9%258A%25D8%25B3%2B%25D8%25A8%25D9%2588%25D9%2583_0.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.',
      profilePic : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQe-bgNyI8zOccMann5FIam4gB2A7ceTs1C4g&usqp=CAU',
    },

    {
      id : 7 ,
      name : "Elsayed Negm",
      userId : 7,
      img : 'https://2.bp.blogspot.com/-byEjlDEj_Q4/Wc-pPpScDaI/AAAAAAABDB4/6S2SmhMFj74Tc7aB7tvsHkBBf-drSJGzgCLcBGAs/w400-h349/00.jpg',
      profilePic : 'https://i.pinimg.com/736x/2d/dc/cc/2ddccc39edadaeab6e23c0276f5bdc4e.jpg',
      desc :' Lorem ipsum dolor sit amet consectetur, adipisicing elit.'
    },
  ]
  return (
    <div className='posts'>
      {posts.map(post =>{
        return <Post  post = {post} key={post.id} />
      })}
    </div>
  )
}

export default Posts