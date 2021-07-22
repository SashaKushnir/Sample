import React from 'react'
import {SpaceItem} from "../../../redux/banquetInfo/banquetInfoReducer";
import s from './SpaceI.module.css'
import {useDispatch, useSelector} from "react-redux";
import {banquetActions} from "../../../redux/banquetInfo/banquetInfoActions";
import {RootState} from "../../../redux/store";

interface SpaceIProps {
    spaceI: SpaceItem
    editMode: boolean
}

export const SpaceI: React.FC<SpaceIProps> = ({spaceI, editMode}) => {

    const d = useDispatch()
    const beg_datetime = useSelector((state: RootState) => state.banquet.beginning)


    const selectSpaceI = () => {
        if (editMode && !spaceI.disabled && beg_datetime)
            d(banquetActions.setSpaceSelectedOrUnSelected(spaceI.id))
    }

    return <div className={`${!spaceI.disabled ? (spaceI.selected ? s.selected : '') : s.disabled}  ${s.spaceI}`}
                onClick={selectSpaceI}>
        <div>
            {(spaceI.name === "Table") && <div>
                <b>Стол</b>
                <div>
                    <b>Поверх: </b>{spaceI.floor}
                </div>
                <div>
                    <b>Номер: </b>{spaceI.number}
                </div>
                <div>
                    <b>{spaceI.price}грн.</b>
                </div>

            </div>
            }
            {(spaceI.name !== "Table") && <div>
                <div>
                    <b>{spaceI.name}</b>
                </div>
                <div>
                    <b>{spaceI.price}грн.</b>
                </div>
            </div>
            }
        </div>

    </div>
}
