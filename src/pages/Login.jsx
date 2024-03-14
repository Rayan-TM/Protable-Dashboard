import React, { useState } from "react";
import { MainForm } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { Field, ErrorMessage } from "formik";
import loginFormSchema from "../validation/loginFormSchema";
import useFetch from "../hooks/useFetch";
import { Toast1 } from "../components/Toast";

export default function Login() {
  const { datas } = useFetch("http://localhost:4000/users");
  const savedEmailOrusernmae = localStorage.getItem("EmailOrUsername");
  const savedPassword = localStorage.getItem("password");
  const [isLoggedInUser, setIsLoggedInUser] = useState();

  const navigate = useNavigate();

  const loginHandler = (values, { setSubmitting }) => {
    console.log(!localStorage.getItem("Token"));
    if (!localStorage.getItem("Token")) {
      const validUser = datas.find(
        (data) =>
          [data.username, data.email].includes(values.EmailOrUsername) &&
          data.password === values.password
      );

      setTimeout(() => {
        if (validUser) {
          if (values.hasRemembered) {
            localStorage.setItem("EmailOrUsername", values.EmailOrUsername);
            localStorage.setItem("password", values.password);
          }
          localStorage.setItem("Token", validUser.Token);
          navigate("/");
        } else {
          Toast1.fire({
            title: "کاربری با این مشخصات وجود ندارد",
            icon: "error",
          });
        }
        setSubmitting(false);
      }, 1000);
    } else {
      setIsLoggedInUser(true);
      setSubmitting(false);
    }
  };

  const loginFormProps = {
    submitBtn: "ورود",
    title: "ورود",
    smText: "حسابی ندارید؟",
    linkText: "هم اکنون ثبت نام کنید!",
    linkSrc: "/register",
    submitFn: loginHandler,
    validationSchema: loginFormSchema,
    initialValues: {
      EmailOrUsername: "",
      password: "",
      hasRemembered: false,
    },
  };

  if (savedEmailOrusernmae && savedPassword) {
    loginFormProps.initialValues.EmailOrUsername = savedEmailOrusernmae;
    loginFormProps.initialValues.password = savedPassword;
  }
  return (
    <MainForm {...loginFormProps}>
      <Field
        type="text"
        name="EmailOrUsername"
        placeholder="نام کاربری یا ایمیل"
      />
      <ErrorMessage
        name="EmailOrUsername"
        component="span"
        className="err-msg"
      />
      <Field type="password" name="password" placeholder="رمز عبور" />
      <ErrorMessage name="password" component="span" className="err-msg" />
      {isLoggedInUser && (
        <span className="text-red-500 text-sm">
          کاربری از قبل وارد شده است. لطفا ابتدا از حساب کنونی خارج و سپس دوباره
          تلاش کنید.
        </span>
      )}
      <div className="flex justify-between text-xs items-center font-semibold">
        <div className="flex items-center gap-x-2">
          <Field
            id="checkbox"
            type="checkbox"
            name="hasRemembered"
            className="scale-110"
          />
          <label htmlFor="checkbox">به خاطر سپاری</label>
        </div>
        <Link to="/password_recovery">بازنشانی رمز عبور</Link>
      </div>
    </MainForm>
  );
}
