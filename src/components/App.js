// import React, { Component, useState } from "react";
// import '../styles/App.css';

// class App extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             renderBall: false,
//             posi : 0,
//             ballPosition: { left: "0px" }
//         };
//         this.renderChoice = this.renderBallOrButton.bind(this)
//         this.buttonClickHandler = this.buttonClickHandler.bind(this)
//     };

//     buttonClickHandler() {
//         this.setState({ renderBall: true });
//       }
//     renderBallOrButton() {
// 		if (this.state.renderBall) {
// 		    return <div className="ball" style={this.state.ballPosition}></div>
// 		} else {
// 		    return <button onClick={this.buttonClickHandler} >Start</button>
// 		}
//     }

//     // bind ArrowRight keydown event
//     componentDidMount() {
//         // Listen for keydown events globally
//         window.addEventListener('keydown', this.handleKeyDown);
//       }
//     componentWillUnmount() {
//         // Clean up the event listener when the component unmounts
//         window.removeEventListener('keydown', this.handleKeyDown);
//       }

//     render() {
//         return (
//             <div className="playground">
//                 {this.renderBallOrButton()}
//             </div>
//         )
//     }

//     render() {
//         return (
//           <div className="playground">
//             {this.renderBallOrButton()}
//           </div>
//         );
//       }

// }


// export default App;




import React, { Component } from "react";
import '../styles/App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" }
    };
    // Bind methods
    this.renderBallOrButton = this.renderBallOrButton.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  // Start button handler: show the ball
  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  // Keyboard event handler: move ball on ArrowRight
  handleKeyDown(e) {
    if (e.key === 'ArrowRight' || e.keyCode === 39) {
      this.setState(prevState => {
        const newPos = prevState.posi + 5;
        return {
          posi: newPos,
          ballPosition: { left: `${newPos}px` }
        };
      });
    }
  }

  componentDidMount() {
    // Listen for keydown events globally
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    // Clean up listener
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Render either the start button or the ball
  renderBallOrButton() {
    if (this.state.renderBall) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    } else {
      return <button className="start" onClick={this.buttonClickHandler}>Start</button>;
    }
  }

  render() {
    return (
      <div className="playground">
        {this.renderBallOrButton()}
      </div>
    );
  }
}

export default App;




