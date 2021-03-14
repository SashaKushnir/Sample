import React from 'react'
import { Determine } from "../../../redux/tickets/ticketsReducer";

interface DataItemProps {
    keyVal: string
    value: number | boolean | null
}
export const DataItem: React.FC<DataItemProps> = ({value, keyVal}) => {
    return <div>
        <div>
            {keyVal}: {value}
        </div>
    </div>
}