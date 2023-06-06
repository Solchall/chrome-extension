import React, {useState} from 'react'
import { createRoot } from 'react-dom/client'
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
} from "@material-ui/core";
import { FormState } from '../typings';
import "./options.css";
import { useFormik } from "formik";
import { SignUpSchema } from "../schema/signup";
import { SignUp } from "../apis/fbAuth";
import {setStoredOptions} from "../storage/fbAuth";
import { SignUpUserForm } from "../typings";

 const initialValue : SignUpUserForm= {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      nickname: "",
      age: 20,
      sex: "여성",
      height:0,
      weight:0
    }

const App: React.FC<{}> =  ()=>{

  const [formState, setFormState] = useState<FormState>("ready");

  
  const onSubmit = async (
    values: SignUpUserForm,
  ) => {
    console.log(values);
    const response = await SignUp(values);
    console.log("onSubmit", status);
    setStoredOptions(response).then(() => {
      setTimeout(() => {
        setFormState("ready");
        console.log("제출 완료");
      }, 4000);
    });
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleBlur,
    handleChange,
    handleSubmit,
  } = useFormik({
    initialValues:initialValue,
    validationSchema: SignUpSchema,
    onSubmit,
  });

  //console.log(errors);
  return (
    <Box
      sx={{
        width: "40rem",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
      }}
    >
      {/*<Typography variant="h2"  marginBottom="5rem">
        Join
      </Typography>*/}

      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        style={{ width: "100%" }}
      >
        <Grid
          container
          spacing={2}
          justifyContent="flex-start"
          alignItems="flex-start"
        >
          {/* 이름 */}
          <Grid item xs={4}>
            <Typography variant="h4">이름</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.name}
              onChange={handleChange}
              id="name"
              type="text"
              placeholder="Enter name"
              onBlur={handleBlur}
              className={errors.name && touched.name ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.name && touched.name && (
              <Typography variant="h6" className="error">
                {errors.name as string}
              </Typography>
            )}
          </Grid>
          {/* Email */}
          <Grid item xs={4}>
            <Typography variant="h4">Email</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              id="email"
              type="email"
              placeholder="Enter Email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.email && touched.email && (
              <Typography variant="h6" className="error">
                {errors.email as string}
              </Typography>
            )}
          </Grid>
          {/* 비밀번호 */}
          <Grid item xs={4}>
            <Typography variant="h4">비밀번호</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.password}
              onChange={handleChange}
              id="password"
              type="password"
              placeholder="Enter Password"
              onBlur={handleBlur}
              className={
                errors.password && touched.password ? "input-error" : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.password && touched.password && (
              <Typography variant="h6" className="error">
                {errors.password as string}
              </Typography>
            )}
          </Grid>
          {/* 비밀번호 확인 */}
          <Grid item xs={4}>
            <Typography variant="h4">비밀번호 확인</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.confirmPassword}
              onChange={handleChange}
              id="confirmPassword"
              type="password"
              placeholder="Enter Confirm Password"
              onBlur={handleBlur}
              className={
                errors.confirmPassword && touched.confirmPassword
                  ? "input-error"
                  : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.confirmPassword && touched.confirmPassword && (
              <Typography variant="h6" className="error">
                {errors.confirmPassword as string}
              </Typography>
            )}
          </Grid>
          {/* 닉네임 */}
          <Grid item xs={4}>
            <Typography variant="h4">닉네임</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.nickname}
              onChange={handleChange}
              id="nickname"
              type="text"
              placeholder="Enter Nickname"
              onBlur={handleBlur}
              className={
                errors.nickname && touched.nickname ? "input-error" : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.nickname && touched.nickname && (
              <Typography variant="h6" className="error">
                {errors.nickname as string}
              </Typography>
            )}
          </Grid>
          {/* 나이 */}
          <Grid item xs={4}>
            <Typography variant="h4">나이</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.age}
              onChange={handleChange}
              id="age"
              type="number"
              placeholder="Enter Age"
              onBlur={handleBlur}
              className={errors.age && touched.age ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.age && touched.age && (
              <Typography variant="h6" className="error">
                {errors.age as string}
              </Typography>
            )}
          </Grid>

          {/* 성별 */}
          <Grid item xs={4}>
            <Typography variant="h4">성별</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.sex}
              onChange={handleChange}
              id="sex"
              type="text"
              placeholder="Enter Sex"
              onBlur={handleBlur}
              className={
                errors.nickname && touched.nickname ? "input-error" : ""
              }
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.sex && touched.sex && (
              <Typography variant="h6" className="error">
                {errors.sex as string}
              </Typography>
            )}
          </Grid>
          {/* 카 */}
          <Grid item xs={4}>
            <Typography variant="h4">키</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.height}
              onChange={handleChange}
              id="height"
              type="text"
              placeholder="Enter Height"
              onBlur={handleBlur}
              className={errors.height && touched.height ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.height && touched.height && (
              <Typography variant="h6" className="error">
                {errors.height as string}
              </Typography>
            )}
          </Grid>
          {/* 몸무게 */}
          <Grid item xs={4}>
            <Typography variant="h4">몸무게</Typography>
          </Grid>
          <Grid item xs={8}>
            <TextField
              value={values.weight}
              onChange={handleChange}
              id="weight"
              type="text"
              placeholder="Enter Weight"
              onBlur={handleBlur}
              className={errors.weight && touched.weight ? "input-error" : ""}
              variant="standard"
              hiddenLabel
              fullWidth
            />
            {errors.weight && touched.weight && (
              <Typography variant="h6" className="error">
                {errors.weight as string}
              </Typography>
            )}
          </Grid>
          <Button
            variant="contained"
            disabled={isSubmitting}
            type="submit"
            fullWidth
            disableElevation
          >
            {formState === "ready" ? "save" : "saving...."}
          </Button>
        </Grid>
      </form>
    </Box>
  );
};

const container = document.createElement('div')
document.body.appendChild(container)
const root = createRoot(container)
root.render(<App />)
