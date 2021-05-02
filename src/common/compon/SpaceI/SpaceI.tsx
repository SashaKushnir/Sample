import React from 'react'
import {SpaceItem} from "../../../redux/banquetInfo/banquetInfoReducer";
import s from './SpaceI.module.css'
import {useDispatch} from "react-redux";
import {banquetActions} from "../../../redux/banquetInfo/banquetInfoActions";

interface SpaceIProps {
    spaceI: SpaceItem
}

export const SpaceI: React.FC<SpaceIProps> = ({spaceI}) => {

    const d = useDispatch()

    const selectSpaceI = () => {
        d(banquetActions.setSpaceSelectedOrUnSelected(spaceI.id))
    }

    return <div className={`${spaceI.selected?s.selected:''}  ${s.spaceI}`}
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