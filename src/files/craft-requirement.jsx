import { crafts } from './crafts'
import { crafs_obj } from './crafts_obj'

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

//using crafts_obj
export function get_all_items_new() {
    var items = []
    Object.keys(crafs_obj).forEach(function(key){
        items.push({'label': key})
    })
    return items
}

export function calculate_total_count_new(item, count) {
    if (item === null)
        return
    
    var totalCraft = {}
    const arr = []
    arr.push([item, count])

    while( arr.length > 0) {
        var [curr_item, curr_count] = arr.shift()

        if (totalCraft[curr_item] === undefined){
            totalCraft[curr_item] = curr_count 
        }
        else {
            totalCraft[curr_item] = totalCraft[curr_item] + curr_count
        }

        //push craft requirements
        if(crafs_obj[curr_item]["Req1"] !== "none"){
            arr.push([crafs_obj[curr_item]["Req1"], curr_count * crafs_obj[curr_item]["Value1"]])
        }
        if(crafs_obj[curr_item]["Req2"] !== "none"){
            arr.push([crafs_obj[curr_item]["Req2"], curr_count * crafs_obj[curr_item]["Value2"]])
        }
        if(crafs_obj[curr_item]["Req3"] !== "none"){
            arr.push([crafs_obj[curr_item]["Req3"], curr_count * crafs_obj[curr_item]["Value3"]])
        }
    }

    // console.log(totalCraft)
    return totalCraft
}

export function get_craft_tree_new(item, parent_value) {
    if (crafs_obj[item]["Req1"] === "none" 
        && crafs_obj[item]["Req2"] === "none" 
        && crafs_obj[item]["Req3"] === "none") {
        return
    }
    
    var children = []

    if(crafs_obj[item]["Req1"] !== "none"){
        children.push(get_craft_tree(crafs_obj[item]["Req1"], parent_value * crafs_obj[item]["Value1"]))
    }
    if(crafs_obj[item]["Req2"] !== "none"){
        children.push(get_craft_tree(crafs_obj[item]["Req2"], parent_value * crafs_obj[item]["Value2"]))
    }
    if(crafs_obj[item]["Req3"] !== "none"){
        children.push(get_craft_tree(crafs_obj[item]["Req3"], parent_value * crafs_obj[item]["Value3"]))
    }
    // console.log(children)
    return {
        name: item + "(" + parent_value + ")",
        textProps: {x: -25, y: 12},
        children
    }
}