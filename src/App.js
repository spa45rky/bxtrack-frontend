import logo from "./logo.svg";
import { Button } from "primereact/button";
import { Divider } from "primereact/divider";
import { Dropdown } from "primereact/dropdown";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";
import { TabView, TabPanel } from "primereact/tabview";
import { InputText } from "primereact/inputtext";
import { Calendar } from "primereact/calendar";
import HeaderLogo from "./assets/images/header-logo.png";
import Pfp from "./assets/images/pfp.jpg";
import { useState } from "react";

function App() {
	// hook for selecting header dropdown
	const [option, setOption] = useState("travelers");
	// hook for the language dropdown
	const [language, setLanguage] = useState("");
	// hook for setting location
	const [location, setLocation] = useState("");
	// hook for date
	const [date, setDate] = useState(null);

	// list for dropdown
	const arr = [
		{
			text: "Travelers",
			value: "travelers",
		},
		{
			text: "Renters",
			value: "renters",
		},
	];

	const langArr = [
		{
			text: "English",
			value: "english",
		},
		{
			text: "French",
			value: "french",
		},
		{
			text: "Arabic",
			value: "arabic",
		},
	];

	return (
		<div className="App">
			<div className="header">
				<div className="left-section">
					<img src={HeaderLogo} className="header-logo" />
					<h3 className="header-text">fleet</h3>
					<Divider layout="vertical" className="divider" />
					<Dropdown
						className="select-dropdown"
						value={option}
						onChange={(e) => setOption(e.value)}
						options={arr}
						optionLabel="text"
					/>
				</div>
				<div className="right-section">
					<a className="link-tag">Support</a>
					<div className="lang-select">
						<i className="pi pi-globe" />
						<p>Language</p>
					</div>
					<Button className="header-btn" label="List your property" />
					<i className="pi pi-bell p-overlay-badge notification-icon">
						<Badge value="" severity="success"></Badge>
					</i>
					<Avatar image={Pfp} size="large" shape="circle" />
				</div>
			</div>
			<div className="body">
				<h1 className="title-text">Things to do</h1>
				<h3 className="subtitle-text">Find and book a great experience.</h3>
				<Button className="body-btn" label="Start your search" />
			</div>
			<div className="overlay-body">
				<TabView className="tabs-view">
					<TabPanel header="Stays">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</TabPanel>
					<TabPanel header="Flights">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</TabPanel>
					<TabPanel header="Cars">
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</p>
					</TabPanel>
					<TabPanel className="tab-panel" header="Things to do">
						<div className="input-group">
							<div className="input-container">
								<i className="pi pi-send location-icon" />
								<div className="group-text">
									<h1>Location</h1>
									<InputText
										className="input-text"
										placeholder="Where are you going?"
									/>
								</div>
							</div>
							<div className="input-container">
								<i className="pi pi-user user-icon" />
								<div className="group-text">
									<h1>Date</h1>
									<Calendar
										className="input-calendar"
										value={date}
										placeholder="Add dates"
										onChange={(e) => setDate(e.value)}
									/>
								</div>
							</div>
						</div>
						<Button className="p-button-rounded" icon="pi pi-search" />
					</TabPanel>
				</TabView>
			</div>
		</div>
	);
}

export default App;
