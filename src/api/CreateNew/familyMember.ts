import {ApiPostFamilyMemberResponseType, ApiResultType, myGetInstance, myPostInstance} from "../api";
import {CreateFamilyMember, UpdateFamilyMember} from "../../components/Customer/CreateFMForm";

export const familyMembers = {
    createFamilyMember: (newFamilyMember: CreateFamilyMember, headerToken: string) => {
        return myGetInstance.post<ApiPostFamilyMemberResponseType>('/customer-family-members',
            {
                'data': newFamilyMember
            },
            {
                headers: {
                    'api-token': headerToken
                }
            })
    },
    deleteFamilyMember: (id: number, api_token: string) => {
        const obj = {
            "id": id
        }
        console.log(obj)
        return myPostInstance.delete<ApiResultType>('/customer-family-members', {
            headers: {
                'api-token': api_token
            },
            data: obj
        })
    },
    updateFamilyMember: (FamilyMember: UpdateFamilyMember, headerToken: string) => {
        return myGetInstance.patch<ApiPostFamilyMemberResponseType>('/customer-family-members',

            {
                "data": FamilyMember,
            },
            {
                headers: {
                    'api-token': headerToken
                },
            })
    },
}
