import React from "react";
import { Link } from "react-router-dom";
import "./ArticleList.css";

let colors = ["green", "yellow", "red", "pink"];

const ArticleList = ({ articles }) => (
  <>
    <div className="row app">
      <div className="container mt-4" id="blog">
        <h2 className="text-capitalize text-center mt-2">My Blog</h2>
      </div>
      {articles.map((article, key) => (
        <div className="col-md-4 mb-5">
          <div className="newcard">
            <Link className="newcard" key={key} to={`/article/${article.name}`}>
              <div className="newcard-header">
                <img
                  className="img-fluid"
                  alt="{article.title}"
                  src={article.img}
                />
              </div>
              <div className="newcard-body">
                <span className="tag tag-blue" style={{ background: colors }}>
                  Technology
                </span>
                <h4>{article.title}</h4>
                <p>{article.content[0].substring(0, 100)}...</p>
                <div className="user">
                  <img src="" alt="" />
                  <div className="user-info">
                    <h5>
                      <a href={article.authorlink}>{article.author}</a>
                    </h5>
                    <small> {article.date}</small>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>

        // <div className="col-md-4 p-3">
        //   <Link className="card p-1" key={key} to={`/article/${article.name}`}>
        //     <img
        //       className="img-fluid card"
        //       alt="{article.title}"
        //       src={article.img}
        //     />
        //     <section className="card-content p-3">
        //       <h3>{article.title}</h3>
        //       <p className="date">
        //         <a href={article.authorlink}>{article.author}</a>
        //         {article.date}
        //       </p>
        //       <p>📝 {article.content[0].substring(0, 100)}...</p>
        //     </section>
        //   </Link>
        // </div>
      ))}
    </div>
  </>
);

export default ArticleList;
