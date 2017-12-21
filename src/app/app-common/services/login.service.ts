import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import ConstantConfig from "../appConfig";
import {Observable} from "rxjs/Observable";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  // public login(username: string, password: string)

  public login(params: any): Observable<Object> {
    let url = ConstantConfig.baseUrl+'/test/login';
    console.log("login-service=="+JSON.stringify(params)+"===="+url);
    return this.http.post(url, null, {params:params});
  }

}
