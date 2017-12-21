import {LoginUser} from "./login-user";

export class Auth {

  private _user: LoginUser;
  private _hasError: boolean;
  private _errorMsg: string;
  private _targetUrl: string;

  get user(): LoginUser {
    return this._user;
  }

  set user(value: LoginUser) {
    this._user = value;
  }

  get hasError(): boolean {
    return this._hasError;
  }

  set hasError(value: boolean) {
    this._hasError = value;
  }

  get errorMsg(): string {
    return this._errorMsg;
  }

  set errorMsg(value: string) {
    this._errorMsg = value;
  }

  get targetUrl(): string {
    return this._targetUrl;
  }

  set targetUrl(value: string) {
    this._targetUrl = value;
  }
}
