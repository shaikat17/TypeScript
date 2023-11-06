{
    // Inheritance

    class Parent {
        constructor(public name: string, public age: number, public address: string){}

        getSleep(numberOfHours: number){
            console.log(`${this.name} will sleep for ${numberOfHours} hours.`)
        }
    }

    class Student extends Parent {
        constructor(public name: string, public age: number, public address: string){
            super(name, age, address)
        }
    }

    class Teacher extends Parent {
        constructor(public name: string, public age: number, public address: string, public designation: string){
            super(name, age, address)
        }


        takeClass(numberOfClass: number){
            console.log(`${this.designation} ${this.name} will take ${numberOfClass} class.`)
        }
    }

    const student1 = new Student("Shaikat", 24, "CTG")

    student1.getSleep(8)

    const teacher1 = new Teacher("Alam", 50, "CTG", "Senior Teacher")

    teacher1.takeClass(10)

    // 
}