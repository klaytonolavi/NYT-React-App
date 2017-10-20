import React, { Component } from 'react';
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class SavedContainer extends Component {
    render() {
        return (
            <div>
                <h1 className="text-center">Saved Articles</h1>
            </div>
        );
    }
}

export default SavedContainer;