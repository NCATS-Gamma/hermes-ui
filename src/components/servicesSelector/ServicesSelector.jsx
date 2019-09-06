import React from 'react';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import './servicesSelector.css';

function ServicesSelector() {
  return (
    <Paper id="servicesSelectorContainer">
      <h2>Services Selector</h2>
      <List>
        <ListItem>
          <ListItemText>
            Test
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Test
          </ListItemText>
        </ListItem>
        <ListItem>
          <ListItemText>
            Test
          </ListItemText>
        </ListItem>
      </List>
    </Paper>
  );
}

export default ServicesSelector;
