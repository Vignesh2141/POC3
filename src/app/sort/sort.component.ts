import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.css']
})
export class SortComponent implements OnInit {
 
  users:any;
  field:any;
  constructor(private service:RegistrationService) { }

  Sort(){
   let  resp=this.service.SortUsers(this.field);
   resp.subscribe((data)=>this.users=data)
  }
  ngOnInit(): void {
  }

}
