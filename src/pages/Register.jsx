import React from "react";
import { useNavigate } from "react-router-dom";
import { MainForm } from "../components";
import { Field, ErrorMessage } from "formik";
import registerFormSchema from "../validation/registerFormSchema";
import useFetch from "../hooks/useFetch";
import {Toast1} from "../components/Toast";

export default function Register() {
  const { datas, setItem } = useFetch("http://localhost:4000/users");
  const navigate = useNavigate();

  const registerHandler = (values, { setSubmitting }) => {
    const username = `${values.firstname}${values.lastname}`;
    const userExists = datas.find((data) => data.email === values.email);
    if (userExists) {
      Toast1.fire({
        title: "کاربری با این ایمیل از قبل ثبت نام کرده است.",
        icon: "error"
      })
      setSubmitting(false)
    } else {
      setTimeout(() => {
        setItem({ ...values, username });
        setSubmitting(false);
        Toast1.fire({
          title: "ثبت نام با موفقیت انجام شد.",
          icon: "success"
        })
        navigate("/login");
      }, 3000);
    }
  };

  const registerFormProps = {
    submitBtn: "ثبت نام",
    title: "ایجاد حساب",
    smText: "حساب کاربری دارید؟",
    linkText: "وارد شوید!",
    linkSrc: "/login",
    submitFn: registerHandler,
    validationSchema: registerFormSchema,
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      password: "",
    },
  };

  return (
    <MainForm {...registerFormProps}>
      <Field type="text" name="firstname" placeholder="نام" />
      <ErrorMessage name="firstname" component="span" className="err-msg" />
      <Field type="text" name="lastname" placeholder="نام خانوادگی" />
      <ErrorMessage name="lastname" component="span" className="err-msg" />
      <Field type="email" name="email" placeholder="ایمیل" />
      <ErrorMessage name="email" component="span" className="err-msg" />
      <Field type="password" name="password" placeholder="رمز عبور" />
      <ErrorMessage name="password" component="span" className="err-msg" />
    </MainForm>
  );
}
