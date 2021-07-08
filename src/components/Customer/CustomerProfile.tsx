import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {CustomerType} from "../../redux/customers/customersReducer";
import s from "./CustomerProfile.module.css"
import {banquetActions} from "../../redux/banquetInfo/banquetInfoActions";
import {CreateFamilyMember, CreateFMForm, CreateFMFormType} from "./CreateFMForm";
import {FMItem} from "./FMItem";
import {
    deleteCustomer,
    deleteFamilyMember, postCustomer,
    postFamilyMember, updateCustomer

} from "../../redux/customers/customersThunk";
import {CheckForDeleted} from "../../common/compon/DeletedItems/DeletedItems";
import {tryLoginT} from "../../redux/forCommon/forCommonThunks";
import {Field, Form, Formik} from "formik";
import {LoginFormType} from "../Authorisation/LoginForm";
import {RootState} from "../../redux/store";
import * as Yup from "yup";
import {CreateCustomerFormType} from "../CreateNewWrapper/CreateNewWrapper/crCustomer/CreateCustomerForm";

type PropsType = {
    customer: CustomerType
    CusMenuSwitch: any
}

export const CustomerProfile: React.FC<PropsType> = (props) => {


    const [addFMmode, setAddFMmode] = useState(false)
    const familyMembers = props.customer.family_members?.map((memberI, index) => {
        if (CheckForDeleted(memberI)) return
        return <FMItem member={memberI} key={index}/>
    })
    const d = useDispatch()
    const cus = props.customer
    const [update, SetUpdate] = useState(false)
    const unSuccessMessage = useSelector((state: RootState) => state.common.message)

    const SignupSchema = Yup.object().shape({
        name: Yup.string().required('Required')
            .min(2, 'Too Short')
            .matches(
                /^\S.{0,48}\S$/, "S or E"
            )
            .max(50, "Too long")
        ,
        surname:Yup.string().required('Required')
            .min(2, 'Too Short')
            .matches(
                /^\S.{0,48}\S$/, "S or E"
            )
            .max(50, "Too long")
        ,
        phone: Yup.string().required('Required')
            .min(10, 'Too Short!')
            .matches(/^[+][0-9]+([ -][0-9]+)*$/, "Invalid Phone number")
            .max(25, "Too long"),
        birthdate: Yup.string(),
        email: Yup.string().email().min(2, "Too Short!!!")
    });


    const Select = () => {
        d(banquetActions.setCustomer(cus))
        props.CusMenuSwitch(false)
    }

    const hideForm = () => {
        setAddFMmode(false)
    }

    const addFamilyMember = () => {
        setAddFMmode(true)
    }
    const Delete = () => {
        if (window.confirm("Delete this banquet? It can not be restored!!!")) {
            d(deleteCustomer(cus.id, localStorage.getItem("api_token") as string)) //deleting family member
        }
    }
    return <div className={s.profile}>
        {!update && <>

          <div className={s.name} onClick={Select}>
              {cus.name + " " + cus.surname}
            <div className={s.delete} onClick={Delete}>
              X
            </div>

          </div>
          <div onClick={() => SetUpdate(true)}>Оновити</div>
          <div className={s.email}>
            Пошта: {cus.email}
          </div>
          <div className={s.phone}>
            Телефон: {cus.phone}
          </div>
          <div className={s.birthdate}>
            Рік народження: {cus.birthdate}
          </div>
          <div className={s.birthdate}><p className={s.childs_title}>Діти:</p>
              {familyMembers}
          </div>
            {!addFMmode && <button onClick={addFamilyMember} className={s.birthdate}>
              Додати дитину
            </button>}
            {addFMmode &&
            <div>
              <button onClick={hideForm}>
                Hide Form
              </button>
              <div>
                <CreateFMForm hideForm={hideForm} customer={cus}/>
              </div>
            </div>}
        </>
        }
        {update && <>
          <div onClick={() => SetUpdate(false)}>Скасувати</div>
          <Formik onSubmit={(values: CreateCustomerFormType) => {
              console.log(values)
              d(updateCustomer(cus.id, values))
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
                          <button className={s.button} type="submit">Оновити</button>
                      </div>
                  </Form>
              )}
          </Formik>
        </>
        }
    </div>

}
