import * as Yup from "yup";

const registerFormSchema = Yup.object().shape({
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
    .max(30, "ایمیل شما باید کمتر از 30 کاراکتر داشته باشد")
    .required("ایمیل خود را وارد کنید"),
  password: Yup.string()
    .min(8, "رمز عبور شماا باید حداقل 8 کاراکتر داشته شد")
    .max(12, "رمز عبور شما باید کمتر از 12 کاراکتر داشته باشد")
    .required("رمز عبور خود را وارد کنید"),
});

export default registerFormSchema;
