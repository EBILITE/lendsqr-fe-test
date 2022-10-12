import {  AuditLogo, Decisions, FeesAndCharges, FeesAndPricing, Gurantors, Karma, LoanRequest, Loans, Org, Pref, Reports, SavingProduct, Savings, ServiceAmount, Services, Settlement, Transactions, User, WhiteList, } from "../Assests"
import {customerType} from './Types'
 export const customer: customerType[] = [
    {
        id: 1,
        name: 'Users',
        icon: User
    },
    {
        id: 2,
        name: 'Guarantor',
        icon: Gurantors
    },{
        id: 3,
        name: 'Loans',
        icon: Loans
    },{
        id: 4,
        name: 'Decision Models',
        icon: Decisions
    },{
        id: 5,
        name: 'Savings',
        icon: Savings
    },{
        id: 6,
        name: 'Loan Requests',
        icon: LoanRequest
    },{
        id: 7,
        name: 'Whitelist',
        icon: WhiteList
    },{
        id: 8,
        name: 'Karma',
        icon: Karma
    }
 ]


 export const business: customerType[]= [
    {
        id: 1,
        name: 'Organization',
        icon: Org
    },
    {
        id: 2,
        name: 'Loan Products',
        icon: Gurantors
    },{
        id: 3,
        name: 'Saving Products',
        icon: SavingProduct
    },{
        id: 4,
        name: 'Fees and Charges',
        icon: FeesAndCharges
    },{
        id: 5,
        name: 'Transactions',
        icon: Transactions
    },{
        id: 6,
        name: 'Services',
        icon: Services
    },{
        id: 7,
        name: 'Service Account',
        icon: ServiceAmount
    },{
        id: 8,
        name: 'Settlement',
        icon: Settlement
    },{
        id: 9,
        name: 'Reports',
        icon: Reports
    }
 ]


 export const setting: customerType[]= [
    {
        id: 1,
        name: 'Preferences',
        icon: Pref
    },
    {
        id: 2,
        name: 'Fees and Pricing',
        icon: FeesAndPricing
    },{
        id: 3,
        name: 'Audit Logs',
        icon: AuditLogo
    }
 ]




