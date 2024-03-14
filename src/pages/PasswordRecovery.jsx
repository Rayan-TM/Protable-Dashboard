import React, { useState } from "react";
import { MainForm } from "../components";
import { Link } from "react-router-dom";
import { Field, ErrorMessage } from "formik";
import recoveryFormSchema from "../validation/recoveryFormSchema";
import useFetch from "../hooks/useFetch";

export default function PasswordRecovery() {
  const { datas } = useFetch("http://localhost:4000/users");
  const [recoveryResult, setRecoveryResult] = useState([]);

  const recoverPassword = (values, { setSubmitting }) => {
    setTimeout(() => {
      const validUser = datas.find((data) =>
        [data.username, data.email].includes(values.EmailOrUsername)
      );

      validUser ? setRecoveryResult([validUser.password, true]) : setRecoveryResult(["این کاربر وجود ندارد", false])
      setSubmitting(false);
    }, 1000);
  };

  const recoveryFormProps = {
    submitBtn: "ثبت",
    title: "بازنشانی رمز عبور",
    smText: "یک عمل دیگر انجام دهید.",
    linkText: "هم اکنون ثبت نام کنید!",
    linkSrc: "/register",
    submitFn: recoverPassword,
    validationSchema: recoveryFormSchema,
    initialValues: {
      EmailOrUsername: "",
    },
  };
  return (
    <MainForm
      {...recoveryFormProps}
      recoveryBtn={
        <div>
          <span>یا </span>
          <Link
            to={"/login"}
            className="w-fit border-[1px] border-gray-300 rounded-[5px] px-3 font-medium hover:bg-gray-300 transition-all duration-300"
          >
            <small>وارد شوید!</small>
          </Link>
        </div>
      }
    >
      <div className="flex flex-col">
        <Field
          type="text"
          name="EmailOrUsername"
          placeholder="نام کاربری یا ایمیل"
        />
        {recoveryResult[1] ? <span className="text-green-500 mt-2">رمز عبور: {recoveryResult}</span> : <span className="text-red-500 text-right text-sm mt-2">{recoveryResult}</span>}
        <ErrorMessage
          name="EmailOrUsername"
          component="span"
          className="err-msg"
        />
      </div>
    </MainForm>
  );
}
