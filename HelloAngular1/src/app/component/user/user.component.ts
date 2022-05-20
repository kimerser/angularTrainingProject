import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  public name:string="";
  public age:number= 0;
  public email:string= "";
  constructor() { }

  ngOnInit(): void {
    this.name="suchat khehabut";
    this.age=24;
    this.email="mothsuchat@gmail.com";
  }

}
