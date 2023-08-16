import { Favorite, FavoriteBorder, MoreVert, Share } from "@mui/icons-material";

import {
	Avatar,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	CardMedia,
	Checkbox,
	IconButton,
	Typography,
} from "@mui/material";
import React from 'react'

const Post = () => {
  return (
    <>
      <Card
				sx={{
					height: "70vh",
          margin: "5px"
				}}
			>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
							R
						</Avatar>
					}
					action={
						<IconButton aria-label="settings">
							<MoreVert />
						</IconButton>
					}
					title="Shrimp and Chorizo Paella"
					subheader="September 14, 2016"
				/>
				<CardMedia
					component="img"
					height="60%"
					width="100%"
					image="https://images.pexels.com/photos/2228081/pexels-photo-2228081.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					alt="Paella dish"
				/>
				<CardContent>
					<Typography variant="body2" color="text.secondary">
						This impressive paella is a perfect party dish and a fun meal to
						cook together with your guests. Add 1 cup of frozen peas along with
						the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label="add to favorites">
						<Checkbox
							icon={<FavoriteBorder />}
							checkedIcon={
								<Favorite
									sx={{
										color: "red",
									}}
								/>
							}
						/>
					</IconButton>
					<IconButton aria-label="share">
						<Share />
					</IconButton>
				</CardActions>
			</Card>
    </>
  )
}

export default Post