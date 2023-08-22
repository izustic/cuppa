import { EmojiFoodBeverage, Mail, Notifications } from "@mui/icons-material";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
	styled,
} from "@mui/material";

import { useState } from "react";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "#fff",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	gap: "20px",
	justifyContent: "center",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	gap: "20px",
	justifyContent: "center",
	alignItems: "center",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="sticky">
			<StyledToolbar>
				<Typography
					variant="h6"
					sx={{
						display: {
							xs: "none",
							sm: "flex",
							alignItems: "center",
						},
					}}
				>
					<EmojiFoodBeverage sx={{ marginRight: 1 }} />
					CUPPA
				</Typography>
				<EmojiFoodBeverage
					sx={{
						display: {
							xs: "block",
							sm: "none",
						},
					}}
				/>
				<Search>
					<InputBase placeholder="search" />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail color="white" />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications color="white" />
					</Badge>
					<Avatar
						alt="Remy Sharp"
						sx={{
							width: "30px",
							height: "30px",
						}}
						src="https://shorturl.at/qwzI0"
						onClick={(e) => setOpen(true)}
					/>
				</Icons>
				<UserBox onClick={(e) => setOpen(true)}>
					<Avatar
						alt="Remy Sharp"
						sx={{
							width: "30px",
							height: "30px",
						}}
						src="https://shorturl.at/qwzI0"
					/>
					<Typography variant="span">Kendrick</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={(e) => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};

export default Navbar;
