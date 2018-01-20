import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  index:any;
  name:string;
Student:StudentRecord;
StudentList:StudentRecord[]=[];
constructor( private router:Router)  { 
    this.ngOnInit();
  }

  ngOnInit() {
    this.name = "Create and update";
    this.index = 0;
    this.Student = {
      Name:'',
      Sure:'',
      Mark: '',
      Address:'',
    }
    
  }
  SaveRecord() {
      console.log(this.Student)
      if(this.index == 0){
        this.StudentList.push(this.Student);
      }
     else {
       this.index = 0;
     }
      this.ngOnInit();
  }
  EditRecord(i:any){
    this.index = 1;
    this.Student = this.StudentList[i];
    
  }
  DeleteRecord(i:any) {
    this.StudentList.splice(i,1);
  }
}
interface StudentRecord {
  Name:string;
  Sure:string;
  Mark:string;
  Address:string;
}