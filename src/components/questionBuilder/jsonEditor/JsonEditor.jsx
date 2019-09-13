import React from 'react';
import ReactJson from 'react-json-view';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';

function JSONEditor(props) {
  const { data, show, toggle } = props;

  function onUpdate(editedQuestion) {
    data.updateQuestion(editedQuestion.updated_src);
  }

  return (
    <Dialog
      open={show}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitle>
        JSON Editor
      </DialogTitle>
      <DialogContent>
        <ReactJson
          name={false}
          theme="rjv-default"
          collapseStringsAfterLength={15}
          indentWidth={2}
          iconStyle="triangle"
          src={data.question}
          onEdit={onUpdate}
          onAdd={onUpdate}
          onDelete={onUpdate}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={() => toggle(false)}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default JSONEditor;
