import React from "react";
import { useParams } from "react-router-dom";
import Container from "../layout/Container";

export const BlogPost: React.FC<{}> = () => {
  const { id } = useParams<BlogParams>();
  return <Container>This is blog {id}.</Container>;
};

export default BlogPost;
