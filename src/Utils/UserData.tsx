import { ActiveUser, User1, UserWithLoan, UserWithSavings } from "../Assests"
import { userType } from "./Types"

export const userData: userType[] = [
    {
        id: 1,
        name: 'USERS',
        num: '2,453',
        img: User1, 
    },
    {
        id: 2,
        name: 'ACTIVE USERS',
        num: '2,453',
        img: ActiveUser, 
    },
    {
        id: 3,
        name: 'USERS WITH LOAN',
        num: '12,453',
        img: UserWithLoan, 
    },
    {
        id: 4,
        name: 'USERS WITH SAVINGS',
        num: '102,453',
        img: UserWithSavings, 
    },
]