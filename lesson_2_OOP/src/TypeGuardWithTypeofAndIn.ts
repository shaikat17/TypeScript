{
    // Type guard using typeof & in

    // typeof --> type guard
    type AlphaNumeric = string | number;

    const add = (param1: AlphaNumeric, param2: AlphaNumeric): string | number => {
        if(typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2;
        } else {
            return param1.toString() + param2.toString();
        }
    } 

    const result =  add(2, 6)

    console.log(result)

    // In guard
    type NormalUser = {
        name: string;
    }

    type AdminUser = {
        name: string;
        role: "Admin";
    }

    const getUser = (user: NormalUser | AdminUser) => {
        if('role' in user){
            // user.role
            return `My name is ${user.name} and my role is ${user.role}`
        } else {
            return `My name is ${user.name} and I have no role.`
        }
    }

    const normalUser: NormalUser = {
        name: 'Normal user'
    }
    
    const adminUser: AdminUser = {
        name: 'Admin user',
        role: "Admin"
    }

    console.log(getUser(adminUser))
    
    // 
}