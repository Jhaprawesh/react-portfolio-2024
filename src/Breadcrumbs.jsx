import React from "react";
import { useLocation } from "react-router-dom"; // Assuming you use React Router

const Breadcrumbs = () => {
  const location = useLocation();

  // Define your condition based on the location pathname
  const shouldRenderBreadcrumbs = location.pathname === "/blog";

  // Return null if the condition is false, otherwise render the breadcrumbs
  return shouldRenderBreadcrumbs ? (
    <ol className="breadcrumb font-weight-bold">
      <li className="breadcrumb-item">
        <i className="fa fa-home color-danger"></i> <a href="/">Home</a>
      </li>
      <li className="breadcrumb-item">
        <a href="/blog">Blog</a>
      </li>
    </ol>
  ) : null;
};

export default Breadcrumbs;
