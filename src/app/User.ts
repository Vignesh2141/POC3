export class User{
    fname:string;
      surname:string;
      dob:Date;
      joiningDate:Date;
      mobileNo:string;
      pincode:string;
    constructor(fn:string,sn:string,d:Date,jd:Date,mobile:string,pincode:string){
        this.fname=fn;
        this.surname=sn;
        this.dob=d;
        this.joiningDate=jd;
        this.mobileNo=mobile;
        this.pincode=pincode;
  
    }
  }