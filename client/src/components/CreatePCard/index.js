import React, { Component } from "react";
import { Input, FormBtn } from "../Form";
import { Container, Col, Row } from "reactstrap";
import "./style.css";

class CreatePCard extends Component {

	state = {
		profile: [],
		userName: "",
		password: "",
		firstName: "",
		lastName: "",
		admin: "",
	};
	handleBtnClick = event => {
	}
	// // When the component mounts, load all profiles and save them to this.state.profile
	// 	componentDidMount() {
	// 	this.loadProfile();
	// }
	// Handles updating component state when the user
	// types into the input field
	handleInputChange = event => {
		const { name, value } = event.target;
		this.setState({
			[name]: value
		});
	};

	handleCheckBoxChange = event => {
		const { admin } = event.target;
		this.setState({
			[admin]: "checked"
		})

	};


	// When the form is submitted, use the API.saveProfile?? method to save the proile data
	// Then reload profiles from the database
	// handleFormSubmit = event => {
	// 	event.preventDefault();
	// 	if (this.state.userName && this.state.password) {
	// 		API.saveProfile({
	// 			userName: this.state.userName,
	// 			password: this.state.password,
	// 			realName: this.state.realName,
	// 			position: this.state.position
	// 		})
	// 			.then(res => this.loadProfile())
	// 			.catch(err => console.log(err));
	// 	}
	// };
	render() {
		return (
			<Container>
				<div className="card m-2 p-3">
					<div className="card-header">
						<Row>
							<Col size="md-6">
								<h1> This will be the Log In page</h1>
							</Col>
						</Row>
					</div>
					<form>
						<Input
							value={this.state.userName}
							onChange={this.handleInputChange}
							name="userName"
							placeholder="User Name (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="password"
							placeholder="Password (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="firstName"
							placeholder="firstName (required)"
						/>
						<Input
							value={this.state.password}
							onChange={this.handleInputChange}
							name="lastName"
							placeholder="Last Name (required)"
						/>
						<div className="card-footer">
							Check the box below if your account needs admin status
						<Input
								type="checkbox"
								id="admin"
								name="Admin"
								value="false"
							/>
						</div>
						{/* <TextArea
                					value={this.state.synopsis}
                					onChange={this.handleInputChange}
                					name="synopsis"
                					placeholder="Synopsis (Optional)"
								/> */}

						<FormBtn
							disabled={!(this.state.userName && this.state.password)}
							onClick={this.handleFormSubmit}
						>
							Log-In
              					</FormBtn>
					</form>
				</div>
			</Container>
		);
	}
}

export default CreatePCard;