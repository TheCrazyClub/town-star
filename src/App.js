import { Tree } from 'react-tree-graph'
import 'react-tree-graph/dist/style.css'
import All_Items from './files/All_Items'
import {get_children} from './files/craft-requirement'
import './App.css';

function App() {
  let data = {
    name: 'Parent',
    children: [{
      name: 'Child One'
    }, {
      name: 'Child Two'
    }]
  };
  return (
    <div>
      <All_Items/>

      <Tree
          data={get_children("Baguette", 10)}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
          height={900}
          width={1000}/>
    </div>
  );
}

export default App;
