import React, { Component } from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import theme from 'common/theme';

const generateClassName = createGenerateClassName();
const jss = create(jssPreset());
class App extends Component {
  render() {
    return (
      <JssProvider jss={jss} generateClassName={generateClassName}>
        <MuiThemeProvider theme={theme}>
          <div className="App">
            Hello mundo!
          </div>
        </MuiThemeProvider>
      </JssProvider>
    );
  }
}

export default App;
