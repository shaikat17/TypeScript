{

    // Spread operator
    // destructuring
    // rest operator

    // learn spread operator
    const bros1: string[] = ['Anik', 'Tonmoy']
    const bros2: string[] = ['Atik', 'Toni', 'Rubel']

    bros1.push(...bros2)


    const mentors1 = {
        typescript: "Anik",
        redux: 'Atik'
    }

    const mentors2 = {
        prisma: 'Roni',
        next: 'Asif'
    }

    const mentorList = {
        ...mentors1,
        ...mentors2
    }

    // learn rest operator
    const greetFriends = ( ...friends: string[]) => {
        friends.forEach((friend: string) => console.log(`Hi ${friend}`))
    }

    greetFriends("Abul", "Kabul", "Babul")

}