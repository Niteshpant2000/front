export class Cashier{
    id !: string;
    name !: string;
    age !: number;
    email !: string;
    phoneNumber!:number;
    workTimings !: string;
    salary !: number;
    designation !: string;

    constructor(
        id: string, 
        name: string,
        age : number,
        email : string,
        phoneNumber:number,
        workTimings : string,
        salary : number,
        designation : string
    ){
        this.id = id;
		this.name = name;
		this.age = age;
		this.email = email;
        this.phoneNumber=phoneNumber;
		this.workTimings = workTimings;
		this.salary = salary;
		this.designation = designation;
    }
}