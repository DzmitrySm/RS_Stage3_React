import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = function () {
  return (
    <div>
      <h1 className="page_name">NotFoundPage 404</h1>
      <Link to="/">
        <button>button</button>
      </Link>
    </div>
  );
};

export default NotFoundPage;
