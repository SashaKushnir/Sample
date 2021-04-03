import {Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup';
import s from './LoginForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {tryLoginT} from "../../redux/forCommon/forCommonThunks";
import {RootState} from "../../redux/store";

export interface LoginFormType {
    name: string
    password: string
}

export const LoginForm = () => {

    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required')
            .min(8, 'Too Short!')
            .max(50, 'Too Long!'),
    });

    return <Formik onSubmit={(values: LoginFormType) => {
        console.log(values)
        d(tryLoginT(values))
    }}
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: '',
                       password: ''
                   }}>
        {({errors, touched}) => (
            <Form>
                <div className={s.myFrom}>
                    <div>
                        <span>Login: </span>
                        <Field name="name" type="text" placeholder={"Name"}/>
                        {errors.name && touched.name ? <div className={s.error}>{errors.name}</div> : null}
                    </div>
                    <div>
                        <span>Password : </span>
                        <Field name="password" placeholder={"Password"}/>
                        {errors.password && touched.password ? (
                            <div className={s.error}>{errors.password}</div>
                        ) : null}
                    </div>
                </div>
                <div className={s.errorMessage}>{unSuccessMessage}</div>
                <button className={s.button} type="submit">Submit</button>
            </Form>
        )}
    </Formik>
}
