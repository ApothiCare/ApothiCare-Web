import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import {ROUTER_PATHS} from "./App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

//size should be 180vh

const Header = () => (
    <div className={"header"} id={"header"}>

    </div>
);

const Content = () => (
    <div className={"content"} id={"content"}>

    </div>
);

export default class Showcase extends Component {
    render () {
        return (
            <div className={"showcase"} id={"showcase"}>
                <Header/>
                <Content/>
            </div>
        );
    }
}