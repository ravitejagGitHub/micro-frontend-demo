import React, { useState, useEffect } from "react";
import "./App.css";
import "regenerator-runtime/runtime.js";
function App() {
  const [hasError, setErrors] = useState(false);
  const [articles, setArticles] = useState([]);

  async function fetchData() {
    const res = await fetch(
      "http://newsapi.org/v2/everything?q=Covid19&from=2020-05sortByrity&apiKey=36c6c1c51883480eadc07c880479e81c"
    );
    res
      .json()
      .then((res) => setArticles(res.articles.slice(0, 8)))
      .catch((err) => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <div class="flex-container nav-color">
        <h2 className="highlight">NEWS APP</h2>
      </div>
      <div id="main">
        {articles.map((news) => (
          <div className="item">
            <div>
              <a href={news.url} target="_blank">
                <img src={news.urlToImage} alt="news icon" className="thumb" />
              </a>
            </div>
            <div className="details">
              <h6>
                <a
                  href="https://www.youtube.com/watch?v={{element.id.videoId}}"
                  target="_blank"
                >
                  {news.title}
                </a>
              </h6>
              <p>
                Published on {news.publishedAt} by {news.author}{" "}
              </p>
              <p>{news.content}</p>
            </div>
          </div>
        ))}
      </div>
      <footer class="footer-flex nav-color">
        <div>@ 2020 Copyright: EPAM - UI Community</div>
      </footer>
    </div>
  );
}

export default App;
