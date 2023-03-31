import { Component, OnInit } from '@angular/core';
import { RestService } from 'src/app/services/rest.service';
import { Inventory } from '../pojos/Inventory';
@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  
  

  constructor(
    private restService:RestService
  ){
    
  }
  inventory:Inventory[]=[];
  id:string='';

  ngOnInit(): void {

  }
  displayProduct(){

  }
  
 

}
