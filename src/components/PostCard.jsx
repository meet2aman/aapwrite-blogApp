import React from "react";
import service from "../appwrite/services";
import { Link } from "react-router-dom";

const PostCard = ({ $id, title, featuredImage }) => {
  return (
    <Link to={`/post/${$id}`}>
      <div className="w-full bg-gray-100 p-4 rounded-xl">
        <div className="w-full justify center mb-4">
          <img src={service.getFilePreview(featuredImage)} alt={title} />
        </div>
        <h2 className="text-center text-xl font-semibold font-nunito">
          {title}
        </h2>
      </div>
    </Link>
  );
};

export default PostCard;
