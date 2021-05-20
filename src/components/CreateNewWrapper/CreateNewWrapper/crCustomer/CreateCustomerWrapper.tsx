import React, {useState} from 'react'
import {CreateCustomerForm} from "./CreateCustomerForm";
import {useDispatch, useSelector} from "react-redux";
import {filterCustomersByName, setCustomersT} from "../../../../redux/customers/customersThunk";
import {RootState} from "../../../../redux/store";
import {FetchingComponent} from "../../../../common/compon/FetchingComponent/FetchingComponent";

export const CreateCustomerWrapper = () => {

    const d = useDispatch()
    const customerIsPosting = useSelector((state: RootState) => state.common.isCustomerPosting)
    const [input, setInputVal] = useState("")

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value)
    }

    const handleKeyDown = (event: any) => {
        if (event.key === 'Enter') {
            search()
        }
    }

    const search = () => {
        d(filterCustomersByName(input))
    }

    const setAllDataBack = () => {
        d(setCustomersT())
        setInputVal("")
    }

    return <div>
        {customerIsPosting ? <FetchingComponent/> :
            <CreateCustomerForm/>
        }
        <input value={input} onKeyDown={handleKeyDown}  onChange={onChangeInput}/>
        <button onClick={search}>
            Search
        </button>
        <button onClick={setAllDataBack}>
            Cancel
        </button>
    </div>
}