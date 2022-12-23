import React, { useEffect, useState } from "react";
import Newscontext from "./newsContext";

const Newsstate = (props) => {
  const apiKey=process.env.React_APP_Daily_Bugel_API_Key
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false)
  const [newsdetails, setNewsdetails] = useState({
    category:'',
    page:1,
  })

  useEffect(()=>{
    if(newsdetails.page===1){
      getNews()
      window.scrollTo(0,0)
    }
    
    
    // eslint-disable-next-line
  },[newsdetails])

  const getNews = async () => {
    console.log(newsdetails)
    let data = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${newsdetails.category}&language=en&page=${newsdetails.page}`
    );
    let json = await data.json();
    setNews(json.results);

    setLoading(false)
  };

  const fetchMoreData= async()=>{

    let data = await fetch(
      `https://newsdata.io/api/1/news?apikey=${apiKey}&category=${newsdetails.category}&language=en&page=${newsdetails.page+1}`
      );
      let json = await data.json();
      console.log(json)
      setNews(news.concat(json.results));
      setNewsdetails({
        category:newsdetails.category,
        page:newsdetails.page+1
      })
  }



  return (
    <Newscontext.Provider value={{ news, getNews,setNewsdetails,newsdetails,fetchMoreData,loading, setLoading}}>
      {props.children}
    </Newscontext.Provider>
  );
};

export default Newsstate;
