import Autocomplete from '@mui/material/Autocomplete';
import { get_all_items_new } from './craft-requirement'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';

export default function All_Items({setCraft, setCount}) {
  return (
    <Grid container spacing={1}>
        <Grid item>
            <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={all_crafts}
            sx={{ width: 300 }}
            onChange={(event, values) => setCraft(values.label)}
            renderInput={(params) => <TextField {...params} label="Craft"/>}
            />
        </Grid>
        <Grid item>
            <TextField 
            id="outlined-basic" 
            label= "count" 
            variant="outlined" 
            onChange={(e) => setCount(e.target.value)}/>
        </Grid>
    </Grid>
  );
}

const all_crafts = get_all_items_new()