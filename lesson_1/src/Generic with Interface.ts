{
    // Generic with interface

    interface User<T>  {
        name: string;
        age: number;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        };
        smartWatch: T;
    }

    interface PoorUser {
        brand: string;
        model: string;
    }

    const poorUser: User<PoorUser> = {
        name: "Shaikat",
        age: 24,
        computer: {
            brand: "ASUS",
            model: "X441S",
            releaseYear: 2022,
        },
        smartWatch: {
            brand: "Xiaomi",
            model: "Redmi 6"
        }
    }

    type RichUser = {
            brand: string;
            model: string;
            display: string;
            heartRate: boolean;
        }

    const richUser: User<RichUser> = {
        name: "Shaikat Rich",
        age: 24,
        computer: {
            brand: "HP",
            model: "X441S",
            releaseYear: 2022,
        },
        smartWatch: {
            brand: "Apple",
            model: "Apple 6",
            display: "OLED",
            heartRate: true,
        }
    }

    // 
}