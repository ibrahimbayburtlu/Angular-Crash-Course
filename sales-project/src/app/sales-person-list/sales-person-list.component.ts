import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list.boostrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

  // create an array of objects

  salesPersonList: SalesPerson[] = [
    new SalesPerson("Anup","Kumar","anup.kumar@gmail.com",50000),
    new SalesPerson("John","Doe","john.doe@gmail.com",40000),
    new SalesPerson("Claire","Murhpy","claire.murhpy@gmail.com",90000),
    new SalesPerson("Mai","Truong","mai.truong@gmail.com",60000),
  ];
  
  constructor() { }

  ngOnInit(): void {
  }

}
