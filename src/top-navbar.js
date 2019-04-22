import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom";
import {ROUTER_PATHS} from "./App";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";
import ApothiCare_logo from "./ressources/ApothiCare_logo.png"

const tab_items = [
    {
        componentID: "header",
        textValue: "Home",
        router_path: "#header"
    },
    {
        componentID: "content",
        textValue: "Notre solution",
        router_path: "#content"
    },
    {
        componentID: "footer",
        textValue: "Contact",
        router_path: "#contact"
    },
    {
        componentID: "faq",
        textValue: "FAQ",
        router_path: "/FAQ"
    },
    {
        componentID: "blog",
        textValue: "Blog",
        router_path: "/blog"
    },
];

const Logo = ({width, height}) => (
    <Link to={"/home"}>
        <img
            alt="ApothiCare_logo.png"
            src={ApothiCare_logo}
            className={"logo"}
            style={{
                "width": width,
                "height": height
            }}/>
    </Link>
);

const TopNavbar_TabItem = ({componentID, textValue, router_path}) => (
    <Link
        className={"TopNavbar_TabItem"}
        to={router_path}
        onClick={()=> {document.getElementById(componentID).scrollIntoView( true );}}
        key={componentID + " TabItem"}
    >
        {textValue}
    </Link>
);

export default class TopNavbar extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.handleScroll);
        this.state = {
            TopNavbarStyle : {}
        };
    }

    render_TabItems = (tab_items) => {
        let elements = [];
        for (let i = 0, len = tab_items.length; i < len ; i++) {
            elements.push(TopNavbar_TabItem(tab_items[i]));
        }
        return elements;
    };

    CSS_pageStart = {
        'backgroundColor':  'transparent',
        'color' : 'black'
    };
    CSS_pageScrolled = {
        'backgroundColor':  'white',
        'color' : '',
        'borderBottom': '1px solid grey',
        'boxShadow': '0px 2px 5px grey',
    };
    //region Responsive + DownScrollTopNavbar transformation
    handleScroll = (e) => {
        this.setState({
            TopNavbarStyle: (window.scrollY < 5) ?
                this.CSS_pageStart : this.CSS_pageScrolled });
    };

    goMobile = () => {
        let x = document.getElementById("TOPNAV#1");
        if (x.className === "top-navbar") {
            x.className += " responsive";
        } else {
            x.className = "top-navbar";
        }
    };

    render() {
        console.log(ROUTER_PATHS.Blog);
        return (
            <div
                className={"top-navbar"}
                id={"TOPNAV#1"}
                style={this.state.TopNavbarStyle}>
                {Logo({width:"7.5vw", height:"7.5vw"})}
                {this.render_TabItems(tab_items)}
                <a href="javascript:void(0);" className="icon" onClick={this.goMobile}>
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </div>);
    }
};