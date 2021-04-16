import {Field, Form, Formik} from 'formik'
import React, {useEffect} from 'react'
import * as Yup from "yup";
import {createAccount, editUser} from "../../../redux/CreateNewEmployee/CreateNewEmployeeT";
import s from "../../Authorisation/LoginForm.module.css";
import {CreateNewEmployeeType} from "../CreateNewEmployeeForm";
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../redux/store";

export interface EditUserObjectType extends CreateNewEmployeeType{
    api_token?: string
}

export const EditUserForm = () => {
    const d = useDispatch()
    const initialInfo = useSelector((state:RootState) => state.accounts.editUserInfo)
    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required'),
        password: Yup.string().required('Required')
            .min(8, 'Too Short!')
            .max(50, 'Too Long!'),
        role_id: Yup.string().required('Required')
    });
    return <Formik onSubmit={(values: CreateNewEmployeeType) => {
        Object.assign(values, {api_token: initialInfo?.api_token});
        console.log("VALUES",values)
        d(editUser(values))
    }}
                   enableReinitialize
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: initialInfo?.name?(initialInfo.name): '',
                       password: initialInfo?.password?initialInfo.password:'',
                       role_id: initialInfo?.role_id?(initialInfo.role_id) as 1|2|3:2
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
                        {/*<div className={s.errorMessage}>{unSuccessMessage}</div>*/}
                        <button className={s.buttonGreen} type="submit">Edit account</button>
                    </div>
                </div>

            </Form>
        )}
    </Formik>
}