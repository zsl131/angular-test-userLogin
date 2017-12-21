import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {LoginService} from "../app-common/services/login.service";
import {HttpClient} from "@angular/common/http";
import ConstantConfig from "../app-common/appConfig";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginModel: FormGroup;

  private result: ResultDto;

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private http: HttpClient
    ) {
    this.loginModel = fb.group({
      username: ['zsl', [Validators.minLength(3)]],
      password: ['123']
    });
  }

  ngOnInit() {
  }

  onLogin() {
    if (this.loginModel.valid) {
      console.log(this.loginModel.value);
      let username = this.loginModel.controls['username'].value;
      let password = this.loginModel.controls['password'].value;
      console.log(username+"======="+password);
      this.loginService.login(this.loginModel.value).subscribe(
        res => {
          console.log("success:"+res);
          this.result = res as ResultDto;
        },
        error => console.log("error::"+error),
        () => {
          console.log("==complete=="+this.result.result);
        }
      );
    }
  }

}

export class ResultDto {
  public result: string
}
