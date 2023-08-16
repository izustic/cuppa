import {
	Avatar,
	AvatarGroup,
	Box,
	Divider,
	IconButton,
	ImageList,
	ImageListItem,
	ImageListItemBar,
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
} from "@mui/material";
import * as React from "react";

import { Info } from "@mui/icons-material";

const RightBar = () => {
	return (
		<Box
			sx={{
				display: {
					xs: "none",
					sm: "block",
				},
			}}
			flex={2}
			p={2}
		>
			<Box position="fixed" width={300} maxHeight="100vh" overflowY="auto">
				<Typography variant="h6" fontWeight={100}>
					Online Friends
				</Typography>
				<AvatarGroup max={7}>
					<Avatar
						alt="Remy Sharp"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISpQlN63TmSTUo1tKsGzpDqEXJ1Bx4BbLFQ&usqp=CAU"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6yf1LyPv1EVMr4KIUQHK-y0Ge5sXq1K-Wz6IxLjHL9ezk1su0nJ8Zl7YsqALdMG2FkU&usqp=CAU"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYovDwxLFhs1jpnrZVXNvEZMDRHi7SxMtvo0OcYRMFHNjlfZ-MYlyw9vciIIT1tiNf5Q&usqp=CAU"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Avatar
						alt="Remy Sharp"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQISpQlN63TmSTUo1tKsGzpDqEXJ1Bx4BbLFQ&usqp=CAU"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn6yf1LyPv1EVMr4KIUQHK-y0Ge5sXq1K-Wz6IxLjHL9ezk1su0nJ8Zl7YsqALdMG2FkU&usqp=CAU"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcYovDwxLFhs1jpnrZVXNvEZMDRHi7SxMtvo0OcYRMFHNjlfZ-MYlyw9vciIIT1tiNf5Q&usqp=CAU"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://images.pexels.com/photos/4420634/pexels-photo-4420634.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
				</AvatarGroup>
				<Typography variant="h6" fontWeight={100} mt={2} mb={2}>
					Latest Posts
				</Typography>

				<ImageList cols={3} rowHeight={100}>
					{/* <ImageListItem key="Subheader" cols={2}>
						<ListSubheader component="div">December</ListSubheader>
					</ImageListItem> */}
					{itemData.map((item) => (
						<ImageListItem key={item.img}>
							<img
								src={`${item.img}?w=248&fit=crop&auto=format`}
								srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
								alt={item.title}
								loading="lazy"
							/>
							<ImageListItemBar
								title={item.title}
								subtitle={item.author}
								actionIcon={
									<IconButton
										sx={{ color: "rgba(255, 255, 255, 0.54)" }}
										aria-label={`info about ${item.title}`}
									>
										<Info />
									</IconButton>
								}
							/>
						</ImageListItem>
					))}
				</ImageList>
				<Typography variant="h6" fontWeight={100} mt={2}>
					Latest Conversations
				</Typography>
				<List
					sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				>
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Brunch this weekend?"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Ali Connors
									</Typography>
									{" — I'll be in your neighborhood doing errands this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Summer BBQ"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										to Scott, Alex, Jennifer
									</Typography>
									{" — Wish I could come, but I'm out of town this…"}
								</React.Fragment>
							}
						/>
					</ListItem>
					<Divider variant="inset" component="li" />
					<ListItem alignItems="flex-start">
						<ListItemAvatar>
							<Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
						</ListItemAvatar>
						<ListItemText
							primary="Oui Oui"
							secondary={
								<React.Fragment>
									<Typography
										sx={{ display: "inline" }}
										component="span"
										variant="body2"
										color="text.primary"
									>
										Sandra Adams
									</Typography>
									{" — Do you have Paris recommendations? Have you ever…"}
								</React.Fragment>
							}
						/>
					</ListItem>
				</List>
			</Box>
		</Box>
	);
};

const itemData = [
	{
		img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
		title: "Breakfast",
		author: "@bkristastucchio",
		rows: 2,
		cols: 2,
		featured: true,
	},
	{
		img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
		title: "Burger",
		author: "@rollelflex_graphy726",
	},
	{
		img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
		title: "Camera",
		author: "@helloimnik",
	},
	// {
	// 	img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
	// 	title: "Coffee",
	// 	author: "@nolanissac",
	// 	cols: 2,
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
	// 	title: "Hats",
	// 	author: "@hjrc33",
	// 	cols: 2,
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
	// 	title: "Honey",
	// 	author: "@arwinneil",
	// 	rows: 2,
	// 	cols: 2,
	// 	featured: true,
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
	// 	title: "Basketball",
	// 	author: "@tjdragotta",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
	// 	title: "Fern",
	// 	author: "@katie_wasserman",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
	// 	title: "Mushrooms",
	// 	author: "@silverdalex",
	// 	rows: 2,
	// 	cols: 2,
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
	// 	title: "Tomato basil",
	// 	author: "@shelleypauls",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
	// 	title: "Sea star",
	// 	author: "@peterlaster",
	// },
	// {
	// 	img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
	// 	title: "Bike",
	// 	author: "@southside_customs",
	// 	cols: 2,
	// },
];

export default RightBar;
