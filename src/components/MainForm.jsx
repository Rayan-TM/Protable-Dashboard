import React from "react";
import { Link } from "react-router-dom";
import { Formik, Form} from "formik";
import {
  Instagram,
  Facebook,
  Linkedin,
  Twitter,
  Dribbble,
  Behance,
  Google,
} from "../components/icons";
import SocialMedia from "./SocialMedia";

export default function MainForm({
  title,
  smText,
  linkText,
  linkSrc,
  submitBtn,
  children,
  recoveryBtn,
  initialValues,
  submitFn,
  validationSchema,
}) {
  return (
    <div className="bg-white w-[440px] mx-auto rounded-md p-10 text-center shadow-md">
      <h1 className="text-2xl font-bold my-10">
        <Link to="/">
          Pro<span className="text-blue-500 ">table</span>
        </Link>
      </h1>
      <h3 className="font-semibold my-8">{title}</h3>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={submitFn}
      >
        {({ isSubmitting }) => (
          <Form className="register-form flex flex-col gap-y-6">
            {children}
            <input
              type="submit"
              value={isSubmitting ? "loading..." : submitBtn}
              disabled={isSubmitting}
              className={`${
                isSubmitting ? "bg-blue-400" : "bg-blue-500"
              } cursor-pointer transition-all duration-300 hover:bg-blue-400 text-white `}
            />
          </Form>
        )}
      </Formik>
      {title === 'ورود' && <SocialMedia>
        <Facebook size={13} />
        <Twitter size={13} />
        <Dribbble size={13} />
        <Linkedin size={13} />
        <Google size={13} />
        <Behance size={13} />
        <Instagram size={13} />
      </SocialMedia>}
      <hr className="my-8 border-gray-300" />
      <small className="font-medium text-gray-300">{smText}</small>
      <div className="flex justify-center items-center gap-2 mt-5">
        <Link
          to={linkSrc}
          className=" w-fit border-[1px] border-gray-300 rounded-[5px] px-3 font-medium hover:bg-gray-300 transition-all duration-300"
        >
          <small>{linkText} </small>
        </Link>
        {recoveryBtn}
      </div>
    </div>
  );
}