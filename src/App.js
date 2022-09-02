import { Tree } from 'react-tree-graph'
import 'react-tree-graph/dist/style.css'
import All_Items from './files/All_Items'
import {get_children} from './files/craft-requirement'
import './App.css';
import { useState } from 'react';

function App() {
  const [ craft , setCraft ] = useState(null)
  const [ count , setCount ] = useState(1)

  return (
    <div>
      <All_Items 
      setCraft={setCraft} 
      setCount={setCount}/>

      {craft !=null? <Tree
          data={get_children(craft, count)}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
          height={900}
          width={1000}/> : <div/>}
    </div>
  );
}

export default App;
