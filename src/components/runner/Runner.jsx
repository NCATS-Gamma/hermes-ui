import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './runner.css';

import SortableList from './sortableList/SortableList';

function Runner(props) {
  const {
    toggleServices, showServices, services, go, result, disabled, stop,
  } = props;
  const [expanded, setExpanded] = useState(false);
  const serviceList = services.services;

  const handleExpanded = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  function handleSort({ oldIndex, newIndex }) {
    const [movedTask] = serviceList.splice(oldIndex, 1);
    serviceList.splice(newIndex, 0, movedTask);
    services.updateServices([...serviceList]);
  }

  function downloadResults() {
    const json = JSON.stringify(result);
    const blob = new Blob([json], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.download = 'hermes.json';
    a.href = url;
    a.click();
    a.remove();
  }

  return (
    <Paper id="runnerContainer">
      {!showServices && (
        <Button
          id="toggleServicesButton"
          onClick={() => toggleServices(true)}
          variant="outlined"
        >
          Add Service
        </Button>
      )}
      <h2>Runner</h2>
      <SortableList
        items={serviceList}
        expanded={expanded}
        handleExpanded={handleExpanded}
        setExpanded={setExpanded}
        services={services}
        onSortEnd={handleSort}
        lockAxis="y"
        lockToContainerEdges
        useDragHandle
      />
      <div id="runnerButtons">
        <Button
          variant="outlined"
          disabled={disabled}
          onClick={go}
        >
          Run
        </Button>
        <Button
          variant="outlined"
          disabled={disabled}
          onClick={() => stop(true)}
        >
          Stop
        </Button>
        {Object.keys(result).length > 0 && (
          <Button
            variant="outlined"
            onClick={downloadResults}
          >
            Download Result
          </Button>
        )}
      </div>
    </Paper>
  );
}

export default Runner;
