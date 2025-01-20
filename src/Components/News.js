import React, { Component } from "react";
import PropTypes from "prop-types";
import noImage from "./noImage.jpg";
import Spinner from "./Spinner";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      totalResults: 0,
      country: "us",
      category: "general",
      flag: true,
      page: 1,
      apiKey: "",
    };
  }

  async updateNews() {
    this.props.updateProgress(40);
    await this.setState({
      country: this.props.country,
      category: this.props.category,
      flag: true,
      apiKey: this.props.apiKey,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&category=${this.state.category}&page=${this.props.page}&pageSize=${this.props.pageSize}&apiKey=${this.state.apiKey}`;
    this.props.updateProgress(60);
    let data = await fetch(url);
    this.props.updateProgress(80);
    let jsonData = await data.json();
    this.props.updateProgress(90);
    await this.setState({
      articles: jsonData.articles,
      totalResults: jsonData.totalResults,
      flag: false,
    });
    this.props.updateProgress(100);
  }
  async componentDidMount() {
    this.updateNews();
  }
  fetchMoreData = async () => {
    await this.setState({
      country: this.props.country,
      category: this.props.category,
      flag: true,
    });
    const url = `https://newsapi.org/v2/top-headlines?country=${
      this.state.country
    }&category=${this.state.category}&page=${this.state.page + 1}&pageSize=${
      this.props.pageSize
    }&apiKey=${this.state.apiKey}`;
    let data = await fetch(url);
    let jsonData = await data.json();
    this.setState({
      page: this.state.page + 1,
      articles: this.state.articles.concat(jsonData.articles),
      totalResults: jsonData.totalResults,
      flag: false,
    });
  };

  render() {
    return (
      <>
        <h4 style={{ textAlign: "center", marginTop: "80px", color: "grey" }}>
          {this.props.category.charAt(0).toUpperCase() +
            this.props.category.slice(1) +
            " - Top Headlines"}
        </h4>
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={
            this.state.totalResults > this.state.page * this.props.pageSize
          }
          loader={<Spinner />}
        >
          <div className="container">
            <div className="row" style={{ padding: "30px" }}>
              {this.state.articles.map((article) => {
                return (
                  article.title !== "[Removed]" && (
                    <div
                      className="card my-2 mx-2 col-md-4 card-body"
                      style={{ width: "20rem" }}
                    >
                      <img
                        src={article.urlToImage ? article.urlToImage : noImage}
                        className="card-img-top rounded"
                        alt="News Thumbnail"
                      />
                      <h5 className="card-title my-2">{article.title}</h5>
                      <p className="card-text">{article.description}</p>
                      <p
                        className="card-text"
                        style={{ color: "rgb(167 40 40 / 88%)" }}
                      >
                        <small>
                          {new Date(article.publishedAt).toLocaleString()}
                        </small>
                      </p>
                      <a
                        className="btn btn-dark btn-sm"
                        target="_blank"
                        rel="noreferrer"
                        href={article.url}
                      >
                        Read More
                      </a>
                    </div>
                  )
                );
              })}
            </div>
          </div>
        </InfiniteScroll>
      </>
    );
  }
}

News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
  page: PropTypes.number,
  pageSize: PropTypes.number,
  flag: PropTypes.bool,
};

News.defaultProps = {
  articles: [],
  totalResults: 0,
  country: "us",
  category: "general",
  page: 1,
  pageSize: 9,
  flag: true,
};
