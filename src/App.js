import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import { useState } from "react"
import "./App.css";
import Feed from "./components/feed/Feed";
import RightBar from "./components/rightbar/RightBar";
import SideBar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import Add from "./components/add/Add";

function App() {
  const [mode,setMode] = useState("dark")
  const darkTheme = createTheme ({
    palette:{
      mode: mode
    }
  })

	return (
    <ThemeProvider theme={darkTheme}>
		<Box bgcolor={"background.default"} color={"text.primary"}>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent={"space-between"}>
				<SideBar setMode={setMode} mode={mode}/>
				<Feed />
				<RightBar />
			</Stack>
      <Add />
		</Box>
    </ThemeProvider>
	);
}

export default App;
