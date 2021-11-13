import React, { useState,useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import imageUrlSample from './RNIlogo.jpg';
import sampleData from '../sampledata/sampleData.json';
import sampleDataTechnology from '../sampledata/sampleDataTechnology.json';
import sampleDataEntertainment from '../sampledata/sampleDataEntertainment.json';
import sampleDataBusiness from '../sampledata/sampleDataBusiness.json';
import sampleDataHealth from '../sampledata/sampleDataHealth.json';
import sampleDataSports from '../sampledata/sampleDataSports.json';
import sampleDataScience from '../sampledata/sampleDataScience.json';


  // SAMPLE DATA COLLECTION IN THIS FILE 
const dataVal=  sampleData;
const dataValTech=  sampleDataTechnology;
const dataValEnt=  sampleDataEntertainment;
const dataValSci=  sampleDataScience;
const dataValSpo=  sampleDataSports;
const dataValHel=  sampleDataHealth;
const dataValBus=  sampleDataBusiness;


let sampleDataVal;


const News=(props)=> {
  
  //SWITCH BETWEEN API DATA VS JSON DATA
  // const [articles, setArticles] = useState([])
  location.reload();
  {
    if(props.category==="business"){
      sampleDataVal=dataValBus;
    }
    
    else if(props.category==="entertainment"){
      sampleDataVal=dataValEnt;
    }
    else if(props.category==="health"){
      sampleDataVal=dataValHel;
    }
    else if(props.category==="science"){
      sampleDataVal=dataValSci;
    }
    else if(props.category==="sports"){
      sampleDataVal=dataValSpo;
    }
    else if(props.category==="technology"){
      sampleDataVal=dataValTech;
    }
    else if(props.category==="general"){
      sampleDataVal=dataVal;
      
    }
  }
  const [articles, setArticles] = useState(sampleDataVal.articles);
  
  
  const [loading, setLoading] = useState(true)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)
  
  
  const capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+string.slice(1);
  }
  
  
  const updateNews=async()=>{
    props.setProgress(10);
    // const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${page}&pageSize=${props.pageSize}`;
    let parseData;
    
    setLoading(true);
    location.reload();
    {
      if(props.category==="business"){
        parseData=dataValBus;
        }
        
        else if(props.category==="entertainment"){
          parseData=dataValEnt;
        }
        else if(props.category==="health"){
          parseData=dataValHel;
        }
        else if(props.category==="science"){
          parseData=dataValSci;
        }
        else if(props.category==="sports"){
          parseData=dataValSpo;
        }
        else if(props.category==="technology"){
          parseData=dataValTech;
        }
        else if(props.category==="general"){
          parseData=dataVal;

        }
      }
      // let data = await fetch(url);
      props.setProgress(30);
      
      
      //SWITCH BETWEEN API DATA VS JSON DATA
      // let parseData= dataVal;
      // let parseData = await data.json();
      
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
    
    const  fetchMoreData = async () => {
      
      
      setPage(page+1);
      // const url = `https://newsapi.org/v2/top-headlines?category=${props.category}&category=${props.category}&country=${props.country}&apiKey=${props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${page+1}&pageSize=${props.pageSize}`;
      let parseData;
      location.reload();
      {
        if(props.category==="business"){
          parseData=dataValBus;
        }
        
        else if(props.category==="entertainment"){
          parseData=dataValEnt;
        }
        else if(props.category==="health"){
          parseData=dataValHel;
        }
        else if(props.category==="science"){
          parseData=dataValSci;
        }
        else if(props.category==="sports"){
          parseData=dataValSpo;
        }
        else if(props.category==="technology"){
          parseData=dataValTech;
        }
       else if(props.category==="general"){
          parseData=dataVal;

        }
      }
      
      //SWITCH BETWEEN API DATA VS JSON DATA
      // let data = await fetch(url);
      // let parseData = await data.json();
      
      
      // let parseData=dataVal;
      setArticles(articles.concat(parseData.articles));
      setTotalResults(parseData.totalResults);
    };
    
        
        return (
          <>
      
          <h1 className="headingStyle" style={{marginTop:'5rem'}}>
            Republic News - Top{" "}
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
  category: "",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};