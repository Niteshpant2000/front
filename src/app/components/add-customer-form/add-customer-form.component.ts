import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Customer } from 'src/app/pojos/Customer';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-customer-form',
  templateUrl: './add-customer-form.component.html',
  styleUrls: ['./add-customer-form.component.css']
})
export class AddCustomerFormComponent implements OnInit{
  form !: FormGroup;
  title !: string;
  id!:string;
  name !: string;
  phoneNumber !: number;
  email !: string;
  constructor(
    private fb : FormBuilder,private restService:RestService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', []],
      name : ['', [Validators.required]],
      phoneNumber : ['',[Validators.required] ],
      email : ['' , [Validators.required]],
    })
  }

  addCustomer(){
    let customer:Customer=new Customer(this.id,this.name,this.phoneNumber,this.email);
    this.restService.addCustomer(customer).subscribe()
    
  }

  cancelCustomer(){
    this.id = '';
    this.name = '';
    this.phoneNumber = 0;
    this.email = '';
  }
}
