import React from 'react';
import TextField from '@material-ui/core/TextField';

function NumInput(props) {
  const {
    val, update, label, index,
  } = props;
  return (
    <TextField
      label={label}
      type="number"
      value={val}
      onChange={(e) => update(index, label, e.target.value)}
    />
  );
}

export default NumInput;
