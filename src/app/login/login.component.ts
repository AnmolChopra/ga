import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { BackendService } from '../backendservice/backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginForm:FormGroup
resData;
resObj;
  constructor(private fb: FormBuilder, private router: Router, private bs: BackendService) { }

  ngOnInit() {
    this.loginF();
  }
  loginF(){
    this.loginForm=this.fb.group({
      'username':['',Validators.required],
      'pass':['',Validators.required],
      'date':Date.now()
    })
}
Login() {
  var formData = this.loginForm.getRawValue();
  var serilize = formData;
  console.log(serilize);
  this.resData = this.bs.login(serilize).subscribe((res)=>{
    this.resObj=res;
    if (this.resObj.err==0){
      localStorage.setItem('name',this.resObj.data.name);
      localStorage.setItem('date',this.resObj.data.date);
      this.router.navigate(['/dashboard']);
    }
  })
  // this.router.navigate(['/dashboard']);
}
}
