import React from 'react';
import TextField from '@material-ui/core/TextField';

function StringInput(props) {
  const {
    val, update, label, index,
  } = props;
  return (
    <TextField
      label={label}
      type="string"
      value={val}
      onChange={(e) => update(index, label, e.target.value)}
    />
  );
}

export default StringInput;
