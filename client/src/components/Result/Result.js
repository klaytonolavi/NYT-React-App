import React, {Component} from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import {Col, Row, Container} from "../../components/Grid";
import {List, ListItem} from "../../components/List";
import {Input, TextArea, FormBtn} from "../../components/Form";


function MainList(props) {
    const articles = props.articles;
    const listItems = articles.map((article) =>
      <li>{article.headline.main}</li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

class ResultContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            articles: this.props.articles
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({articles: nextProps.articles});
    }

    render() {
        return (
            <div>
                <MainList articles={this.state.articles} />
            </div>

        );
    }

}

export default ResultContainer;