{
    // Asynchronous typescript

    const createPromise = (): Promise<string> => {
        return new Promise<string>((resolve, reject) => {
            const data: string = "Something"
            if(data) {
                resolve(data)
            } else {
                reject("Failed to load data.")
            }
        })
    }

    // calling create promise function
    const showData =async () => {
        const data = await createPromise();
        console.log(data)
    }

    // showData()

    type Todo = {
        id: number;
        userId: number;
        title: string;
        completed: boolean;
    }

    const getToDos = async (): Promise<Todo> => {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')

        const data = await response.json()
        console.log(data)
        return  data
    }

    getToDos()

    // 
}