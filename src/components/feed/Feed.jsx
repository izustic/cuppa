// import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";
import Post from "../post/Post";

import { Box } from "@mui/material";
import React from "react";

const Feed = () => {
	return <Box flex={4} p={2}>
    <Post />
    <Post />
    <Post />
  </Box>;
};

export default Feed;
