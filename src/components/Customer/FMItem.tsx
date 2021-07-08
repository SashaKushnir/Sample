import React, {useState} from 'react'
import {FamilyMemberGetter} from "../../redux/customers/customersReducer";
import s from './FMItem.module.css'
import {useDispatch, useSelector} from "react-redux";
import {selectUsers} from "../../selectors/selectCreateNew";
import {deleteHistoryT} from "../../redux/history/newHistoryThunk";
import {DeleteIcon} from "../../common/compon/HistoryIcons/DeleteIcon";
import {deleteFamilyMember, postFamilyMember, updateFamilyMember} from "../../redux/customers/customersThunk";
import {Field, Form, Formik} from "formik";
import {CreateFamilyMember, CreateFMFormType, UpdateFamilyMember} from "./CreateFMForm";
import * as Yup from "yup";
import {RootState} from "../../redux/store";

interface FMItemProps {
    member: FamilyMemberGetter
}


export const FMItem: React.FC<FMItemProps> = ({member}) => {

    const customers = useSelector(selectUsers)
    const d = useDispatch();
    const Delete = () => {
        if (window.confirm("Delete this banquet? It can not be restored!!!")) {
            d(deleteFamilyMember(member.id, localStorage.getItem("api_token") as string)) //deleting family member
        }
    }
    const hideForm = () => {
        SetUpdate(false)
    }

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

    const [update, SetUpdate] = useState(false)
    return <div className={s.main}>
        {!update && <>
          <div>
            Імя: {member.name}
          </div>
          <div className={s.birth}>
            Рік народження: {member.birthdate}
          </div>
          <div>
            <div className={s.delete} onClick={Delete}>
              Видалити
            </div>
            <div className={s.delete} onClick={() => SetUpdate(true)}>
              Оновити
            </div>
          </div>
        </>}
        {update && <>
          <div className={s.delete} onClick={() => SetUpdate(false)}>
            Скасувати
          </div>
          <Formik onSubmit={(values: CreateFMFormType) => {

              const readyForm: UpdateFamilyMember = {...Object.assign(values, {id: member.id})}
              d(updateFamilyMember(readyForm, hideForm))
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
        </>
        }
    </div>
}
