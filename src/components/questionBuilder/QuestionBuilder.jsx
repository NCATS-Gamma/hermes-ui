import React from 'react';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './questionBuilder.css';

function QuestionBuilder() {
  return (
    <ExpansionPanel id="questionBuilderContainer">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <h2>Question Builder</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        Question Details
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
}

export default QuestionBuilder;
