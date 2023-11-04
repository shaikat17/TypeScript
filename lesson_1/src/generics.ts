{
    // generic type

    // type GenericArray = Array<number>
    type GenericArray<T> = Array<T>

    // const rollNumbers: number[] = [6,8,7,4]
    // const rollNumbers: Array<number> = [6,8,7,4]
    const rollNumbers: GenericArray<number> = [6,8,7,4]

    // const mentors: string[] = ['Mr. X', 'Mr. Y', 'Anik']
    // const mentors: Array<string> = ['Mr. X', 'Mr. Y', 'Anik']
    const mentors: GenericArray<string> = ['Mr. X', 'Mr. Y', 'Anik']

    // const boolArray: boolean[] = [true, false, true]
    const boolArray: GenericArray<boolean> = [true, false, true]

    const user: GenericArray<{
        name: string;
        age: number;
    }> = [
        {
            name: "Shaikat",
            age: 44
        },
        {
            name: "Anik",
            age: 45
        }
    ]

    // tuple
     type GenericTuple<X,Y> = [X,Y]

    const str: GenericTuple<string, string> = ['x', 'y']


    // 
}