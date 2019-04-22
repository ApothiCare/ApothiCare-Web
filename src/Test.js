import React, { Component } from 'react';
import "./Test.css"

export default class Test extends Component {
    onDragOver = (ev) => { ev.preventDefault(); };
    onDragStart = (ev) =>  { ev.dataTransfer.setData("text", ev.target.id); };
    onDrop = (ev, ref) =>  {
        ev.stopPropagation();
        ev.preventDefault();
        let rect = ref.getBoundingClientRect();
        let landing_pos = [ev.clientX - rect.left, ev.clientY - rect.top];
        let data = ev.dataTransfer.getData("text");
        let dropper = document.getElementById(data);
        dropper.style.width = "calc(200% + 5px - 2px)";
        ref.appendChild(document.getElementById(data));

    };

    constructor(props) {
        super(props);
        window.addEventListener('scroll', this.handleScroll);
        this.state = {
            rectangles: 2,
            refs: [],
            area: [3, 3],
            max_xs: [0, 0, 0],
        };
    }

    render_component_xtime = (component, x) =>  {
        let elements = [];
        for (let i=0; i < x; i++) {
            elements.push(component(i));
        }
        return elements;
    };

    GridElement = (i) => {
        return(
            <div
                className={"grid-element"}
                key={"GridElement" + i}
            />);
    };

    // these elements needs to be created in the reverse order for the overflow to work correctly
    render_SuperGridElements(x, y) {
        let elements = []
        for (let i=x-1; i >= 0; i--) {
            for (let j=y-1; j>=0; j--) {
                elements.push(this.SuperGridElement(i, j));
            }
        }
        console.log(elements);
        return elements;
    }
    SuperGridElement = (i, j) => {
        return (
            <div
                ref={(c) => { this.state.refs.unshift(c); }}
                className={"super-grid-element"}
                key={"SuperGridElement" + j + " " + i}
                onClick={(ev) => {
                    console.log("grid clicked at [" + i + "," + j + "]");
                    ev.stopPropagation();
                }}
                style={{gridColumn: j + 1, gridRow: i + 1}}
                onDragOver={(ev) => { this.onDragOver(ev); }}
                onDrop={(ev) => { this.onDrop(ev, this.state.refs[this.state.area[1] * i + j ]); }}
            />
        );
    };

    Rectangle = (i) => {
        return (
            <div
                id={"Rectangle"+i}
                className={"rectangle"}
                key={"Rectangle" + i}
                draggable
                onClick={(ev) => {
                    console.log("rectangle clicked");
                    ev.stopPropagation();
                }
                }
                onDrop={(ev) => {ev.preventDefault(); }}
                onDragStart={(ev, id) => { this.onDragStart(ev, id); } }>
                <p>
                    {i}
                </p>
            </div>);
    }

    add_Rectangle = () =>  {
        this.setState({rectangles: this.state.rectangles + 1});
    };

    render() {
        let start_area_ref;
        return(
            <div className={"Test"}>

                <div className={"grid"}>
                    <div
                        className={"grid super-grid"}>
                        {this.render_SuperGridElements(3, 3)}
                    </div>
                    {this.render_component_xtime(this.GridElement, 9)}
                </div>
                <div className={"start-area-container"}>
                    <div
                        ref={(c) => { start_area_ref = c }}
                        onDragOver={(ev) => { this.onDragOver(ev); }}
                        onDrop={(ev) => { this.onDrop(ev, start_area_ref); }}
                        className={"start-area"}>
                        {this.render_component_xtime(this.Rectangle, this.state.rectangles)}
                    </div>
                    <div className={"start-area-button"} onClick={this.add_Rectangle}>
                        <p>
                            ELEMENT++
                        </p>
                    </div>
                </div>
            </div>
        );
    }
}