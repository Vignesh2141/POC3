import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
users:any;
routerLink:RouterLink;

  constructor(private service:RegistrationService) { }
  
  deleteUser(id:number){
    let resp= this.service.deleteUser(id);
    resp.subscribe((data)=>this.users=data);
  }
  
  
  
  ngOnInit(): void {
    
   let response= this.service.getUser();
   response.subscribe((data)=>this.users=data);
   



  }
  orderProperty:string="id";
val=true;
toggleSort(order:string){
  if(this.val==true){
    this.val=false;
  }else
    this.val=true;
  this.orderProperty=order;
}

}
