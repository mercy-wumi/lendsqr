//dispatch types 

// interface IActionInterface {
//     type: string;
// }

// interface IGetUsersInterface extends IActionInterface { 
//     payload: User[];
// }

// interface IGetUserInterface extends IActionInterface {
//    payload: User;
// }
// interface ISetUserIdInterface extends IActionInterface {
//    payload: string;
// }
// interface IProfileInterface extends IActionInterface {
//    payload: string;
// }

// type ActionTypes = IGetUsersInterface | IGetUserInterface | ISetUserIdInterface | IProfileInterface;

// types for useContext

export type Props = {
    children: React.ReactNode
}

// state types
export type UserType = {
    users: User[],
    user: User,
    userId: string,
    profileLogin: string,
}

export interface User {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: Profile;
  guarantor: Guarantor;
  accountBalance: string;
  accountNumber: string;
  socials: Socials;
  education: Education;
  id: string;
}
export interface Profile {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
}
export interface Guarantor {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
}
export interface Socials {
  facebook: string;
  instagram: string;
  twitter: string;
}
export interface Education {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome?: (string)[] | null;
  loanRepayment: string;
}

// card types

export type card = {
    card: Card
}
export interface Card {
    cardNum: string,
    cardName: string,
    cardIcon: string,
    iconColor: string
}

export type btn = {
    text: string,
}
