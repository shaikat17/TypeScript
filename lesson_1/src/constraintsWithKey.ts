{
    // Constraints with key - Generics

    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    }

    type Owner = "bike" | "car" | "ship" //manually

    type Owner2 = keyof Vehicle

    const person1: Owner = "car"

    const person2: Owner2 = "bike"

    const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return obj[key]
    }

    const user = {
        name: "Shaikat",
        age: 24,
        address: 'ctg'
    }

    const result = getPropertyValue(user, "name")

    
    console.log(result)
    

    // 
}