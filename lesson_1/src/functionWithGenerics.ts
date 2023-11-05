{
    // function with generics

    const createArray = (param: string): string[] => {
        return [param]
    }

    const res1 = createArray('Bangladesh')

    const createArrayWithGenerics = <T>(param: T): T[] => {
        return [param]
    }

    const resGenerics = createArrayWithGenerics<string>("Bangladesh")

    type User = {
        name: string;
        age: number;
    }

    const resGenericsObject = <User>({
        name: "Shaikat",
        age: 24
    })

    
    const addCourseToStudent = <T>(student: T) => {
        const course = "Complete JavaScript";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({name: "Shaikat", email: "shaikatpal56@gmail.com", watch: "apple"})

    console.log(student1)

    // 
}