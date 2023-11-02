{
    // nullable types

    const searchName = (value: string | null) => {
        if(value) {
            console.log("Searching")
        } else {
            console.log("There is nothing to search.")
        }
    }

    searchName(null)

    // unknown
    const getSpeedInMeterPerSecond = (value: unknown) => {
        if(typeof value === 'number') {
            const convertedSpeed = (value*1000)/3600
            console.log("🚀 ~ file: nullableTypes.ts:18 ~ getSpeedInMeterPerSecond ~ convertedSpeed:", convertedSpeed)
        }

        else if(typeof value === 'string') {
            const [newValue, unit] = value.split(' ')
            const convertedSpeed = (newValue*1000)/3600
            console.log("🚀 ~ file: nullableTypes.ts:24 ~ getSpeedInMeterPerSecond ~ convertedSpeed:", convertedSpeed)
            
        } else {
            console.log("Wrong Input.")
        }
    }

    getSpeedInMeterPerSecond('20 kmh^-1')

    // never
    function throwError(msg: string){
        throw new Error(msg)
    }

    throwError("By mistake")
}