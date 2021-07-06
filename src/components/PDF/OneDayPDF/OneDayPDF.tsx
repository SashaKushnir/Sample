import React, {useEffect} from 'react'
import {History} from "./../../../redux/history/newHistoryReducer"
import s from "../pdfStyles.module.css"
import {useSelector} from "react-redux";
import {RootState} from "../../../redux/store";


export const OneDayPDF: React.FC = () => {
    const banquets = useSelector((state: RootState) => state.common.oneDay_pdf)
    const date = useSelector((state: RootState) => state.common.pdf_date)
    let advance = 0
    let total = 0
    banquets?.forEach((obj: History) => {
        advance += obj.advance_amount
    })
    banquets?.forEach((obj: History) => {
        total += obj.total
    })
    const days = ["Неділя", "Понеділок", "Вівторок", "Середа", "Четрер", "П'ятниця", "Субота", "Неділя"]
    console.log(new Date(date.slice(0, 10)).getDay())
    useEffect(() => {
        console.log(banquets)
    }, [])
    //const [hideAll, setHideAll] = useState(false)

    // if (data.space_order?.items)
    //     tables = data.space_order?.items.map((obj, index) =>
    //         <div key={index} className={s.tables}>Name: {obj.name}, floor: {obj.floor}, number: {obj.number},
    //             price: {obj.price}</div>)

    const tables = banquets?.map(banquet =>

        <div className={s.banquet_tables}> {banquet.space_order?.items?.map((spaceI, num) => {
            return <div>
                 <p>
                    <b>{num+1}) Назва: </b>{spaceI.name}
                </p>
                <p>
                    <b>Поверх: </b>{spaceI.floor}
                </p>
                <p>
                    <b>Номер: </b>{spaceI.number}
                </p>
                <p>
                    <b>Тип: </b>{spaceI.type}
                </p>
                {(spaceI.type === "room") && <p>
                    <b>Price: </b>{spaceI.price}
                </p>
                }
            </div>
        })
        }
        </div>
    )

    return <>
        <h1 className={s.title}>Звіт на день </h1>
        <h2 className={s.title}>{days[new Date(date.slice(0, 10)).getDay()]}, {banquets ? banquets[0].beg_datetime.slice(0, 10) : "none"}</h2>
        <div className={s.pid}></div>
        <p>Створено банкетів: {banquets?.length}</p>
        <p>Загальна сума: {total}</p>
        <p>Загальна сума авансів: {advance}</p>
        <div className={s.tables_wrapper}>
            {tables}
        </div>

    </>
}
