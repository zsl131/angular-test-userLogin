import {HttpHeaders} from "@angular/common/http";

const ConstantConfig = Object.freeze({
  // baseUrl : "http://localhost:8080",
  baseUrl: '',
  headers: new HttpHeaders({'Content-type': 'json'})
});

export default ConstantConfig;
