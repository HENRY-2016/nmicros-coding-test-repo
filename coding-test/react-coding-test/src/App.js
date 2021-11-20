import React from "react";
import { Nav, Navbar, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";
// Import from react-router-dom
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import './App.css';

// CRUD Imports
import CreateSavings from "./Components/create-saving.component";
import EditSavings from "./Components/edit-saving.component";
import ViewSavings from "./Components/view-saving.component";
import DeleteSavings from "./Components/delete-saving.component";

function App () 
{
	return (
		<Router>
		<div className="App">
			<header className="App-header">
				<Navbar bg="dark" variant="dark">
					<Container>
						<Navbar.Brand>
							<Link to={"/create-saving"} className="nav-link"> Savings </Link>
						</Navbar.Brand>

						<Nav className="justify-content-end">
							<Nav>
								<Link to={"/create-saving"} className="nav-link"> <span className="navi-lables">Add</span> </Link>
							</Nav>
							<Nav>
								<Link to={"/view-saving"} className="nav-link"><span className="navi-lables">View</span></Link>
							</Nav>
							<Nav>
								<Link to={"/edit-saving"} className="nav-link"><span className="navi-lables">Edit</span></Link>
							</Nav>
							<Nav>
								<Link to={"/delete-saving"} className="nav-link"><span className="navi-lables">Delete</span></Link>
							</Nav>
						</Nav>
					</Container>
				</Navbar>
			</header>

			<Container>
			<Row>
				<Col md={12}>
					<div className="wrapper">
						<Routes>
							<Route exact path="/" element={<CreateSavings />} />
							<Route path="/create-saving" element={<CreateSavings />} />
							<Route path="/view-saving" element={<ViewSavings />} />
							<Route path="/edit-saving" element={<EditSavings />} />
							<Route path="/delete-saving" element={<DeleteSavings />} />
						</Routes>
					</div>
				</Col>
			</Row>
		</Container>
			</div>
		</Router>
	);
}

export default App;
