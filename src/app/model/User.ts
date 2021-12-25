// export class User{
// Name:string="";
// Email:string="";
// PhoneNumber:string="";
// }
export class User{
    name:string="";
    email:string="";
    phoneNo:string="";
}

export class UserDTO {
    user: User;
    constructor() {
       this.user = new User();
    }
 }