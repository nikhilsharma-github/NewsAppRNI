import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import imageUrlSample from './RNIlogo.jpg';




const News=(props)=> {
  

    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)
  

    const capitalizeFirstLetter=(string)=>{
      return string.charAt(0).toUpperCase()+string.slice(1);
    }


  const updateNews=async()=>{
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${page}&pageSize=${props.pageSize}`;
    
       
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(30);
    let parseData = await data.json();
    props.setProgress(70);

     setArticles(parseData.articles);
     setTotalResults(parseData.totalResults);
     setLoading(false);

    props.setProgress(100);
  }


   useEffect(() => {
     updateNews();
     // eslint-disable-next-line 
   },[])
  

  //  const handleNextClick = async () => {

  //   setPage(page+1);
  //   updateNews();
  // };
  // const handlePrevClick = async () => {
   
  //    setPage(page-1);
  //  updateNews();
  // };

const  fetchMoreData = async () => {
    

      setPage(page+1);
    const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${page+1}&pageSize=${props.pageSize}`;
    let data = await fetch(url);
    let parseData = await data.json();
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
  };

  
    return (
      <>
      
          <h1 className="headingStyle" style={{marginTop:'5rem'}}>
            Republic News - Top{" "}
            {/* {props.category.charAt(0).toUpperCase() +
              props.category.slice(1)} */}
              {capitalizeFirstLetter(props.category) }{" "}
            Headlines
          </h1>
          {loading&&<Spinner></Spinner>}
          <InfiniteScroll
            dataLength={articles.length}
            next={fetchMoreData}
            hasMore={articles.length !== totalResults}
            loader={<Spinner ></Spinner>}
          >
            <div className="container">
              <div className="row">
                {articles.map((element, index) => {
                  return (
                    <div className="col-md-4" key={element.url}>
                      <NewsItem
                        title={element.title ? element.title.slice(0, 45) : ""}
                        description={
                          element.description
                            ? element.description.slice(0, 80)
                            : ""
                        }
                        imageUrl={
                          element.urlToImage
                            ? element.urlToImage
                            : imageUrlSample
                        }
                        newsUrl={element.url}
                        author={element.author}
                        publishedAt={element.publishedAt}
                        sourceName={element.source}
                        categoryName={props.category}
                      ></NewsItem>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
         
      </>
    );
  }


export default News;


News.defaultProps = {
  country: "in",
  pageSize: "9",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};