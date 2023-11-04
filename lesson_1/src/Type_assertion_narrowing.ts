{
    // Type assertion
    let anything: any;

    anything = "A simple string";
    

    // (anything as string).
    // (anything as number).

    const kgToGm = (value: string | number) : string | number | undefined => {
        if( typeof value === "string") {
            const convertedValue = parseFloat(value) * 1000;
            return convertedValue
        } 
        if( typeof value === "number"){
            return value * 1000
        }
    }

    const result1 = kgToGm('10') as number
    

 type CustomError = {
    message: string;
 }

    try {
        
    } catch (error) {
        console.log((error as CustomError).message)
    }


    // 
}