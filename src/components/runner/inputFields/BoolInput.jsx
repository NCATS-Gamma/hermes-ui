import React from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';

function BoolInput(props) {
  const {
    val, update, label, index,
  } = props;
  return (
    <TextField
      label={label}
      select
      value={val}
      onChange={(e) => update(index, label, e.target.value)}
    >
      <MenuItem value="true">
        True
      </MenuItem>
      <MenuItem value="false">
        False
      </MenuItem>
    </TextField>
  );
}

export default BoolInput;
