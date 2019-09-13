import React, { useState } from 'react';
import axios from 'axios';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { StylesProvider } from '@material-ui/styles';
import './App.css';

import QuestionBuilder from './components/questionBuilder/QuestionBuilder';
import ServicesSelector from './components/servicesSelector/ServicesSelector';
import Runner from './components/runner/Runner';

import useServices from './customHooks/useServices';
import useQuestion from './customHooks/useQuestion';

import buildHermesRequest from './buildHermesRequest';

function App() {
  const [showServices, toggleServices] = useState(false);
  const [result, setResult] = useState({});
  const [stop, setStop] = useState(false);
  const services = useServices();
  const question = useQuestion();

  function pollForResult(jobIda) {
    /* eslint-disable no-console */
    axios.request({
      method: 'GET',
      url: `http://localhost:4878/result/${jobIda}`,
    })
      .then((r) => {
        // console.log('result response', r);
        setResult(r.data);
      })
      .catch((e) => {
        console.log('error', e.message);
        console.log('stop', stop);
        if (!stop) setTimeout(() => pollForResult(jobIda), 1000); // result not ready, try again
      });
    /* eslint-enable no-console */
  }

  function runHermes() {
    if (Object.keys(result).length) {
      setResult({});
    }
    /* eslint-disable no-console */
    const request = buildHermesRequest(services.services, question.question);
    console.log('request', request);
    axios.request({
      method: 'POST',
      url: 'http://localhost:4878/run',
      data: request,
    })
      .then((res) => {
        // console.log('run response', res);
        pollForResult(res.data);
      })
      .catch((err) => {
        console.log('Error', err.response.data);
      });
    /* eslint-enable no-console */
  }

  return (
    <StylesProvider injectFirst>
      <CssBaseline />
      <Grid id="appContainer">
        <Grid id="appHeader" item xs={12}>
          <h1>Hermes</h1>
        </Grid>
        <div id="appContent">
          <Grid item xs={12}>
            <QuestionBuilder
              question={question}
            />
          </Grid>
          <Grid style={showServices ? {} : { display: 'none' }} item xs={3}>
            <ServicesSelector
              show={showServices}
              toggleServices={toggleServices}
              services={services}
            />
          </Grid>
          <Grid item xs={showServices ? 9 : 12}>
            <Runner
              toggleServices={toggleServices}
              showServices={showServices}
              services={services}
              go={runHermes}
              disabled={services.services.length === 0 || Object.keys(question.question).length === 0}
              result={result}
              stop={setStop}
            />
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
