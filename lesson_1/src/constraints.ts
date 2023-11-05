{
    // constraint

    const addCourseToStudent = <T extends {id: number; name: string; email: string;}>(student: T) => {
        const course = "Complete JavaScript";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({id: 22, name: "Shaikat", email: "shaikatpal56@gmail.com", watch: "apple"})

    // const studentEx = addCourseToStudent({something: nai})

    const student2 = addCourseToStudent({id: 33, name: "Anik", email: "anik@gmail.com", watch: "apple", developer: true})

    console.log(student1)
    console.log(student2)

    // 
}