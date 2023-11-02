{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }

    const student1: Student = {
        name: "Shaikat",
        age: 28,
        gender: 'male',
        contactNo: '12345678912',
        address: 'ctg'
    }

    const student2: Student = {
        name: "Anik",
        age: 28,
        gender: 'male',
        address: 'ctg'
    }

    type UserName = string
    type isAdmin = boolean

    const admin: isAdmin = true

    const userName: UserName = 'Rayhan'

    // Function

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2
}