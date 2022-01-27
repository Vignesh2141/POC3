import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';
import { User } from '../User';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:User=new User("","",new Date(),new Date(),"","");
  msg:any;
  
  constructor(private service:RegistrationService) { }

  ngOnInit(): void {
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.user);
    resp.subscribe((data)=>this.msg=data);
      }

}

