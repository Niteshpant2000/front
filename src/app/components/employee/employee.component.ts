import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Cashier } from 'src/app/pojos/Cashier';
import { RestService } from 'src/app/services/rest.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit{
  employeeId !: string;

  public addEmployeeForm !: FormGroup;

  cashierObj!: Cashier;

  id !: string;
  name !: string;
  age !: number;
  email !: string;
  phoneNumber !:number;
  workTimings !: Date|string;
  salary !: number;
  designation !: string;
  
  constructor(private formBuilder : FormBuilder,private restService:RestService){}

  ngOnInit(){
    this.addEmployeeForm = this.formBuilder.group({
      id: ['', []],
      name : ['', [Validators.required]],
      age : ['' , [Validators.required]],
      email : ['',[Validators.required] ],
      phoneNumber: ['',Validators.required],
      workTimings : ['', [Validators.required]],
      salary : ['', [Validators.required]],
      designation : ['', [Validators.required]],
    })

  }

  // create new employee
  addEmployee(){
   this.workTimings= this.workTimings.toString();
    this.cashierObj = new Cashier(this.id, this.name, this.age, this.email, this.phoneNumber,this.workTimings, this.salary, this.designation);
    console.log(this.cashierObj);
    
    this.restService.addEmployee(this.cashierObj).subscribe(data => {
      console.log(data);
    },
    err => console.log(err)
    );
  }


  employeeList !: Cashier[];
  
  // get all employees
  getEmployee(){
    this.restService.getEmployee().subscribe(
      data =>{  
        this.employeeList = data;
      }, err => console.log(err)
    )
  }

  fetchId !: string;
  // get employee by id
  getEmployeeByid(fetchId: number){
    this.restService.getEmployeeById(fetchId).subscribe(
      data => {
        this.employeeList = data;
      }, err => console.log(err)
    )
  }

  // remove an Emplpoyee
  deleteEmployee(id: number){
    this.restService.deleteEmployeee(id).subscribe(data => {
      this.employeeList = data;
    }, err =>
    console.log(err)
    )
  }
  
}
