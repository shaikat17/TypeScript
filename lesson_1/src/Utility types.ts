{
    // Utility types

    // Pic Type
    type Person = {
        name: string;
        age: number;
        email?: string;
        contactNo: string;
    }

    type Name = Pick<Person, 'name'>
    type NameAge = Pick<Person, 'name' | 'age'>


    // Omit Type
    type ContactInfo =  Omit<Person, 'name' | 'age'>

    // Require Type
    type PersonRequired = Required<Person>

    // Partial Type
    type PersonPartial = Partial<Person>

    // ReadOnly Type
    type PersonReadOnly = Readonly<Person>

    const person1: PersonReadOnly = {
        name: "Shaikat",
        age: 200,
        contactNo: "123"
    }

    // person1.name = "Mr. Y" //can't do that because of read only

    // Record type
    // type Myobj = {
    //     a: string;
    //     b: string;
    // }

    type Myobj = Record<string,string>

    const EmptyObj: Record<string, unknown> = {};

    const obj1: Myobj = {
        a: "aa",
        b: 'bb',
        c: 'cc'
    }


    // 
}