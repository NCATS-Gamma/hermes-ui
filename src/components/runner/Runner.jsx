import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import './runner.css';

const runnerItems = [
  { title: 'Test 1', details: 'qwerqwerqwer' },
  { title: 'Test 2', details: 'asdfasdfasdf' },
  { title: 'Test 3', details: 'zxcvxzcvxcv' },
];

function Runner() {
  const [expanded, setExpanded] = useState(false);

  const handleExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <Paper id="runnerContainer">
      <h2>Runner</h2>
      <List>
        {runnerItems.map((task, i) => (
          <ListItem key={task.title}>
            <ExpansionPanel expanded={expanded === i} onChange={handleExpanded(i)} className="runnerItem">
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
              >
                {task.title}
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                {task.details}
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </ListItem>
        ))}
      </List>
      <Button
        variant="outlined"
      >
        Go
      </Button>
    </Paper>
  );
}

export default Runner;
