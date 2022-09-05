import { Tree } from 'react-tree-graph'
import { get_craft_tree_new } from './craft-requirement'
import { calculate_total_count_new } from './craft-requirement'


export default function TreeGraph({craft, count, setAnchorEl, setTotalCount}) {
    
    const handleClick = (event, node) => {
        setAnchorEl(event.currentTarget);
        var item = node.split("(")[0]
        var count = parseInt(node.split("(")[1].split(")")[0])
        setTotalCount(calculate_total_count_new(item, count))
      }

    return (
        <Tree
              data={get_craft_tree_new(craft, count)}
              nodeRadius={15}
              gProps={{
                className: 'node',
                onClick: handleClick
                   }}
              margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
              height={900}
              width={1000}/>
    )
}




