const items_json =  {
    "Baguette": { 
        "Dough": 2, 
        "Butter": 2, 
        "Wood": 2 
    },
    "Batter": { 
        "Flour": 5, 
        "Eggs": 3,
        "Butter": 2
    },
    "Blue_Steel": {
        "Steel": 5,
        "Energy": 10,
        "Uniforms": 1
     },
    "Bread": {
        "Flour": 4,
        "Milk": 1,
        "Salt": 1
     },
    "Brine": {
        "Water": 3
     },
    "Butter": { 
        "Milk": 2,
        "Salt": 2,
        "Sugar": 1
    },
    "Cabernet_Grapes": { 
        "Water": 2,
        "Wood": 1
    },
    "Cabernet_Sauvignon": { 
        "Cabernet_Grapes": 5,
        "Wine_Bottle": 1,
        "Oak_Barrel": 1
    },
    "Cake": {
        "Batter": 3,
        "Sugar": 10,
        "Energy": 3
     },
    "Candy_Canes": {
        "Peppermint": 5,
        "Sugar": 3,
        "Energy": 5
     },
    "Ceramic_Bowl": { 
        "Clay_Lump": 2,
        "Water_Drum": 1,
        "Energy": 2
    },
    "Chardonnay": {
        "Chardonnay_Grapes": 3,
        "Wine_Bottle": 1,
        "Oak_Barrel": 1
     },
    "Chardonnay_Grapes": {
        "Water": 2,
        "Wood": 1
     },
    "Chocolate_Bar": {
        "Cocoa": 3,
        "Sugar": 2,
        "Milk": 1
     },
    "Chocolate_Covered_Strawberries": { 
        "Strawberries": 6,
        "Chocolate_Bar": 2,
        "Energy": 2
    },
    "Chromium": { 
        "Lumber": 1,
        "Energy": 3,
        "Water_Drum": 2
    },
    "Clay_Lump": { 
        "Water": 3
    },
    "Cocoa": { 
        "Water": 2,
        "Wood": 1
    },
    "Cotton": { 
        "Water": 4
    },
    "Cotton_Yarn": { 
        "Cotton": 5,
        "Lumber": 1,
        "Energy": 1,
    },
    "Crude_Oil": null,
    "Decorated_Cake": {
        "Cake": 1,
        "Chocolate_Bar": 1,
        "Candy_Canes": 2
     },
    "Dough": {
        "Flour": 5,
        "Eggs": 1,
        "Butter": 1
     },
    "Eggs": {
        "Feed": 3,
        "Wood": 1,
        "Water": 1
     },
    "Energy": {
        "Crude_Oil": 2,
        "Water_Drum": 1
     },
    "Fabric_Box": {
        "Wooden_Box": 1,
        "Uniforms": 3,
        "Wax": 1
     },
    "Fancy_Cake": {
        "Cake": 1,
        "Chocolate_Bar": 3,
        "Strawberries": 2
     },
    "Feed": { 
        "Wheat": 2
    },
    "Flour": {
        "Wheat": 2,
        "Wood": 1
     },
    "Gasoline": {
        "Petroleum": 1,
        "Water_Drum": 2,
        "Energy": 6
     },
    "Honey": { 
        "Nectar": 3,
        "Lumber": 1,
        "Ceramic_Bowl": 1
    },
    "Honeycomb": {
        "Nectar": 6,
        "Lumber": 2,
        "Ceramic_Bowl": 1
     },
    "Iron": {
        "Lumber": 1,
        "Energy": 1,
        "Water_Drum": 1
     },
    "Jam": {
        "Strawberries": 10,
        "Sugar": 3,
        "Water_Drum": 1
     },
    "Jet_Fuel": { 
        "Petroleum": 3,
        "Water_Drum": 2,
        "Energy": 3
    },
    "Limestone": { 
        "Lumber": 1,
        "Energy": 3,
        "Water_Drum": 2
    },
    "Lumber": {
        "Wood": 5,
        "Energy": 2,
        "Water_Drum": 1
     },
    "Milk": {
        "Feed": 8,
        "Wood": 1,
        "Water": 3
     },
    "Nectar": null,
    "Oak_Barrel": {
        "Oak_Wood": 3,
        "Iron": 1,
        "Energy": 1
     },
    "Oak_Wood": { 
        "Water": 5
    },
    "Peppermint": {
        "Water": 3,
        "Wood": 1
    },
    "Petroleum": {
        "Crude_Oil": 2,
        "Water_Drum": 1,
        "Energy": 2
     },
    "Pinot_Noir": {
        "Pinot_Noir_Grapes": 6,
        "Wine_Bottle": 1,
        "Oak_Barrel": 1
     },
    "Pinot_Noir_Grapes": { 
        "Water": 2,
        "Wood": 1
    },
    "Pumpkin": { 
        "Water": 10,
        "Wood": 1
    },
    "Pumpkin_Pie": { 
        "Pumpkin": 6,
        "Sugar": 10,
        "Eggs": 5
    },
    "Salt": {
        "Brine": 4,
        "Wood": 2
     },
    "Sangria": {
        "Cabernet_Sauvignon": 1,
        "Sugar": 2,
        "Strawberries": 2
     },
    "Silica": { 
        "Energy": 2
    },
    "Steel": {
        "Iron": 10,
        "Energy": 5,
        "Water_Drum": 5
     },
    "Strawberries": { 
        "Water": 2,
        "Wood": 1
    },
    "Sugar": {
        "Sugarcane": 6,
        "Wood": 2
     },
    "Sugarcane": { 
        "Water": 8
    },
    "Uniforms": { 
        "Cotton_Yarn": 3,
        "Wool_Yarn": 1,
        "Energy": 3
    },
    "Water": null,
    "Water_Drum": {
        "Water": 3
     },
    "Wax": { 
        "Nectar": 3,
        "Lumber": 1,
        "Ceramic_Bowl": 1
    },
    "Wheat": { 
        "Water": 3
     },
    "Wine_Bottle": { 
        "Silica": 3,
        "Chromium": 1,
        "Limestone": 1
    },
    "Wood": {
        "Water": 5
     },
    "Wooden_Box": { 
        "Lumber": 1,
        "Wood": 2,
        "Energy": 2
    },
    "Wool": { 
        "Feed": 8,
        "Wood": 1,
        "Water": 5
    },
    "Wool_Yarn": { 
        "Wool": 5,
        "Lumber": 1,
        "Energy": 1,
    }
}

// data = {
    //     name: 'Parent',
    //     children: [{
    //       name: 'Child One'
    //     }, {
    //       name: 'Child Two'
    //     }]
    //   };

export function get_all_items() {
    var items = []
    Object.keys(items_json).forEach(function(key){
        items.push({'label': key})
    })
    return items
}

export function get_children(item, parent_value) {
    if (items_json[item] === null)
        return

    var children = []
    Object.entries(items_json[item]).forEach(function([key, child_value]){
        var children_value = get_children(key, parent_value * child_value)
        if( children_value != undefined ){
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