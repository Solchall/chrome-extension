import { SignUpUserForm,SignUpReq, SignUpRes } from "../typings";


const FB_APP_KEY = "AIzaSyBjb5ZMBTlrfeWaGbwWOXjV7VEQXJvtBa4";
const BASE_URL = "https://identitytoolkit.googleapis.com/v1/accounts:";



//signUp["returnSecureToken"] = true;
// 회원가입
export async function SignUp(signUp: SignUpUserForm): Promise<SignUpRes> {
  const method = "signUp";
  const request:SignUpReq = {...signUp, "returnSecureToken":true}
  const res = await fetch(`${BASE_URL}${method}?key=${FB_APP_KEY}`, {
    method: "POST",
    body: JSON.stringify(request),
  });

  if (!res.ok) {
    throw new Error("Sign Up Error");
  }
  const data: SignUpRes = await res.json();
  return data;
}

// 유저 추가 정보 입력