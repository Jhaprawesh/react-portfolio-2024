import React from "react";
import ArticleContent from "./ArticleContent";
import { useParams, Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import "./Select.css";
const SinglePage = ({ match }) => {
  const { name } = useParams();
  const article = ArticleContent.find((article) => article.name === name);
  return (
    <>
      <ol className="breadcrumb font-weight-bold">
        <li className="breadcrumb-item">
          <i className="fa fa-home color-danger"></i> <a href="/">Home</a>
        </li>
        <li className="breadcrumb-item">
          <a href="/blog">Blog</a>
        </li>
      </ol>
      <Helmet>
        <html lang="en" />
        <title>{article.title}</title>
        <meta content={article.desc} name="description" />
        <meta content={article.title} property="og:title" />
        <meta content={article.desc} property="og:description" />
        <meta content={article.img} property="og:image" />
        <meta content="https://axcora.com/getaxcoracms" property="og:author" />
        <meta content={article.title} name="facebook:title" />
        <meta content="website" property="og:type" />
        <meta
          content="https://www.facebook.com/mesinkasircomplete"
          property="facebook:author"
        />
        <meta content={article.img} name="facebook:image" />
        <meta content={article.title} property="og:site_name" />
        <meta content={article.desc} property="facebook:description" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta
          content="https://twitter.com/hockeycomp"
          property="twitter:author"
        />
        <link rel="apple-touch-icon" href={article.img} />
        <link href={article.img} rel="icon" type="image/x-icon" />
        <meta content="@hockeycomp" name="twitter:site" />
        <meta content={article.img} name="twitter:image" />
        <meta content={article.desc} name="twitter:description" />
        <meta content={article.title} name="twitter:title" />
      </Helmet>
      <div className="p-1">
        <div className="card p-1">
          <div className="row justify-content-center ">
            <div className="col-lg-7 text-center">
              <div>
                <img
                  className="img-fluid card"
                  alt="{article.title}"
                  src={article.img}
                />
              </div>
            </div>
            <div className="col-lg-5">
              <h1>
                <Link to="/"> {article.title}</Link>
                <span className="cute"></span>
              </h1>
              <h3>{article.desc}</h3>
              <p className="date">
                <a href={article.authorlink}>{article.author}</a> {article.date}
              </p>
              <p className="dotted" />
            </div>
          </div>
          <main className="card-content p-3 p-md-5">
            {article.content.map((paragraph, key) => (
              <p key={key}>{paragraph}</p>
            ))}
          </main>
        </div>
      </div>
    </>
  );
};
export default SinglePage;
