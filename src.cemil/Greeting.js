import React from 'react';

class Greeting extends React.Component {
  render() {
    return (
      <div>
        <h1>Greetings {this.props.myName}</h1>
        <p>{this.props.isAdmin ? 'You can publish a post' : 'Sorry you are not able to publish a post.'}</p>
      </div>
    )
  }
}

export default Greeting;