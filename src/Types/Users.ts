export type UserApiResponseType = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate?: Date;
  profile?: Profile;
  guarantor?: {
    firstName: string;
    lastName: string;
    phoneNumber: string;
    gender: string;
    address: string;
  };
  accountBalance?: number;
  accountNumber?: string;
  socials?: {
    facebook: string;
    instagram: string;
    twitter: string;
  };
  education?: Education;
  id?: string;
};

export type Profile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

export type Education = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: Array<number>;
  loanRepayment: number;
};
