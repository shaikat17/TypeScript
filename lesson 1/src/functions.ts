// Normal Function
// Arrow Function

function add(num1: number, num2: number): number {
    return num1 + num2
}


const addArrow = (num1: number, num2: number): number => num1 + num2;


// object --> function --> method

const poorUser = {
    name: "Shaikat",
    balance: 0,
    addBalance(balance: number): string {
        return `My New Balance is: ${this.balance + balance}`;
    }
}

const arr: number[] = [1,2,3]

const newArray: number[] = arr.map((elm: number): number => elm*elm )