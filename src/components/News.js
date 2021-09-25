import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

let imageUrlSample =
  "https://media.istockphoto.com/vectors/male-hand-holding-megaphone-with-breaking-news-speech-bubble-banner-vector-id1197831888";

export default class News extends Component {
  static defaultProps = {
    country: "in",
    pageSize: "9",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);

    console.log("constructor check");
    this.state = {
      // articles:this.articles,
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };

    document.title = `${
      this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)
    } - RNI`;
  }

  async updateNews(pageNo) {
    this.props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    this.props.setProgress(30);
    let parseData = await data.json();
    this.props.setProgress(70);
    this.setState({
      articles: parseData.articles,
      loading: false,
      totalResults: parseData.totalResults,
    });
    this.props.setProgress(100);
  }

  async componentDidMount() {
    this.updateNews();
  }

  handleNextClick = async () => {
    console.log("Next");

    // if(!(this.state.page+1> Math.ceil(this.state.totalResults
    //   /this.props.pageSize)))
    // {

    //   let url =
    //   `https://newsapi.org/v2/top-headlines?category=${this.props.category}&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&pageSize=${this.props.pageSize}&page=${this.state.page+1}`;
    //   this.setState({loading: true});
    //   let data = await fetch(url);
    //   let parseData = await data.json();

    //   this.setState({
    //     page: this.state.page + 1,
    //     articles: parseData.articles,
    //     loading:false
    //   })
    // }

    this.setState({ page: this.state.page + 1 });
    this.updateNews();
  };
  handlePrevClick = async () => {
    console.log("Previous");

    //     let url =
    //     `https://newsapi.org/v2/top-headlines?category=${this.props.category}&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&pageSize=${this.props.pageSize}&page=
    // ${this.state.page-1}`;
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parseData = await data.json();

    // this.setState({
    //   page: this.state.page - 1,
    //   articles: parseData.articles,
    //   loading:false
    // })
    this.setState({ page: this.state.page - 1 });
    this.updateNews();
  };

  fetchMoreData = async () => {
    this.setState({ page: this.state.page + 1 });
    // this.updateNews();
    const url = `https://newsapi.org/v2/top-headlines?category=${this.props.category}&category=${this.props.category}&country=${this.props.country}&apiKey=${this.props.apiKey}&fe7972e1c3e4e1c8813a81c8684a888&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    // this.setState({ loading: true });
    let data = await fetch(url);
    let parseData = await data.json();
    this.setState({
      articles: this.state.articles.concat(parseData.articles),
      // loading: false,
      totalResults: parseData.totalResults,
    });
  };

  render() {
    return (
      <>
      
          <h1 className="headingStyle">
            Republic News - Top{" "}
            {this.props.category.charAt(0).toUpperCase() +
              this.props.category.slice(1)}{" "}
            Headlines
          </h1>
          {this.state.loading&&<Spinner></Spinner>}
          <InfiniteScroll
            dataLength={this.state.articles.length}
            next={this.fetchMoreData}
            hasMore={this.state.articles.length !== this.state.totalResults}
            // loader={<h4>Loading...</h4>}
            loader={<Spinner ></Spinner>}
          >
            <div className="container">
              <div className="row">
                {this.state.articles.map((element, index) => {
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
                        categoryName={this.props.category}
                      ></NewsItem>
                    </div>
                  );
                })}
              </div>
            </div>
          </InfiniteScroll>
          {/* <div className="container d-flex justify-content-between">
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
          </div> */}
      
      </>
    );
  }
}
