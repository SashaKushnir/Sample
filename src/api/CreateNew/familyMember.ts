import {ApiPostFamilyMemberResponseType, myGetInstance} from "../api";
import {CreateFamilyMember} from "../../components/Customer/CreateFMForm";

export const familyMembers = {
    createFamilyMember: (newFamilyMember: CreateFamilyMember,headerToken: string) => {
        return myGetInstance.post<ApiPostFamilyMemberResponseType>('/customer-family-members', {
            headers : {
                api_token: headerToken
            },
            data:  newFamilyMember
        })
    },
}
