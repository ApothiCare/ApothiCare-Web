import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';

export default class TestGrid extends Component {
    render() {
        // layout is an array of objects, see the demo for more complete usage
        let layout = [
            {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
            {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
            {i: 'c', x: 4, y: 0, w: 1, h: 2},
            {i: 'd', x: 1, y: 1, w: 1, h: 2}
        ];
        return (
            <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
                <div key="a">a</div>
                <div key="b">b</div>
                <div key="c">c</div>
                <div key="d">d</div>
            </GridLayout>
        )
    }
}