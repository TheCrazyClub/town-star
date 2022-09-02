import { Tree } from 'react-tree-graph'
import 'react-tree-graph/dist/style.css'
import All_Items from './files/All_Items'
import { calculate_total_count, get_craft_tree } from './files/craft-requirement'
import './App.css';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Popover from '@mui/material/Popover';
import BasicTable from './files/craft-table'
import Paper from '@mui/material/Paper';

function App() {
  const [ craft , setCraft ] = useState(null)
  const [ count , setCount ] = useState(1)
  const [anchorEl, setAnchorEl] = useState(null);
  const [ totalCount , setTotalCount ] = useState({})

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event, node) => {
    setAnchorEl(event.currentTarget);
    var item = node.split("(")[0]
    var count = parseInt(node.split("(")[1].split(")")[0])
    setTotalCount(calculate_total_count(item, count))
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={0} style={{maxHeight: 1000, overflow: 'auto'}}>
        <Grid item xs={12} style={{padding: 10}}>
          <All_Items 
          setCraft={setCraft} 
          setCount={setCount}/>
        </Grid>
        <Grid item xs={12}>
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
          {craft !==null? <Tree
              data={get_craft_tree(craft, count)}
              nodeRadius={15}
              gProps={{
                className: 'node',
                onClick: handleClick
                   }}
              margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
              height={900}
              width={1000}/> : <div/>}
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
