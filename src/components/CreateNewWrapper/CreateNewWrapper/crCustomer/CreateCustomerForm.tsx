import {Field, Form, Formik} from "formik";
import React from "react";
import * as Yup from 'yup';
import s from '../../../Authorisation/LoginForm.module.css'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../../../redux/store";
import {postCustomer} from "../../../../redux/customers/customersThunk";

export interface CreateCustomerFormType {
    name: string
    surname: string
    phone: string
    email?: string
    birthdate?: string
}

export const CreateCustomerForm = () => {
    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)

    const SignupSchema = Yup.object().shape({
      name: Yup.string()
        // .required("Обов'язкове")
        .min(2, "Too Short")
        .matches(/^\S.{0,48}\S$/, "S or E")
        .max(50, "Too long"),
      surname: Yup.string()
        // .required("Обов'язкове")
        .min(2, "Too Short")
        .matches(/^\S.{0,48}\S$/, "S or E")
        .max(50, "Too long"),
      phone: Yup.string()
        // .required("Обов'язкове")
        .min(8, "Too Short!")
        .matches(/^[+][0-9]+([ -][0-9]+)*$/, "Invalid Phone number")
        .max(25, "Too long"),
      birthdate: Yup.string(),
      email: Yup.string().email().min(2, "Too Short!!!"),
    });

    return <Formik onSubmit={(values: CreateCustomerFormType) => {
        d(postCustomer(values))
    }}
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: '',
                       surname: '',
                       phone: '',
                       email: '',
                       birthdate: ''
                   }}>
        {({errors, touched}) => (
            <Form>
                <div className={s.myFrom}>
                    <div className={s.input}>
                        <span>Name: </span>
                        <Field name="name" type="text" placeholder={"Name"}/>
                        {errors.name && touched.name ? <div className={s.error}>{errors.name}</div> : null}
                    </div>
                    <div className={s.input}>
                        <span>Surname : </span>
                        <Field name="surname" placeholder={"surname"}/>
                        {errors.surname && touched.surname ? (
                            <div className={s.error}>{errors.surname}</div>
                        ) : null}
                    </div>
                    <div className={s.input}>
                        <span>Phone : </span>
                        <Field name="phone" placeholder={"phone"}/>
                        {errors.phone && touched.phone ? (
                            <div className={s.error}>{errors.phone}</div>
                        ) : null}
                    </div>
                    <div className={s.input}>
                        <span>Birth date : </span>
                        <Field name="birthdate" placeholder={"birthdate"} type={"date"}/>
                        {errors.birthdate && touched.birthdate ? (
                            <div className={s.error}>{errors.birthdate}</div>
                        ) : null}
                    </div>
                    <div className={s.input}>
                        <span>Email(optional): </span>
                        <Field name="email" placeholder={"email"} type={"email"}/>
                        {errors.email && touched.email ? (
                            <div className={s.error}>{errors.email}</div>
                        ) : null}
                    </div>
                </div>

                <div className={s.errorMessage}>{unSuccessMessage}</div>
                <div className={s.save}>
                <button className={s.button} type="submit">Зберегти</button>
                </div>
            </Form>
        )}
    </Formik>
}
