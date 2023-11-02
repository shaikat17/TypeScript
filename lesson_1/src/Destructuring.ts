{
    // Destructuring

const user = {
    id: 245,
    name: {
        firstName: "Shaikat",
        middleName: "Chandra",
        lastName: "Paul"
    },
    contactNo: "12345678912",
    address: "Jani na"
};

const { contactNo, name: { middleName } } = user;

// Array
const myFriends = ['Anik', 'Adif', 'Hridoy', 'Radif', 'Rahul']

const [a, b, bestFrind, ...rest] = myFriends
const [, , bestFrind2] = myFriends

}