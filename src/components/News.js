import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";

let imageUrlSample =
  "https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888";

export default class News extends Component {

  constructor() {
    super();
    
    console.log("constructor check");
    this.state = {
      // articles:this.articles,
      articles: [],
      loading: false,
      page:1
    };
  }
  
  async componentDidMount() {
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=5fe7972e1c3e4e1c8813a81c8684a888&page=1&pageSize=${this.props.pageSize}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({ articles: parseData.articles, 
      loading:false,
      totalResults:parseData.totalResults });
    }

  handleNextClick = async () => {
    console.log("Next");

    if(!(this.state.page+1> Math.ceil(this.state.totalResults
      /this.props.pageSize)))
    {
    
      let url =
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=5fe7972e1c3e4e1c8813a81c8684a888&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
      this.setState({loading: true});
      let data = await fetch(url);
      let parseData = await data.json();
      
      this.setState({
        page: this.state.page + 1,
        articles: parseData.articles,
        loading:false
      })
    }
    
  };
  handlePrevClick = async () => {
    console.log("Previous");
    
    let url =
    `https://newsapi.org/v2/top-headlines?country=in&apiKey=5fe7972e1c3e4e1c8813a81c8684a888&pageSize=${this.props.pageSize}&page=
    ${this.state.page-1}`;
    this.setState({loading: true});
    let data = await fetch(url);
    let parseData = await data.json();
    
    this.setState({
      page: this.state.page - 1,
      articles: parseData.articles, 
      loading:false
    })
  };
  
  render() {
    return (
      <div>
        <div className="container">
          <h1 className="headingStyle">Republic News - Top Headlines</h1>
           {this.state.loading&&<Spinner/>}
          <div className="row">
            {!(this.state.loading)&&this.state.articles.map((element, index) => {
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
                      element.urlToImage ? element.urlToImage : imageUrlSample
                    }
                    newsUrl={element.url}
                  ></NewsItem>
                </div>
              );
            })}
          </div>
          <div className="container d-flex justify-content-between">
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handlePrevClick}
              disabled={this.state.page <= 1}
            >
              {" "}
              &#8592;Previous
            </button>
            <button
              type="button"
              className="btn btn-dark"
              onClick={this.handleNextClick}
              disabled={this.state.page+1> Math.ceil(this.state.totalResults
                /this.props.pageSize)}
            >
              Next &#8594;

            </button>
          </div>
        </div>
      </div>
    );
  }
}
