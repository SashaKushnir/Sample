import {Field, Form, Formik} from 'formik'
import React from 'react'
import * as Yup from "yup";
import {editUser} from "../../../redux/CreateNewEmployee/CreateNewEmployeeT";
import s from "../../Authorisation/LoginForm.module.css";
import {CreateNewEmployeeType} from "../CreateNewEmployeeForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";
import styles from './EditUserForm.module.css'

export interface EditUserObjectType extends CreateNewEmployeeType {
    api_token?: string
}

export const EditUserForm = () => {
    const d = useDispatch()
    const initialInfo = useSelector((state: RootState) => state.accounts.editUserInfo)
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required')
            .min(2, 'Too Short')
            .matches(
                /^\S.{0,48}\S$/, "S or E"
            )
            .max(50, "Too long")
        ,
        password: Yup.string().required('Required')
            .min(8, 'Too Short!')
            .max(50, 'Too Long!'),
        role_id: Yup.string().required('Required')
    });
    return <Formik onSubmit={(values: CreateNewEmployeeType) => {
        Object.assign(values, {api_token: initialInfo?.api_token});
        console.log("VALUES", values)
        d(editUser(values))
    }}
                   enableReinitialize
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: initialInfo?.name ? (initialInfo.name) : '',
                       password: initialInfo?.password ? initialInfo.password : '',
                       role_id: initialInfo?.role_id ? (initialInfo.role_id) as 1 | 2 | 3 : 2
                   }}>
        {({errors, touched}) => (
            <Form>
                <div className={styles.formWrap}>
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
                </div>
                <div className={styles.forButton}>
                    <button className={s.buttonGreen} type="submit">Edit account</button>
                </div>
            </Form>
        )}
    </Formik>
}