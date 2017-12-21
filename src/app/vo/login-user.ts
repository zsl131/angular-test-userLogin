export class LoginUser {
  private _id: number;
  private _username: string;
  private _headimg: string;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get username(): string {
    return this._username;
  }

  set username(value: string) {
    this._username = value;
  }

  get headimg(): string {
    return this._headimg;
  }

  set headimg(value: string) {
    this._headimg = value;
  }
}
