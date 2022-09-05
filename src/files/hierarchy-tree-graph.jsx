import Tree from 'react-hierarchy-tree-graph'
import { get_craft_tree_new } from './craft-requirement'

export default function HierarchyTreeGraph({craft, count}) {
    return (
        <Tree 
              data={get_craft_tree_new(craft, count)}
              orientation="vertical"
              pathFunc="diagonal"
              collapsible={false}
              translate={{x: 900, y:500}}
            />
    )
}