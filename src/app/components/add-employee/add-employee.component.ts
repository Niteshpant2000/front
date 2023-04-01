import { Time } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { Cashier } from 'src/app/pojos/Cashier';
import { Inventory } from 'src/app/pojos/Inventory';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit{
  
  form !: FormGroup;
  title !: string;

  id !: string;
  name !: string;
  age !: number;
  email !: string;
  phoneNumber !: number;
  workTimingsFrom !: string;
  workTimingsTo !: string;
  workTimings !: string;
  salary!: number;
  designation!:string;
  

  constructor(
    private fb : FormBuilder,private restService:RestService
  ){}

  ngOnInit(): void {
    this.form = this.fb.group({
      id: ['', []],
      name : ['', [Validators.required]],
      age : ['', [Validators.required]],
      email : ['' , [Validators.required]],
      phoneNumber : ['',[Validators.required] ],
      workTimingsFrom : ['',[Validators.required] ],
      workTimingsTo : ['',[Validators.required] ],
      salary : ['', [Validators.required]],
      designation : ['', [Validators.required]]
    })
  }
 
  cancelEmployee(){
    this.id = '';
    this.name = '';
    this.age = 0;
    this.email = '';
    this.phoneNumber = 0;
    this.workTimings = '';
    this.salary = 0;
    this.designation = '';
  }

  addEmployee(){
    this.workTimings=this.workTimingsFrom+"-"+this.workTimingsTo
    let employee:Cashier=new Cashier(this.id,this.name,this.age,this.email,this.phoneNumber,this.workTimings,this.salary,this.designation);
    this.restService.addEmployee(employee).subscribe()
    // stringify workTimings = workTimingFrom + " to " + workTimingsTo;
  }

}
