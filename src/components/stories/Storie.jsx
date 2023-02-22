import './stories.css';

const Storie = () => {
    const stories = [
  
        {
          id: 1,
          name: "Ahmed Reda",
          img: "https://static-s.aa-cdn.net/img/gp/20600015644448/7N9XB2lWnO1zTPnluGZg6ZYRD_YtKTAfczhzcLjUdJ5OizCz_0Og5fKWdZYdS8VOx4A?v=1",
        },
        {
          id: 2,
          name: "Mohamed Yasser",
          img: "https://blogger.googleusercontent.com/img/a/AVvXsEiW0RQsAPqKUzI9Eo3oiQd0VEFMncHQNm2443UnnLvEuPuzs-zNaktTq9Oib5rupY8LpBOExDV-WfEcSofNAhy9Yxii6TImXtuVAYuFgFkEg-bfOUBe1X_mVIhyNp7uWRWz0Xrf0n-oUhCd6vDPfe5IR-ykU35ytjB9K7Z18ynb0riadHRQ3XNPAsUu=w400-h400",
        },
        {
          id: 3,
          name: "Nagy Mohseen",
          img: "https://upload.wikimedia.org/wikipedia/commons/1/17/33-%D8%B5%D9%88%D8%B1-%D8%AD%D8%B2%D9%8A%D9%86%D8%A9-%D8%AE%D9%84%D9%81%D9%8A%D8%A7%D8%AA-%D8%AD%D8%B2%D9%8A%D9%86%D9%87-%D9%85%D9%83%D8%AA%D9%88%D8%A8-%D8%B9%D9%84%D9%8A%D9%87%D8%A7-%D8%AA%D8%AD%D9%85%D9%8A%D9%84-%D8%B5%D9%88%D8%B1%D8%AD%D8%B2%D9%8A%D9%86%D8%A9-%D9%85%D8%B9-%D8%B9%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D8%AC%D9%85%D9%84-%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%B2%D9%8A%D9%86%D8%A9-%D9%85%D8%B9-%D8%A7%D9%84%D8%B9%D8%A8%D8%A7%D8%B1%D8%A7%D8%AA-%D8%A7%D8%AC%D9%85%D9%84-%D8%A7%D9%84%D8%B5%D9%88%D8%B1-%D8%A7%D9%84%D8%AD%D8%B2%D9%8A%D9%86%D8%A9-%D9%84%D9%84%D9%81%D8%B1%D8%A7%D9%82-768x1024.jpg",
        },
        {
            id: 4,
            name: "Ali Hossam",
            img: "https://1.bp.blogspot.com/-i-8YjypP61c/Xr0XCM_9urI/AAAAAAAByJY/T4_YgBXhe8sXeaCHbgP-oWFgYtAwN5QbwCLcBGAsYHQ/s400/%25D8%25A7%25D8%25AC%25D9%2585%25D9%2584-%25D8%25A7%25D9%2584%25D8%25B5%25D9%2588%25D8%25B1-%25D9%2585%25D9%2583%25D8%25AA%25D9%2588%25D8%25A8-%25D8%25B9%25D9%2584%25D9%258A%25D9%2587%25D8%25A7-%25D8%25B9%25D8%25A8%25D8%25A7%25D8%25B1%25D8%25A7%25D8%25AA-%25D8%25AC%25D9%2585%25D9%258A%25D9%2584%25D9%25872-1-700x657.jpg",
          },
      ];
  return (
    <div className='stories'>
      <div className="story">
                <img src="https://images.pexels.com/photos/13916254/pexels-photo-13916254.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load" alt="" />
                <span>Ziad Abdalla</span>
                <button>+</button>
            </div>
    {stories.map(story =>{
        return(
            <div className="story">
                <img src={story.img} alt="" />
                <span>{story.name}</span>
            </div>
        )
    })}
</div>
  )
}

export default Storie