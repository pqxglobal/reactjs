import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    const { name, heroName } = this.props;
    // const { state1, state2 } = this.state; // example for state, not used in this component
    return (
      <h1>
        Welcome {name} a.k.a. {heroName}
      </h1>
    );
  }
}

export default Welcome;
