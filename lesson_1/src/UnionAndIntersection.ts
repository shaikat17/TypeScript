{
    // Union and Intersection

    // Union
    type Developer = "Junior Developer" | "Senior Developer";

    const developerStatus: Developer = "Junior Developer";

    type User = {
        name: string;
        email: string;
        gender: "male" | "female";
    }

    const user1: User = {
        name: "Shaikat",
        email: "shaikatpal56@gmail.com",
        gender: "male"
    }

    // Intersection

    type FrontEndDeveloper = {
        skills: string[];
        designation1: "Frontend Developer";
    }

    type BackEndDeveloper = {
        skills: string[];
        designation2: "Backend Developer";
    }

    type FullStackDeveloper = FrontEndDeveloper & BackEndDeveloper;

    const fullStackDeveloper: FullStackDeveloper = {
        skills: ['HTML', 'CSS', 'Express'],
        designation1: "Frontend Developer",
        designation2: "Backend Developer",
    }


}