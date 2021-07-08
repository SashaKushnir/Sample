export const CheckForDeleted = (obj:any) => {

    if ('deleted_at' in obj){
        if(obj.deleted_at != null)
        return true
    }
    return false

}
