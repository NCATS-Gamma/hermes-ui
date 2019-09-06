import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { StylesProvider } from '@material-ui/styles';
import './App.css';

import QuestionBuilder from './components/questionBuilder/QuestionBuilder';
import ServicesSelector from './components/servicesSelector/ServicesSelector';
import Runner from './components/runner/Runner';

function App() {
  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Grid id="appContainer">
        <Grid id="appHeader" item xs={12}>
          <h1>Hermes</h1>
        </Grid>
        <div id="appContent">
          <Grid item xs={12}>
            <QuestionBuilder />
          </Grid>
          <Grid item xs={3}>
            <ServicesSelector />
          </Grid>
          <Grid item xs={9}>
            <Runner />
          </Grid>
        </div>
        <Grid id="appFooter" item xs={12}>
          <p>&copy; Hermes 2019</p>
        </Grid>
      </Grid>
    </StylesProvider>
  );
}

export default App;
