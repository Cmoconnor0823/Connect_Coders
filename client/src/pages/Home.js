import React, { Component } from "react";
import { Container, Col, Row, Card, CardTitle, CardColumns } from "reactstrap";
import Wrapper from "../components/Wrapper/";
import ToDoCard from "../components/ToDoCard";
import SchedCard from "../components/SchedCard";
import MessageCard from "../components/MessageCard";
import SchedTable from "../components/SchedTable";


class Home extends Component {
    state = {

    };
    render() {
        return (
            <Wrapper>
                <Row>
                    <Col>
                    <SchedTable></SchedTable>
                    </Col>
                </Row>
                    <Row>
                        <Col>
                            <CardColumns>
                                <SchedCard></SchedCard>
                                <ToDoCard></ToDoCard>
                                <MessageCard></MessageCard>
                                {/* This is a template to make a new card
                                     <Card>
                                     <CardBody>
                                        <CardTitle>
                                            <h4>This is an example of a card that is not a called in component</h4>
                                        </CardTitle>
                                        </CardBody>
                                    </Card> */}
                            </CardColumns>
                        </Col>
                    </Row>
            </Wrapper>
        );
    }
}

export default Home;