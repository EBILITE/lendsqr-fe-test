import {
  ActiveUser,
  User1,
  UserWithLoan,
  UserWithSavings,
  Lines,
} from "../Assests";
import { userType, userDetail } from "./Types";

export const userData: userType[] = [
  {
    id: 1,
    name: "USERS",
    num: "2,453",
    img: User1,
  },
  {
    id: 2,
    name: "ACTIVE USERS",
    num: "2,453",
    img: ActiveUser,
  },
  {
    id: 3,
    name: "USERS WITH LOAN",
    num: "12,453",
    img: UserWithLoan,
  },
  {
    id: 4,
    name: "USERS WITH SAVINGS",
    num: "102,453",
    img: UserWithSavings,
  },
];

export const userHeadline: userType[] = [
  {
    id: 1,
    name: "ORGANIZATION",
    num: "2,453",
    img: Lines,
  },
  {
    id: 2,
    name: "USERNAME",
    num: "2,453",
    img: Lines,
  },
  {
    id: 3,
    name: "EMAIL",
    num: "12,453",
    img: Lines,
  },
  {
    id: 4,
    name: "PHONE_NUMBER",
    num: "102,453",
    img: Lines,
  },
  {
    id: 5,
    name: "DATE_JOINED",
    num: "102,453",
    img: Lines,
  },
  {
    id: 6,
    name: "STATUS",
    num: "102,453",
    img: Lines,
  },
];

export const userDetails: userDetail[] = [
  {
    id: 1,
    name: "General Details",
  },
  {
    id: 2,
    name: "Documents",
  },
  {
    id: 3,
    name: "Bank Details",
  },
  {
    id: 4,
    name: "Loans"
  },
];
