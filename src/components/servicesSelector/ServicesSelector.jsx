import React from 'react';
import Zoom from '@material-ui/core/Zoom';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import AddIcon from '@material-ui/icons/Add';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import './servicesSelector.css';

function ServicesSelector(props) {
  const { show, toggleServices, services } = props;

  return (
    <Zoom
      in={show}
      timeout={700}
      id="servicesSelectorContainer"
    >
      <Paper>
        <h2>Services</h2>
        <IconButton
          onClick={() => toggleServices(false)}
          id="closeServicesButton"
        >
          <ChevronLeftIcon />
        </IconButton>
        <List id="servicesListContainer">
          {Object.keys(services.serviceList).map((service) => (
            <ListItem key={services.serviceList[service].post.operationId}>
              <ListItemText>
                {services.serviceList[service].post.operationId}
              </ListItemText>
              <ListItemSecondaryAction>
                <Button onClick={() => services.add(service)}>
                  <AddIcon />
                </Button>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
          {Object.keys(services.serviceList).length === 0 && (
            <p>No Services Found.</p>
          )}
        </List>
      </Paper>
    </Zoom>
  );
}

export default ServicesSelector;
