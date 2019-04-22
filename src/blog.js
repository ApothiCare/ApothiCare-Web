import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import {ROUTER_PATHS} from "./App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

//should decide of a size for a blog article, number of articles per pages, and how to make pages. Maybe a side to show recent articles ?
// maybe 180vh

export default class Blog extends Component {
    render () {
        return (
            <div className={"blog"} id={"blog"}>

            </div>
        );
    }
}