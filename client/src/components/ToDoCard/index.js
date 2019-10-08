import React, { Component } from "react";
import { Card, CardTitle, CardBody, Table } from "reactstrap";
import { Input, FormBtn, DeleteBtn, TextArea } from "../Form";
import "./style.css";

class ToDoCard extends Component {

	state = {

	};

	//   componentDidMount() {
	// 	this.loadBooks();
	//   }

	//   loadBooks = () => {
	// 	API.getBooks()
	// 	  .then(res => this.setState({ books: res.data }))
	// 	  .catch(err => console.log(err));
	//   };
	render() {
		return (
			<Card id="toDoCard">
				<CardTitle>
					<h4> This will be the card that holds our to do </h4>
				</CardTitle>
				<CardBody>

					This is the body of the card
					(it appears like we loose 3 columns if the cards are not big enough to justify 3 rows)
					<Table hover>
						<thead>
							<tr>
								<th>#</th>
								<th>Messages</th>

							</tr>
						</thead>
						<tbody>
							<tr>
								<th scope="row">1</th>
								<td>10/7/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
							<tr>
								<th scope="row">2</th>
								<td>10/14/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
							<tr>
								<th scope="row">3</th>
								<td>10/16/19</td>
								<DeleteBtn></DeleteBtn>

							</tr>
						</tbody>
					</Table>
					 <TextArea
						value={this.state.synopsis}
						onChange={this.handleInputChange}
						name="toDo"
						placeholder="Add a item to your ToDo list (Optional)"
					/>
				</CardBody>
			</Card>
		);
	}
}

export default ToDoCard;