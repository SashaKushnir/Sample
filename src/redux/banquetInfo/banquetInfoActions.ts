export const banquetActions = {
    setName: (name: string) => ({type: "SET_NAME", name}) as const,
    setBegining: (time: string) => ({type: "SET_BEGINING", time}) as const,
    setEnd: (time: string) => ({type: "SET_END", time}) as const,
    setDescription: (description: string) => ({type: "SET_DESCRIPTION", description}) as const,
}
