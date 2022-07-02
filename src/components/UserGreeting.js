import React, { Component } from 'react';

class UserGreeting extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    // Short Circuit operator

    return this.state.isLoggedIn && <div>Welcome Vishwas</div>;

    /*
    // Ternary operator

    return this.state.isLoggedIn ? <div>Welcome Vishwas</div> : <div>Welcome Guest</div>;
    */

    /*
    // Element Variable 

    let message;
    if (this.state.isLoggedIn) {
      message = <div>Welcome Vishwas</div>;
    } else {
      message = <div>Welcome Guest</div>;
    }

    return <div>{message}</div>
    */

    /*
    // if/else

    // if (this.state.isLoggedIn) {
    //   return <div>Welcome Vishwas</div>;
    // } else {
    //   return <div>Welcome Guest</div>;
    // }
    // return (
    //   <div>
    //     <div>Welcome Guest</div>
    //   </div>
    // );
    */
  }
}

export default UserGreeting;
