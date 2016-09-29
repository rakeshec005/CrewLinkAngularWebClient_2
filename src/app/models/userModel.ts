export class userModel {
    username: string;
    password: string;
    firstName: string;
    lastname: string;
    email: string;
    mobileNo: string;
    roleCode:string;
    constructor(
        username: string,
        password: string,
        firstName: string,
        lastname: string,
        email: string,
        mobileNo: string,
        roleCode:string
    ) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.mobileNo = mobileNo;
        this.roleCode = roleCode;

    }

}