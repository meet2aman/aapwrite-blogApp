import React, { useEffect, useState } from "react";
import service from "../appwrite/services";
import { Container, PostCard } from "../components/index";

const AllPost = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    service.getPosts([]).then((posts) => {
      setPosts(posts.documents);
    });
  }, []);

  return (
    <div className="w-full py-8">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div
              key={post.$id}
              className="p-2 w-1/4 max-md:w-full max-md:items-center max-md:ml-2"
            >
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
};

export default AllPost;
