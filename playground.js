let obj = new Map();
// syntax verbose wayobj = bj = new Mabj = new Map()_;bj = new Map()_;

let testObj = {
    first_name: 'lan',
    last_name: {
        prefix: "n",
        postfix: "g"
    }
}

Object.keys(testObj)      > ["first_name", "last_name"];
Object.values(testObj)    > ["lan", { prefix: 'n', postfix: 'g'}]

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_objects/Object/values


let testObject = {
    "1": { key: 1, name: 'yoga'},
    "2": { key: 3, name: 'jump rope'},
    "3": { key: 2, name: 'meditation'},
    "4": { key: 4, name: 'abs'},
    "number 5": { key: 4, name: 'back workout'}
}


testObject.1     > { key: 1, name: 'yoga'}
testObject['1']  > { key: 1, name: 'yoga'}

testObject.number 5    !> { key: 4, name: 'back workout'}
testObject["number 5"]  > { key: 4, name: 'back workout'}


let workoutData = testObject["4"];
let cloneData = {...testObject};

cloneData[workoutData.key] = {
    ...workoutData,
    name: "shoulder"
}



let testArray = [
    { key: 1, name: 'yoga'},
    { key: 3, name: 'jump rope'},
    { key: 2, name: 'meditation'},
    { key: 4, name: 'abs'}
]
testArray[1];