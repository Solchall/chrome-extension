export interface MainItem {
  views:number;
  baseUrl:string;
  imgUrl:string;
  title:string;
}

export type FormState = "ready" | "saving";

export interface LocalStorageUser {
  idToken: string;
  email: string;
  refreshToken: string;
}
export interface AuthReq {
  returnSecureToken:boolean;
}
export interface AuthRes {
  kind: string;
  idToken: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

export interface AuthForm {
  password: string;
  confirmPassword: string;
}

export interface User {
  name :string;
  email:string;
}

export interface UserBasicInfo  {
  nickname: string;
  age: number;
  sex: "여성" | "남성";
  height: number;
  weight: number;
}

export type SignUpReq 
  = User &  AuthReq;

export type SignUpRes 
  = Pick<User,"email"> & AuthRes;

export type SignUpUserForm 
  = User & UserBasicInfo & AuthForm; 