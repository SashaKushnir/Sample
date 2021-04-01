export const commonActions = {
    fetchingToggle: (status: boolean) => ({type:"FETCHING_TOGGLE", status}) as const,
    authToggle: (status: boolean) => ({type:"AUTH_TOGGLE", status}) as const

}
