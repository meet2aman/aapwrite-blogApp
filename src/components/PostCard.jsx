import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import service from "../appwrite/services";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

const PostCard = ({ $id, title, featuredImage, content }) => {
  return (
    <Link to={`/post/${$id}`}>
      <Card
        sx={{ maxWidth: 350, minHeight: 350 }}
        className="my-5 max-sm:my-4"
      >
        <CardActionArea className="mx-3">
          <CardMedia
            component="img"
            className="object-cover h-[12rem] "
            image={service.getFilePreview(featuredImage)}
            alt={title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              className="line-clamp-5"
            >
              {parse(content)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default PostCard;
