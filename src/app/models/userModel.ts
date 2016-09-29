export class userModel {
    username: string;
    password: string;
    firstName: string;
    lastname: string;
    email: string;
    mobileNo: string
    constructor(
        username: string,
        password: string,
        firstName: string,
        lastname: string,
        email: string,
        mobileNo: string
    ) {
        this.username = username;
        this.password = password;
        this.firstName = firstName;
        this.lastname = lastname;
        this.email = email;
        this.mobileNo = mobileNo;

    }

}