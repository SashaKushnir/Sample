import {ApiPostFamilyMemberResponseType, ApiResultType, myGetInstance, myPostInstance} from "../api";
import {CreateFamilyMember} from "../../components/Customer/CreateFMForm";

export const familyMembers = {
    createFamilyMember: (newFamilyMember: CreateFamilyMember,headerToken: string) => {
        return myGetInstance.post<ApiPostFamilyMemberResponseType>('/customer-family-members', {
            headers : {
                'api-token': headerToken
            },
            data:  newFamilyMember
        })
    },
    // deleteFamilyMember: (id: number, api_token: string) => {
    //     const obj = {
    //         "id": id
    //     }
    //
    //     return myPostInstance.delete<ApiResultType>('/customer-family-members', {
    //         headers: {
    //             'api-token': api_token
    //         },
    //         data: obj
    //     })
    // },
}
