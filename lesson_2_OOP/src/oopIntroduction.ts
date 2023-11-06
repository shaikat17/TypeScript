{
    // Introduction to OOP - Object and Class

    class Animal {
        
            // public name: string;    // By  default public
        // public species: string;
        // public sound: string;

        
        // constructor( name: string,  species: string,  sound: string) {
        //     // this.name = name;
        //     // this.species = species;
        //     // this.sound = sound;
        // }

        // parameter properties
        constructor(public name: string, public species: string, public sound: string) {}

        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`)
        }
    }

    const dog = new Animal('German Shepard', 'Dog', 'Ghew Ghew')

    const cat = new Animal("White Cat", 'cat', 'Mew Mew')

    cat.makeSound()

    // 
}