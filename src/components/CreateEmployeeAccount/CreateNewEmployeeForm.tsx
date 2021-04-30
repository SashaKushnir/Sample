import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import React, {useEffect} from "react";
import * as Yup from "yup";
import {Field, Form, Formik} from "formik";
import s from "../Authorisation/LoginForm.module.css";
import {createAccount} from "../../redux/CreateNewEmployee/CreateNewEmployeeT";

export interface CreateNewEmployeeType {
    name: string
    password: string
    role_id : 1 | 2 | 3
}

export const CreateNewEmployeeForm = () => {
    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required')
            .min(8, 'Too Short!')
            .max(50, 'Too Long!'),
        role_id: Yup.string().required('Required')
    });

    return <Formik onSubmit={(values: CreateNewEmployeeType) => {
        d(createAccount(values, localStorage.getItem("api_token") as string))
        console.log(values)
        alert(JSON.stringify(values))
    }}
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: '',
                       password: '',
                       role_id: 2
                   }}>
        {({errors, touched}) => (
            <Form>
                <div className={s.myFrom}>
                    <div>
                        <span>Name: </span>
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
                    <div>
                        <span>Role: </span>
                        <Field name="role_id" as="select">
                            <option value={1}>Owner</option>
                            <option value={2}>Admin</option>
                            <option value={3}>Manager</option>
                        </Field>
                    </div>
                    <div>
                        <div className={s.errorMessage}>{unSuccessMessage}</div>
                        <button className={s.buttonGreen} type="submit">Create account</button>
                    </div>
                </div>

            </Form>
        )}
    </Formik>
}