import React, { Component } from 'react';

export default class TopNavbar extends Component {
    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.handleScroll);
        this.state = {
            TopNavbarStyle : {}
        };
    }

    CSS_pageStart = {
        'background-color':  'transparent',
        'color' : 'black'
    };
    CSS_pageScrolled = {
        'background-color':  'white',
        'color' : '',
        'border-bottom': '1px solid grey',
        'box-shadow': '0px 2px 5px grey',
    };
    //region Responsive + DownScrollTopNavbar transformation
    handleScroll = (e) => {
        this.setState({ TopNavbarStyle: (window.scrollY < 5) ? this.CSS_pageStart : this.CSS_pageScrolled });
    };

    render() {
        return (
            <div className={"top-navbar"} id={"TOPNAV#1"} style={this.state.TopNavbarStyle}>

            </div>);
    }
};