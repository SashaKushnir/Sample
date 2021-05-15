import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import * as Yup from 'yup'
import {Field, Form, Formik} from 'formik';
import {CustomerType} from "../../redux/customers/customersReducer";
import {postFamilyMember} from "../../redux/customers/customersThunk";
import {DatePicker} from "antd";
import moment from 'moment';

export interface CreateFMFormType {
    name: string
    birthdate: string
}
export interface CreateFamilyMember extends CreateFMFormType{
    customer_id: number
}

interface CreateFMFormProps {
    customer: CustomerType
    hideForm: () => void
}

export const CreateFMForm: React.FC<CreateFMFormProps> = ({customer, hideForm}) => {

    const d = useDispatch()
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)
    function range(start: any, end:  any) {
        const result = [];
        for (let i = start; i < end; i++) {
            result.push(i);
        }
        return result;
    }

    function disabledDate(current: any) {
        // Can not select days before today and today
        return current && current > moment().endOf('day');
    }
    function disabledDateTime() {
        return {
            disabledHours: () => range(0, 24).splice(4, 20),
            disabledMinutes: () => range(30, 60),
            disabledSeconds: () => [55, 56],
        };
    }
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
        const readyForm: CreateFamilyMember = {...Object.assign(values,{customer_id : customer.id})}
        console.log(readyForm)
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
                    <div>
                        <span>Імя: </span>
                        <Field name="name" type="text" placeholder={"Name"}/>
                        {errors.name && touched.name ? <div>{errors.name}</div> : null}
                    </div>
                    <div>
                        <span>Дата народження : </span>
                        <Field name="birthdate" placeholder={"birthdate"} type={"date"}/>
                        {errors.birthdate && touched.birthdate ? (
                            <div>{errors.birthdate}</div>
                        ) : null}
                    </div>
                </div>
                <div>{unSuccessMessage}</div>
                <button type="submit">Зберегти</button>
            </Form>
        )}
    </Formik>
}

