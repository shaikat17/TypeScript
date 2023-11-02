{
    // ternary operator | optional chaining | nullish coalescing operator

    const age: number = 15;

    if(age >= 18) {
        console.log("Adult");
    } else {
        console.log("Not Adult")
    }

    const isAdult = age >= 18 ? 'Adult' : 'Not Adult';
    // console.log("🚀 ~ file: TernaryOptionalChainingNullishCoalescingOperator.ts:13 ~ isAdult:", isAdult)

    // nullish coalescing operator
    // null / undefined --> decision making

    const isAuthenticated = "";
    // const isAuthenticated = null;

    const result1 = isAuthenticated ?? 'Guest' ;
    const result2 = isAuthenticated ? isAuthenticated : "Guest"
    console.log("🚀 ~ file: TernaryOptionalChainingNullishCoalescingOperator.ts:22 ~ result2:", result2)
    console.log("🚀 ~ file: TernaryOptionalChainingNullishCoalescingOperator.ts:21 ~ result1:", result1)

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;
        };
    }

    const user: User = {
        name: "Shaikat",
        address: {
            city: "CTG",
            road: "XYZ",
            presentAddress: "CTG Somewhere"
        },
    }

    const permanentAddress = user?.address?.permanentAddress ?? "No permanent Address";
    console.log("🚀 ~ file: TernaryOptionalChainingNullishCoalescingOperator.ts:46 ~ permanentAddress:", permanentAddress)


 
}