import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
    };

    buttonClickHandler() {
        this.setState({ renderBall: true });
      }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Start</button>
		}
    }

    // bind ArrowRight keydown event
    componentDidMount() {
        // Listen for keydown events globally
        window.addEventListener('keydown', this.handleKeyDown);
      }
    componentWillUnmount() {
        // Clean up the event listener when the component unmounts
        window.removeEventListener('keydown', this.handleKeyDown);
      }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
