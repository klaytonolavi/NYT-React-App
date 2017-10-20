import React, {Component} from 'react';
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input} from "../../components/Form";
import axios from "axios";
import ResultContainer from "../../components/Result/Result";

class SearchContainer extends Component {
    //  Setting the components intial state
    handleInputChange = event => {
        let value = event.target.value;
        const name = event.target.name;
        //  Updating the input's state
        this.setState({[name]: value});
    }

    handleFormSubmit(event) {
        event.preventDefault();
        let sd = this.state.startDate;
        let ed = this.state.endDate;
        let tp = this.state.topic;
        let obj = this;
        const APIKey = "b9f91d369ff59547cd47b931d8cbc56b:0:74623931";
        const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + APIKey + "&q=" + tp + "&begin_date=" + sd + "0101&end_date=" + ed + "0101";
        axios
            .get(BASEURL)
            .then(function (response) {
                if(response.data.status == "OK") {
                    obj.setState({
                        'articles': response.data.response.docs
                    });
                }
                console.log(obj.state.articles);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    constructor(props) {
        super(props);
        this.state = {
            articles: [],
            topic: "",
            startDate: "",
            endDate: ""
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
    }

    render() {
        return (
            <div>
                <Container fluid>
                    <Row>
                        <Col size="md-12">
                            <h1 className="text-center">Search</h1>
                            <form onSubmit={this.handleFormSubmit}>
                                <label>Topic: {this.state.topic}</label>
                                <Input
                                    value={this.state.topic}
                                    onChange={this.handleInputChange}
                                    name="topic"
                                    placeholder="Topic (required)"/>
                                <label>
                                    startYear : {this.state.startDate}</label>
                                <Input
                                    value={this.state.startDate}
                                    onChange={this.handleInputChange}
                                    type="number"
                                    min="1800"
                                    max="2017"
                                    placeholder="Start Date (required)"name="startDate"/>
                                <label>EndYear: {this.state.endDate}</label>
                                <Input
                                    value={this.state.endDate}
                                    onChange={this.handleInputChange}
                                    name="endDate"
                                    placeholder="End Date (required)"/>
                                <input type="submit" value="Search"/>
                            </form>
                        </Col>
                    </Row>
                </Container>
                <Container fluid>
                    <ResultContainer articles={this.state.articles}/>
                </Container>
            </div>
        );
    }
}

export default SearchContainer;