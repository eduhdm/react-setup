import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import theme from 'common/theme';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          Hello mundo!
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
