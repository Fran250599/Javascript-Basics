// Create a JSON object
var myJSON = {
    name: 'John Doe',
    age: 30
};

// Create a JSON array
var myJSONArray = [
    {
        name: 'John Doe',
        age: 30
    },
    {
        name: 'Jane Doe',
        age: 25
    }
];

// Create a JSON string
var myJSONString = JSON.stringify(myJSON);

// Create a JSON object from a JSON string
var myJSONFromString = JSON.parse(myJSONString);

