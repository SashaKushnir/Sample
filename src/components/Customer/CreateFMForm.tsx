import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import * as Yup from 'yup'
import {Field, Form, Formik} from 'formik';
import {CustomerType} from "../../redux/customers/customersReducer";
import {postFamilyMember} from "../../redux/customers/customersThunk";
import s from "./FMItem.module.css"

export interface CreateFMFormType {
    name: string
    birthdate: string
}

export interface CreateFamilyMember extends CreateFMFormType {
    customer_id: number
}

interface CreateFMFormProps {
    customer: CustomerType
    hideForm: () => void
}

export const CreateFMForm: React.FC<CreateFMFormProps> = ({customer, hideForm}) => {

    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required')
            .min(2, 'Too Short')
            .matches(
                /^\S.{0,48}\S$/, "S or E"
            )
            .max(50, "Too long")
        ,
        birthdate: Yup.string().required(),
    });

    return <Formik onSubmit={(values: CreateFMFormType) => {
        const readyForm: CreateFamilyMember = {...Object.assign(values, {customer_id: customer.id})}
        d(postFamilyMember(readyForm, hideForm))
    }}
                   validationSchema={SignupSchema}
                   initialValues={{
                       name: '',
                       birthdate: ''
                   }}>
        {({errors, touched}) => (
            <Form>
                <div>
                    <div className={s.block}>
                        <span className={s.text}>Імя: </span>
                        <Field name="name" type="text" placeholder={"Name"} className={s.input}/>
                        {errors.name && touched.name ? <div>{errors.name}</div> : null}


                    </div>
                    <div className={s.block}>

                        <span className={s.text}>Дата народження : </span>


                        <Field name="birthdate" placeholder={"birthdate"} type={"date"} className={s.input}/>
                        {errors.birthdate && touched.birthdate ? (
                            <div>{errors.birthdate}</div>
                        ) : null}
                    </div>
                    <div>
                        <div>{unSuccessMessage}</div>
                        <button type="submit" className={s.button}>Зберегти</button>
                    </div>
                </div>

            </Form>
        )}
    </Formik>
}

