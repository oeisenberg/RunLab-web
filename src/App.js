import React from 'react';
import Navbar from './components/layout/Navbar'
import Register from './components/pages/Register';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {isLoggedIn: false};
    }
  
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        if (isLoggedIn) {
            return <Navbar />
        } else {
            return <Register />;
        }
    }
  }

export default App;