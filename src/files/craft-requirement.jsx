import { crafts } from './crafts.js'

export function get_all_items() {
    var items = []
    Object.keys(crafts).forEach(function(key){
        items.push({'label': key})
    })
    return items
}

export function calculate_total_count(item, count) {
    if (item === null)
        return
    
    var totalCraft = {}
    caluclate(item, count, totalCraft)
    // console.log(totalCraft)
    return totalCraft
}

function caluclate(item, parent_value, totalCraft) {
    if (crafts[item] === null)
        return
    
    if (totalCraft[item] === undefined){
        totalCraft[item] = parent_value 
    }
    else {
        totalCraft[item] = totalCraft[item] + parent_value
    }
    Object.entries(crafts[item]).forEach(function([key, child_value]){
        caluclate(key, parent_value * child_value, totalCraft)
    })
}

export function get_craft_tree(item, parent_value) {
    if (crafts[item] === null)
        return
    // console.log(item + ":" + parent_value)
    var children = []
    Object.entries(crafts[item]).forEach(function([key, child_value]){
        var children_value = get_craft_tree(key, parent_value * child_value)
        if( children_value !== undefined ){
            children.push(children_value)
        }
    })
    // console.log(children)
    return {
        name: item + "(" + parent_value + ")",
        textProps: {x: -25, y: 12},
        children
    }
}

export function get_child(item, parent_value) {
    if (crafts[item] === null)
        return
    
}