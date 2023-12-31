import * as Yup from 'yup'

const recoveryFormSchema = Yup.object().shape({
    EmailOrUsername: Yup.string().required("نام کاربری یا ایمیل خود را وارد کنید"),
})

export default recoveryFormSchema