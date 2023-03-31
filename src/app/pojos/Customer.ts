export class Customer{
    id !: string;
    name !: string;
    phoneNumber!:number;
    email !: string;
    constructor(
        id: string, 
        name: string,
        phoneNumber:number,
        email : string,
    ){
        this.id = id;
		this.name = name;
        this.phoneNumber=phoneNumber;
		this.email = email;

    }
}