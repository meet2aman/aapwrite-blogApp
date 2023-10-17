import React, { useEffect, useState } from "react";
import service from "../appwrite/services";
import { Container, PostCard } from "../components/index";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-white tracking-wide">
        <Container>
          <div className="flex flex-wrap items-center justify-between h-2/3 p-8 max-md:gap-5">
            <div className="max-md:text-center">
              <h1 className="text-[5rem] max-md:text-4xl">
                Welcome To <span className="text-sky-500">Be.</span> <br />
                Now you became <span className="text-sky-500"> We.</span>
              </h1>
            </div>
            <div className="text-4xl max-md:text-xl max-md:text-center max-md:w-full">
              <h1>
                <span className="underline">
                  <Link to="/login">Login</Link>
                </span>
                {""}
                {""} to see the Posts.
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full-py-8">
      <Container>
        <div className="grid grid-cols-4 gap-4 max-sm:grid-cols-1 max-sm:gap-1 max-md:justify-items-center">
          {posts.map((post) => (
            <div key={post.$id} className="p-2 max-sm:p-1 max-md:items-center">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default Home;
