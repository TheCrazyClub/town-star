import 'react-tree-graph/dist/style.css'
import All_Items from './files/All_Items'
import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import BasicTable from './files/craft-table'
import Paper from '@mui/material/Paper';
import Switch from '@mui/material/Switch';
import HierarchyTreeGraph from './files/hierarchy-tree-graph'
import TreeGraph from './files/tree-graph'

function App() {
  const [ craft , setCraft ] = useState(null)
  const [ count , setCount ] = useState(1)
  const [anchorEl, setAnchorEl] = useState(null);
  const [ toggle , setToggle ] = useState(false)
  const [ totalCount , setTotalCount ] = useState({})

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} style={{maxHeight: 1000, overflow: 'auto'}}>
        <Grid item xs={12} style={{padding: 10}}>
          <All_Items 
          setCraft={setCraft} 
          setCount={setCount}/>
        </Grid>
        <Grid item xs={12}>
        <Switch
            checked={toggle}
            onChange={() => setToggle(!toggle)}
            name="loading"
            color="primary"
          />
        </Grid>
        <Grid item xs={12} style={{height: 800}}>
          <Popover
            id={id}
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <Paper sx={{ p: 2 }}><BasicTable totalCount={totalCount} /></Paper>
          </Popover>
          { craft !== null ? 
            toggle ?
            <HierarchyTreeGraph count={count} craft={craft}/>
            : <TreeGraph count={count} craft={craft} setAnchorEl={setAnchorEl} setTotalCount={setTotalCount}/> : <div/>}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
