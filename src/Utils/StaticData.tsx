import {
  AuditLogo,
  Decisions,
  FeesAndCharges,
  FeesAndPricing,
  Gurantors,
  Karma,
  LoanRequest,
  Loans,
  Org,
  Pref,
  Reports,
  SavingProduct,
  Savings,
  ServiceAmount,
  Services,
  Settlement,
  Transactions,
  User,
  WhiteList,
} from "../Assests";
import { customerType } from "./Types";
export const customer: customerType[] = [
  {
    id: 1,
    name: "Users",
    icon: User,
    link: "/Dashboard",
  },
  {
    id: 2,
    name: "Guarantor",
    icon: Gurantors,
    link: "*",
  },
  {
    id: 3,
    name: "Loans",
    icon: Loans,
    link: "*",
  },
  {
    id: 4,
    name: "Decision Models",
    icon: Decisions,
    link: "*",
  },
  {
    id: 5,
    name: "Savings",
    icon: Savings,
    link: "*",
  },
  {
    id: 6,
    name: "Loan Requests",
    icon: LoanRequest,
    link: "*",
  },
  {
    id: 7,
    name: "Whitelist",
    icon: WhiteList,
    link: "*",
  },
  {
    id: 8,
    name: "Karma",
    icon: Karma,
    link: "*",
  },
];

export const business: customerType[] = [
  {
    id: 1,
    name: "Organization",
    icon: Org,
    link: "*",
  },
  {
    id: 2,
    name: "Loan Products",
    icon: Gurantors,
    link: "*",
  },
  {
    id: 3,
    name: "Saving Products",
    icon: SavingProduct,
    link: "*",
  },
  {
    id: 4,
    name: "Fees and Charges",
    icon: FeesAndCharges,
    link: "*",
  },
  {
    id: 5,
    name: "Transactions",
    icon: Transactions,
    link: "*",
  },
  {
    id: 6,
    name: "Services",
    icon: Services,
    link: "*",
  },
  {
    id: 7,
    name: "Service Account",
    icon: ServiceAmount,
    link: "*",
  },
  {
    id: 8,
    name: "Settlement",
    icon: Settlement,
    link: "*",
  },
  {
    id: 9,
    name: "Reports",
    icon: Reports,
    link: "*",
  },
];

export const setting: customerType[] = [
  {
    id: 1,
    name: "Preferences",
    icon: Pref,
    link: "*",
  },
  {
    id: 2,
    name: "Fees and Pricing",
    icon: FeesAndPricing,
    link: "*",
  },
  {
    id: 3,
    name: "Audit Logs",
    icon: AuditLogo,
    link: "*",
  },
];
