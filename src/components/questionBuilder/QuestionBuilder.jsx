import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import Button from '@material-ui/core/Button';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './questionBuilder.css';

import JSONEditor from './jsonEditor/JsonEditor';

function QuestionBuilder(props) {
  const { question } = props;
  const [showEditor, toggleEditor] = useState(false);

  function upload(file) {
    const fr = new FileReader();
    fr.onload = (e) => {
      const fileContents = e.target.result;
      try {
        const object = JSON.parse(fileContents);
        question.updateQuestion(object);
      } catch (err) {
        console.log('Something went wrong', err); // eslint-disable-line no-console
      }
    };
    fr.readAsText(file[0]);
  }

  function resetQuestion() {
    question.updateQuestion({});
  }

  const disabled = Object.keys(question.question).length === 0;

  return (
    <ExpansionPanel id="questionBuilderContainer">
      <ExpansionPanelSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <h2>Question Builder</h2>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Dropzone
          onDrop={upload}
          multiple={false}
        >
          {({ getRootProps, getInputProps }) => (
            <div
              {...getRootProps()}
            >
              <input {...getInputProps()} />
              <Button>
                Upload JSON
              </Button>
            </div>
          )}
        </Dropzone>
        <Button
          onClick={() => toggleEditor(true)}
          disabled={disabled}
        >
          Edit
        </Button>
        <Button
          onClick={resetQuestion}
          id="resetJsonButton"
          disabled={disabled}
        >
          Reset
        </Button>
      </ExpansionPanelDetails>
      <JSONEditor
        data={question}
        show={showEditor}
        toggle={toggleEditor}
      />
    </ExpansionPanel>
  );
}

export default QuestionBuilder;
