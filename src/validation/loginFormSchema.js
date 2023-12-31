import * as Yup from 'yup'

const loginFormSchema = Yup.object().shape({
    EmailOrUsername: Yup.string().required('نام کاربری یا ایمیل خود را وارد کنید'),
    password: Yup.string().required('رمز عبور خود را وارد کنید')
})

export default loginFormSchema