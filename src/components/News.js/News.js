import React, { useContext, useEffect } from "react";
import "./News.css";
import Loading from "../Loading/Loading";
import newsContext from "../../Newsstate/newsContext";
import { useLocation } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const location = useLocation();
  const context = useContext(newsContext);
  const { news, fetchMoreData,loading, setLoading,getNews} = context;

  useEffect(() => {
      setLoading(true)
      getNews(props.category)
    }, // eslint-disable-next-line
    [location]
  );


  return (
    <>
      {<h1>{props.category} Headlines</h1>}
      <div className="container-body">
        <div className="container">
          <InfiniteScroll
            dataLength={news.length}
            next={fetchMoreData}
            hasMore={news.length<20}
            loader={<Loading/>}
          >{loading && <Loading/>}
            <div className="grid-row">
              {news.map((data,i) => {
                return(data.title && data.description?
                  <div className="card" key={i}>
                    <div className="card-top">
                      <img
                        src={data.image_url || "./img2.jpg"}
                        alt="Blog Name"
                      />
                    </div>
                    <div className="card-info">
                      <h2>{data.title}</h2>
                      <span className="date">
                        {new Date(data.pubDate.slice(0, 10)).toDateString() ||
                          "no date"}
                      </span>
                      <p className="excerpt">{data.description}</p>
                    </div>
                    <div className="card-bottom flex-row">
                      <a
                        href={data.link}
                        rel="noreferrer"
                        target="_blank"
                        className="read-more"
                      >
                        Read Full News
                      </a>
                      <a
                        href={data.link}
                        rel="noreferrer"
                        target="_blank"
                        className="button btn-yellow"
                      >
                        {data.source_id}
                      </a>
                    </div>
                  </div>:""
                )}
              )}
            </div>
          </InfiniteScroll>
        </div>
      </div>
    </>
  );
};

export default News;
