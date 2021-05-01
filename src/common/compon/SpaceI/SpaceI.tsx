import React from 'react'
import {SpaceItem} from "../../../redux/banquetInfo/banquetInfoReducer";

interface SpaceIProps {
    spaceI: SpaceItem
}

export const SpaceI: React.FC<SpaceIProps> = ({spaceI}) => {
    return <div>
        <div>
            <b>Name: </b>Name:{spaceI.name}
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