import * as React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import {get_all_items} from './craft-requirement'

export default function All_Items({setCraft}) {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={all_crafts}
      sx={{ width: 300 }}
      onChange={(event, values) => setCraft(values.label)}
      renderInput={(params) => <TextField {...params} label="Craft"/>}
    />
  );
}

const all_crafts = get_all_items()