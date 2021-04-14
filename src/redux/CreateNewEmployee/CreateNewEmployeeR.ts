import {ActionsTypes} from "../store";
import {CreateNewEmployeeA} from "./CreateNewEmployeeA";


export interface InitialEmployee {

}

const initialEmployee = {

}


export const CreateNewEmployeeR = (createEA: InitialEmployee = initialEmployee,
                                   action: ActionsTypes<typeof CreateNewEmployeeA>): InitialEmployee => {
    switch (action.type) {
        default:
            return {
            ...createEA
            }
    }
}