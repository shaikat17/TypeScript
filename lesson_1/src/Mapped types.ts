{
    // Mapped types

    const arrOfNumbers: number[] = [1,4,5]

    const arrOfStrings: string[] = ['1', '4', '5']

    const arrOfStringFromNumber: string[] = arrOfNumbers.map(num => num.toString())

    console.log(arrOfStringFromNumber)

    type AreaNumber = {
        height: number;
        width: number;
    }

    // type AreaString = {
    //     height: string;
    //     width: string;
    // }

    type AreaStringFromNumber = {
        [key in keyof AreaNumber]: string
    }

    type Height = AreaNumber["height"]

    type AreaString<T> = {
        [key in keyof T]: T[key];
      };
    
      const area1: AreaString<{ height: string; width: number }> = {
        height: "100",
        width: 50,
      };

    // 
}