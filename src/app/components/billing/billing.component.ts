import { Component, OnInit, ChangeDetectionStrategy,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Inventory } from 'src/app/pojos/Inventory';
import { Transaction } from 'src/app/pojos/Transaction';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css']
})
export class BillingComponent implements OnInit{
  show!:boolean;
  products!:Inventory[];    // new bill for user
  prod!:Inventory[];        // all inventory
  grandTotal!:number;
  transaction!:Transaction;
  constructor(
    private fb : FormBuilder,private restService:RestService
  ){
     this.restService.getAllInventory().subscribe(product=>{this.prod=product as Inventory[]})
    this.products=[];
    this.show=true;
    this.grandTotal=0;
  
    
  }
  

  ngOnInit(): void {
 
  }
  remove(product:Inventory){
    for(let index in this.products){
      
      if(this.products[index].id==product.id){
        
        let quantity=this.products[index].quantity;
        this.products[index].quantity-=1;
        product.quantity+=1;
        this.grandTotal-=product.cost;
        if(this.products[index].quantity==0){
          this.products.splice(parseInt(index),1);
          break;
        }
    }
  }
  }

  addToBilling(product:Inventory){
    
    for(let index in this.products){
        if(this.products[index].id==product.id){
          product.quantity-=1;
          let quantity=this.products[index].quantity;
          this.products[index].quantity+=1;
          this.show=false;
          this.grandTotal+=product.cost;
          break;
      }
    }
    if(this.show==true){
      let newProduct:Inventory=new Inventory(product.id,product.name,product.description,product.cost,product.rating,product.manufacturer,product.discount,1);
      this.products.push(newProduct);
      product.quantity-=1;
      this.grandTotal+=product.cost;
    }

    this.show=true;
  }

  addTransactionFunc(){
    let productDetails:string = this.products.toString();
    let transaction:Transaction = new Transaction("testString","custID","12","productDetail",this.grandTotal,"UPI");
    this.restService.addTransaction(transaction).subscribe();
  }

  pushToTransaction(){
    console.log("enter");
    
    // add to transaction table
    this.addTransactionFunc();

    console.log("exit");

    // implementing print feature
    let printContents = document.querySelector('printable') as HTMLElement;
    let originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents.innerHTML;
    window.print();
    document.body.innerHTML = originalContents;
  }
}