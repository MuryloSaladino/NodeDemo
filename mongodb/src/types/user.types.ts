export type TUserCreation = {
    username: string;
    password: string;
    details: TUserDetails;
}

export type TUserDetails = {
    firstName: string;
    lastName: string;
}