import { useState } from "react";
import Navbar from "./MyComponents/Navbar";
import Alert from "./MyComponents/Alert";
import { TextArea } from "./MyComponents/TextArea";
import About from "./MyComponents/About";
import Contacts from "./MyComponents/Contacts";
import Footer from "./MyComponents/Footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
	const [mode, setMode] = useState("light");
	const changeMode = () => {
		if (mode === "light") {
			setMode("dark");
			document.body.style.backgroundColor = "#343634";
			document.body.style.color = "while";
			showAlert("Dark mode enabled.");
		} else {
			setMode("light");
			document.body.style.backgroundColor = "white";
			document.body.style.color = "#343634";
			showAlert("Dark mode disabled.");
		}
	};
	const [alert, setAlert] = useState(null);
	const showAlert = (alertMsg) => {
		setAlert(alertMsg);
		setTimeout(() => setAlert(null), 2000);
	};
	return (
		<Router>
			<Navbar mode={mode} changeMode={changeMode} />
			<div style={{ minHeight: "80.7vh" }}>
				<Alert alert={alert} />
				<Routes>
					<Route
						path="/textutils"
						element={<TextArea mode={mode} showAlert={showAlert} />}
					/>
					<Route path="/textutils/about" element={<About mode={mode} />} />
					<Route
						path="/textutils/contacts"
						element={<Contacts mode={mode} />}
					/>
				</Routes>
			</div>
			<Footer mode={mode} />
		</Router>
	);
}

export default App;
