{
    // interface

    type User1 = {
        name: string;
        age: number;
    }

    const user1: User1 = {
        name: "Shaikat",
        age: 24
    }

    interface User2 {
        name: string;
        age: number
    }

    const user2: User2 = {
        name: "Masud",
        age: 24
    }


    type UserWithRole1 = User1 & { role: string }

    interface UserWithRole2 extends User2 {
        role: string
    }


    const user3: UserWithRole1 = {
        name: "Amit",
        age: 32,
        role: 'CEO',
    }

    const user4: UserWithRole2 = {
        name: "Nayan",
        age: 32,
        role: 'manager',
    }

    // js --> object, array --> object, function --> object
    type Roll1 = number[];

    interface Roll2 {
        [index: number]: number
    }

    const rollNumber1: Roll1 = [1, 2, 3]

    type Add = (num1: number, num2: number) => number

    interface Add2 { (num1: number, num2: number) : number }

    const add: Add = (num1, num2) => num1 + num2;
    // 
}