import React from "react";
import { Link } from "react-router-dom";
import Container from "../layout/Container";

export const Blog: React.FC<{}> = () => {
  return (
    <Container>
      <ul>
        <li>
          <Link to="/blog/blog-one">Post One</Link>
        </li>
        <li>
          <Link to="/blog/blog-two">Post Two</Link>
        </li>
      </ul>
    </Container>
  );
};

export default Blog;
