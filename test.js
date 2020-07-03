// im in here


let test = {
    first_name: 'Lan',
    last_name: 'ng'
}

test["first_name"]
test.first_name


delete test.first_name
delete test["first_name"]


const updatedComment = {
    id: '1', 
    text: 'add code examples, please' 
};

const data = [
    {
      animal: "dog",
      age: 7
    },
    {
      animal: "cat",
      age: 4
    }
]

let test2 = {
    type: 'abc',
    age: 8,
    getName: () => {}
}

delete test2["animal"]

workoutSettings is an {}

let workoutSettings = {
    1: {},
    2: {},
    3: {
        key: '3',
        identifier
    },
}

1,2,3,4
deleteItem(deleteKey) {
    let cloneData = { ...workoutSettings };

    delete cloneData[deleteKey];

    setWorkoutSettings(cloneData);
};
