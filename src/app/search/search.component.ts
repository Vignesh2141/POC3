import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  users:any;
  fname:string;
  constructor(private service:RegistrationService) { }
  public findByFname(){
    let resp= this.service.getUserByText(this.fname);
    resp.subscribe((data)=>this.users=data);
   }
  ngOnInit(): void {
    
  }

}
