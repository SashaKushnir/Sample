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
        if(editMode && !spaceI.disabled && beg_datetime)
        d(banquetActions.setSpaceSelectedOrUnSelected(spaceI.id))
    }

    return <div className={`${!spaceI.disabled?(spaceI.selected?s.selected:''):s.disabled}  ${s.spaceI}`}
    onClick={selectSpaceI}>
        <div>
            <b>Name: </b>{spaceI.name}
        </div>
        <div>
            <b>Floor: </b>{spaceI.floor}
        </div>
        <div>
            <b>Number: </b>{spaceI.number}
        </div>
        <div>
            <b>Type: </b>{spaceI.type}
        </div>
        {(spaceI.type === "room") && <div>
            <b>Price: </b>{spaceI.price}
        </div>
        }
    </div>
}