import React, { useState, useEffect } from "react";
import { Container, PostForm } from "../components/index";
import service from "../appwrite/services";
import { useNavigate, useParams } from "react-router-dom";

const EditPost = () => {
  const [posts, setPosts] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        if (post) {
          setPosts(post);
        } else {
          navigate("/");
        }
      });
    }
  }, [slug, navigate]);

  return posts ? (
    <div className="py-8 my-10">
      <Container>
        <PostForm post={posts} />
      </Container>
    </div>
  ) : null;
};

export default EditPost;
