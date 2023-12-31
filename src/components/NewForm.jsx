import React, {useContext} from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import newContactSchema from "../validation/newContactSchema";
import { globalContext } from "../Contexts/globalContext";

export default function NewForm({ title, initValues, submitFunc }) {
  const {toggleShadow} = useContext(globalContext)

  return (
    <div className="p-10">
      <div className={`${toggleShadow ? "shadow-active" : ""} box-container`}>
        <h1 className="font-bold text-2xl mb-10">{title}</h1>
        <Formik
          initialValues={initValues}
          validationSchema={newContactSchema}
          onSubmit={submitFunc}
        >
          {({ isSubmitting }) => (
            <Form className="flex flex-wrap gap-4">
              <div className="new-contact-field">
                <label htmlFor="firstname">
                  نام{" "}
                  <ErrorMessage
                    name="firstname"
                    component="span"
                    className="err-msg"
                  />
                </label>
                <Field name="firstname" type="text" placeholder="امیر" />
              </div>
              <div className="new-contact-field">
                <label htmlFor="lastname">
                  نام خانوادگی{" "}
                  <ErrorMessage
                    name="lastname"
                    component="span"
                    className="err-msg"
                  />
                </label>
                <Field name="lastname" type="text" placeholder="محمدی" />
              </div>
              <div className="new-contact-field">
                <label htmlFor="email">
                  ایمیل (اختیاری){" "}
                  <ErrorMessage
                    name="email"
                    component="span"
                    className="err-msg"
                  />
                </label>
                <Field name="email" placeholder="amirmohammadi@gmail.com" />
              </div>
              <div className="new-contact-field">
                <label htmlFor="address">آدرس (اختیاری)</label>
                <Field name="address" type="text" placeholder="تهران | ایران" />
              </div>
              <div className="new-contact-field">
                <label htmlFor="phone">
                  شماره تلفن{" "}
                  <ErrorMessage
                    name="phone"
                    component="span"
                    className="err-msg"
                  />
                </label>
                <Field name="phone" type="text" placeholder="09112331752" />
              </div>
              <div className="new-contact-field">
                <span>جنسیت</span>
                <div className="flex gap-3">
                  <label>
                    مرد <Field name="gender" type="radio" value="male" />
                  </label>
                  <label>
                    زن <Field name="gender" type="radio" value="female" />
                  </label>
                  <label>
                    دیگر <Field name="gender" type="radio" value="other" />
                  </label>
                </div>
              </div>
              <div className="new-contact-field">
                <label htmlFor="status">کاربرد فعال</label>
                <Field
                  name="status"
                  as="select"
                  className="outline-none border-2 rounded-md p-1"
                >
                  <option value="true">بله</option>
                  <option value="false">خیر</option>
                </Field>
              </div>
              <button
                className={`${
                  isSubmitting ? "bg-blue-400" : "bg-blue-500"
                }  text-white px-8 py-3 self-end rounded-md`}
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "در حال ذخیره سازی" : "ذخیره"}
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
