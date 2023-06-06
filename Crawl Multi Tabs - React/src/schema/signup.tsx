import * as yup from "yup";

const passwordRules =
  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
// 최소 8 자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자 정규식

export const SignUpSchema = yup.object().shape({
  name: yup.string().required("Name Required"),
  email: yup
    .string()
    .email("Please enter a valid email")
    .required("Email Required"),
  password: yup
    .string()
    .min(5)
    .matches(passwordRules, {
      message:
        " 최소 8자, 하나 이상의 대문자, 하나의 소문자, 하나의 숫자 및 하나의 특수 문자",
    })
    .required("Password Required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), undefined], "Passwords must match")
    .required("ConfirmPassword Required"),
  nickname: yup.string().min(1).required("Nickname Required"),
  age: yup.number().positive().integer().required("Age Required"),
  sex: yup.string().required("Sex Required"),
  weight: yup.number().positive().integer().required("Weight Required"),
  height: yup.number().positive().integer().required("Height Required"),
});
