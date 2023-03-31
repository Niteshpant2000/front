export class Transaction{
    transactionId!:string;
    customerId!:string;
    dateTime!:string;
    productDetails!:string;
    totalAmount!:number;
    paymentType!:string;
    
    constructor(tId:string,custId:string,date:string,prodDetails:string,totalAmount:number,paymentType:string){
        this.transactionId=tId;
        this.customerId=custId;
        this.dateTime=date;
        this.productDetails=prodDetails;
        this.totalAmount=totalAmount;
        this.paymentType=paymentType;
    }
    
}