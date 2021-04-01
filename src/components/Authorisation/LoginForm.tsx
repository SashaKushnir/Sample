import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from 'yup';

interface InitialValuesType  {
    email: string
    password: string
}

export const LoginForm = () => {
    const SignupSchema = Yup.object().shape({
        email: Yup.string().email('Invalid email').required('Required'),
        password: Yup.string().required('Required')
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
    });

    return <Formik onSubmit={(values:InitialValuesType) => {
    }}
                   validationSchema={SignupSchema}
                   initialValues={{
                       email: '',
                       password: ''
                   }}>
        {({errors, touched}) => (
            <Form>
                <Field name="email" type="email"/>
                {errors.email && touched.email ? <div>{errors.email}</div> : null}
                <Field name="lastName"/>
                {errors.password && touched.password ? (
                    <div>{errors.password}</div>
                ) : null}

                <button type="submit">Submit</button>
            </Form>
        )

        }
    </Formik>
}