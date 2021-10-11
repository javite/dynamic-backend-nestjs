export interface IUser {
    id: number;
    firstName: string;
    lastName: string;
    user: string;
    password: string;
    token: string;
    level: number;
    groupLevel: number;
    passExpirationDate: Date;
    active: boolean;
    erased: boolean;
    deletedAt: Date;
    createdAt:Date;
    updatedAt:Date;
}
