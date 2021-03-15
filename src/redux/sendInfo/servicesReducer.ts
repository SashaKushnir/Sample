import { sendActions } from "./servicesActions";
import { ActionsTypes } from "../store";

const initialState=0

export const servicesReducer = (tickets = initialState, action: ActionsTypes<typeof sendActions>) => {

    switch (action.type) {
        default:
            return tickets
    }
}

// Thunk