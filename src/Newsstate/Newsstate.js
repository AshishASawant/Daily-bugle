import React, { useState } from "react";
import Newscontext from "./newsContext";

const Newsstate = (props) => {
  const apiKey=process.env.React_APP_Daily_Bugel_API_Key
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)
  const [newsdetails, setNewsdetails] = useState({
    category:'',
  })
  

  const getNews = async (category) => {
    let data = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${category}&language=en`
    );
    let json = await data.json();
    setNews(json.results);
    setNewsdetails({'category':category,"nextPage":json.nextPage});
    window.scrollTo(0,0)
    setLoading(false)
  };

  const fetchMoreData= async()=>{    
    let data = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${newsdetails.category}&language=en&page=${newsdetails.nextPage}`
      );
      let json = await data.json();
      setNews(news.concat(json.results));
  }



  return (
    <Newscontext.Provider value={{ news, getNews,setNewsdetails,newsdetails,fetchMoreData,loading, setLoading}}>
      {props.children}
    </Newscontext.Provider>
  );
};

export default Newsstate;
