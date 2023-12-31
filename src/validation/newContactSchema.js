import * as Yup from "yup";

const newContactSchema = Yup.object().shape({
  firstname: Yup.string()
    .min(3, "نام شما باید حداقل 3 کاراکتر داشته باشد")
    .max(12, "نام شما باید کمتر از 12 کاراکتر داشته باشد")
    .required("نام خود را وارد کنید"),
  lastname: Yup.string()
    .min(3, "نام خانوادگی شما باید حداقل 3 کاراکتر داشته باشد")
    .max(12, "نام خانوادگی شما باید کمتر از 12 کاراکتر داشته باشد")
    .required("نام خانوادگی خود را وارد کنید"),
  email: Yup.string()
    .email("ایمیل خود را درست وارد کنید")
    .max(30, "ایمیل شما باید کمتر از 30 کاراکتر داشته باشد"),
  phone: Yup.string()
    .trim()
    .matches(
      /^(0|0098|\+98)9(0[1-5]|[1 3]\d|2[0-2]|98)\d{7}$/,
      "شماره تلفن نامعتبر است"
    )
    .required("شماره تلفن را وارد کنید"),
});

export default newContactSchema;
