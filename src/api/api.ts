import axios from "axios";



export const BaseURL = "http://194.213.104.146:222"
//http://imperia-api.com

export const myGetInstance = axios.create({
    baseURL: BaseURL,
    headers: {
        'Access-Control-Allow-Origin': '*',
        'User-Agent' : "PostmanRuntime/7.26.10",
        'Accept': '*/*',
        'Accept-Encoding': 'gzip, deflate, br',
        'Connection': ' keep-alive'
    }
})
export const myPostInstance = axios.create({
    baseURL: BaseURL,
    headers: {
        'API-KEY': 'fa27d1b2-0d5c-41e1-8165-6f8e31138afd'
    }
})

export type ApiCommonResultType<D> = {
    data : D
    response_error: string | null,
    response_status: boolean
    response_status_code: number,
}
// headers : {

// }