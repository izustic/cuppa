import {
	Add as AddIcon,
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";
import {
	Avatar,
	Box,
	Button,
	ButtonGroup,
	Fab,
	Modal,
	Stack,
	TextField,
	Tooltip,
	Typography,
	styled,
} from "@mui/material";
import { useState } from "react";

const StyledModal = styled(Modal)({
	display: "flex",
	justifyContent: "center",
	alignItems: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	gap: "20px",
	alignItems: "center",
	marginBottom: "20px",
});
const Add = () => {
	const [open, setOpen] = useState(false);
	return (
		<>
			<Tooltip
				title="Add"
				sx={{
					position: "fixed",
					bottom: 20,
					left: {
						xs: "calc(50% - 25px)",
						md: 30,
					},
				}}
				onClick={(e) => setOpen(true)}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={open}
				onClose={(e) => setOpen(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					p={3}
					borderRadius={3}
					bgcolor={"background.default"}
					color={"text.primary"}
					height={300}
					width={500}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Create Post
					</Typography>
					<UserBox onClick={(e) => setOpen(true)}>
						<Avatar
							alt="Remy Sharp"
							sx={{
								width: "30px",
								height: "30px",
							}}
							src="https://shorturl.at/qwzI0"
						/>
						<Typography variant="span" fontWeight={500}>
							Kendrick
						</Typography>
					</UserBox>
					<TextField
						sx={{
							width: "100%",
						}}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="What's on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={2}>
						<EmojiEmotions />
						<Image />
						<VideoCameraBack />
						<PersonAdd />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="outlined primary button group"
					>
						<Button>Post</Button>
						<Button
							sx={{
								width: "20%",
							}}
						>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};

export default Add;
