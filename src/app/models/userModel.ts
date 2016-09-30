export class userModel {
    userName: string;
    password: string;
    firstName: string;
    lastname: string;
    email: string;
    mobileNo: string;
    roleCode:string;
    address:string;
    city:string;
    userActive:boolean;
    constructor(
        userName: string,
        password: string,
        firstName: string,
        lastname: string,
        email: string,
        mobileNo: string,
        roleCode:string,
        address:string,
        city:string,
        userActive:boolean
    ) {
        this.userName = userName;
        this.password = password;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.mobileNo = mobileNo;
        this.roleCode = roleCode;
        this.address = address;
        this.city = city;
        this.userActive = userActive;

    }

}